import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { authContext } from './AuthProvider';
const Navbar = () => {
    const {user,handleLogout} = useContext(authContext)
    return (
        <div className='min-h-20 bg-[#9bf3c2] flex justify-between items-center'>
            <div><h2 className='text-2xl ml-4 font-bold'>TEETH WIZARD</h2></div>
            <div className='space-x-8'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/allTreatments'}>All Treatments</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/myAppointments'}>My appointments</NavLink>
            </div>
            <div>
               {
                user?.email ? 
                <div className='flex gap-2 items-center'>
                    <img src={user.photoURL} alt="" />
                    <button onClick={handleLogout} className='btn btn-info'>Logout</button>
                </div> :
                 <NavLink to={'/login'}>
                 <button className='btn btn-info mr-4'>Login</button>
             </NavLink>
               }
            </div>
        </div>
    );
};

export default Navbar;