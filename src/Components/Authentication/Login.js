import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
    const [isEmptyField, setIsEmptyField] = useState(true);
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
        if (!data?.email || !data?.password) {
            setIsEmptyField(true);
        } else {
            console.log(data);
        }
    };
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-black w-[500px] px-[20px] py-[10px]">
                <h3 className="text-white text-[30px]">Login</h3>
                <form className="my-[20px]" onSubmit={handleSubmit(onSubmit)}>
                    <section className="flex flex-col gap-y-[10px]">
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
                                onChange={() => setIsEmptyField(false)}
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
                                onChange={() => setIsEmptyField(false)}
                            />
                            <label htmlFor="email" className="text-red-500 px-[5px] my-[2px]">
                                {errors.password?.type === "required" && <span>{errors.password.message}</span>}
                            </label>
                        </div>
                    </section>
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue disabled:bg-[#6d6c6c] mt-[20px] h-[45px] w-full text-white rounded-[4px]"
                        disabled={isEmptyField}
                    />
                </form>
            </div>
        </div>
    );
};
