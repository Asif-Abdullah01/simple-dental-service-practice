import { useContext } from "react";
import { authContext } from "./AuthProvider";

const Modal = ({treatment}) => {
    const {user} = useContext(authContext)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);

        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value

        const info = {
            fname,lname,email,treatment
        }

        let saveData = []
        const localData =localStorage.getItem('appointments');

        if(localData){
            saveData = JSON.parse(localData)
        }
        saveData.push(info)
        localStorage.setItem('appointments',JSON.stringify(saveData))
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} action="">
                        <div>
                            <h2>First Name:</h2>
                            <input
                            name="fname"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <h2>Last Name:</h2>
                            <input
                            name="lname"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <h2>Email:</h2>
                            <input
                            name="email"
                            type="email"
                            value={user?.email}
                            placeholder="Email here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <h2>Phone Number:</h2>
                            <input
                            name="phone"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <h2>Appointed Date:</h2>
                            <input
                            name="date"
                            type="date"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <h2>Address:</h2>
                            <input
                            name="adress"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <button className="btn btn-primary mt-2" type="submit">Make Appoinment</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;