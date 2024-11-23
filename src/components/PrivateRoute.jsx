import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    // console.log(user);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <h1>Loading...........</h1>
    }

    if(!user) {
        return <Navigate state={{from:location.pathname}} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;