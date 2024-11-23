import { useContext, useEffect, useState } from "react";
import { authContext } from "./components/AuthProvider";

const MyAppointments = () => {
    const { user } = useContext(authContext)

    const [localSavedData,setLocalSavedData] = useState([]);
    useEffect(() => {
        const localData = localStorage.getItem('appointments')
        let savedData = [];

        if (localData) {
            savedData = JSON.parse(localData)
        }

        const userData = savedData.filter(data => data.email === user?.email);
        console.log(userData);
        setLocalSavedData(userData)

    }, [])


    return (
        <div>
            {
                localSavedData.map((data,idx) => <h2 key={idx}>{data.treatment}</h2>)
            }

        </div>
    );
};

export default MyAppointments;