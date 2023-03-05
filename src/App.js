import { Route, Routes } from "react-router-dom";
import { Registration } from "./Components/Authentication/Registration";
import { Inbox } from "./Components/Inbox/Inbox";
import { MessageBox } from "./Components/Message/MessageBox";

function App() {
    return (
        <div className="py-[35px] px-[32px] bg-[#222222] min-h-screen">
            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route path="/" element={<Inbox />}>
                    <Route path=":id" element={<MessageBox />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
