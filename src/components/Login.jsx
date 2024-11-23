import { useContext, useState } from "react";
import { authContext } from "./AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { handleGoogleLogin ,handleLogin, handleLogout } = useContext(authContext);
    // console.log(contextValue);
    const [error,setError] = useState('');
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const pass = e.target.pass.value;
        const email = e.target.email.value;
        console.log(email,pass);

        handleLogin(email,pass)
        .then(res => {
            // navigate(location.state.from)
            navigate(location?.state?.from ? location?.state?.from : "/");
            // console.log(res.user);
        })
        .catch(err => setError(err.message))
        
    }

    const googleLoginghandler = () => {
        handleGoogleLogin()
        .then(res => {
            // navigate(location.state.from)
            navigate(location?.state?.from ? location?.state?.from : "/");
        })
    }

    return (
        <div>
            <div className="my-4">
                <form onSubmit={handleSubmit} action="">

                    <div>
                        Email: <input
                            name="email"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div>
                        Password: <input
                            name='pass'
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <button type='submit' className='btn btn-info'>Login</button>

                </form>
            </div>
            <button className="btn btn-primary my-2" onClick={googleLoginghandler}>Login With Google!</button>
            New to the Website? Please <NavLink className={'text-green-600'} to={'/register'}>Register</NavLink>
            
            {/* error.split('/')[1].length-2 ->  */}
            {error && <p className="text-red-600">{error.split('/')[1].slice(0,error.split('/')[1].length-2)}</p>} 
            <button className="block btn" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Login;