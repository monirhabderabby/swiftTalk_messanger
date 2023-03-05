import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { firebaseStorage } from "../../firebase.init";

export const Registration = () => {
    const [profilePhoto, setProfilePhoto] = useState("");
    const [photoLoading, setPhotoLoading] = useState(false);
    const [photoName, setPhotoName] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            onSubmit();
        }
    }
    const onSubmit = data => {
        data.profilePhoto = profilePhoto;
        console.log(data);
    };

    const onDrop = useCallback(acceptedFiles => {
        setPhotoLoading(true);
        const photo = acceptedFiles[0];

        // set photo name
        setPhotoName(photo?.name);
        // Do something with the files
        const storageRef = ref(firebaseStorage, `profile/${photo.name + uuidv4()}`);
        uploadBytes(storageRef, photo).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(url => {
                setProfilePhoto(url.toString());
                setPhotoLoading(false);
            });
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-black w-[500px] px-[20px] py-[10px]">
                <h3 className="text-white text-[30px]">Registration</h3>
                <form className="my-[20px]" onSubmit={handleSubmit(onSubmit)}>
                    <section className="flex flex-col gap-y-[10px]">
                        <div className="flex flex-col">
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Your name is required",
                                    },
                                })}
                                type="text"
                                id="name"
                                placeholder="Full name"
                                className="w-full h-[45px] rounded-[10px] px-[20px] bg-[#212121] outline-none text-[rgba(255,255,255,0.5)]"
                                onKeyDown={handleKeyDown}
                            />
                            <label htmlFor="name" className="text-red-500 px-[5px] my-[2px]">
                                {errors.name?.type === "required" && <span>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Your email is required",
                                    },
                                })}
                                type="text"
                                id="email"
                                placeholder="Email"
                                className="w-full h-[45px] rounded-[10px] px-[20px] bg-[#212121] outline-none text-[rgba(255,255,255,0.5)]"
                                onKeyDown={handleKeyDown}
                            />
                            <label htmlFor="email" className="text-red-500 px-[5px] my-[2px]">
                                {errors.email?.type === "required" && <span>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Your password is required",
                                    },
                                })}
                                type="text"
                                id="password"
                                placeholder="Password"
                                className="w-full h-[45px] rounded-[10px] px-[20px] bg-[#212121] outline-none text-[rgba(255,255,255,0.5)]"
                                onKeyDown={handleKeyDown}
                            />
                            <label htmlFor="email" className="text-red-500 px-[5px] my-[2px]">
                                {errors.password?.type === "required" && <span>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div
                            {...getRootProps()}
                            className="text-[rgba(255,255,255,0.5)] h-[90px] flex justify-center items-center bg-[#212121] rounded-[10px]"
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-white">Drop the files here ...</p>
                            ) : photoLoading ? (
                                <div>Uploading...</div>
                            ) : photoName ? (
                                <p className="text-green-400 text-[16px] font-Poppins">{photoName}</p>
                            ) : (
                                <p>Drag & Drop your photo here</p>
                            )}
                        </div>
                    </section>
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue disabled:bg-[#6d6c6c] mt-[20px] h-[45px] w-full text-white rounded-[4px]"
                        disabled={!profilePhoto}
                    />
                </form>
            </div>
        </div>
    );
};
