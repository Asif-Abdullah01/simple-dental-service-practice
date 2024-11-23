import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Modal from "../Modal";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[80%] mx-auto max-w-[1200px] mt-6">
                <Outlet></Outlet>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default MainLayout;