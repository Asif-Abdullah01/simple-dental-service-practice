import { useContext, useState } from 'react';
import { authContext } from './AuthProvider';

const Register = () => {
    const { handleRegister,manageProfile } = useContext(authContext)
    const [error,setError] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const confirmPass = e.target.confirmPass.value;
        console.log(name,image,email,pass,confirmPass);

        setError("")


        if(pass.length < 6){
            setError("Password must contain at least 6 characters")
            return
        }

        if(pass !== confirmPass){
            setError("Passwords didn't match")
            return;
        }

        if(!/[a-z]/.test(pass)){
            setError("Password must contain at least one lowercase letter")
            return;
        }

        if(!/[A-Z]/.test(pass)){
            setError("Password must contain at least one uppercase letter")
            return;
        }

        handleRegister(email,pass)
        // eslint-disable-next-line no-unused-vars
        .then(res => {
            manageProfile(name,image);
        })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
            <div>
            Name: <input
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs" required/>
            </div>

            <div>
            Image: <input
            name="image"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs" required/>
            </div>

            <div>
            Email: <input
            name="email"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs" required/>
            </div>

            <div>
            Password: <input
            name='pass'
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs" required/>
            </div>

            <div>
            Confirm Password: <input
            name='confirmPass'
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs" required/>
            </div>

            <button type='submit' className='btn btn-info'>Register</button>
            
            </form>

            {
                error && <p className="text-red-500">{error}</p>
            }
        </div>
    );
};

export default Register;