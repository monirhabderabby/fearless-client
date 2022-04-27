
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if(user){
        console.log(user);
    }
    if(loading){
        return
    }
    const handleSignOut = () =>{
        signOut(auth)
    }
    
    return (
        <nav className='nav'>
            <div className='logo'>
                <Link to="/">Fearless</Link>
            </div>
            <div className='nav-item'>
                <Link to="/" className='menu'>Home</Link>
                <Link to="/" className='menu'>Cart</Link>
                {
                    user ?
                    <Link to="/login" className='menu' onClick={handleSignOut}>SignOut</Link>
                    :
                    <Link to="/login" className='menu'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;