import './Signup.css';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
<div className="Signup-Container">
      <div className="Signup-Left">
        <div className="Jumpto-Signin">
             <h1>Welcome Back</h1>
             <p>To keep connected with us please</p>
             <p>login with your personal info</p>
             <Link to='/Login'><button> SIGN IN</button></Link>
        </div>
      </div>


       <div className="Signup-Right">
            <div className="Signup-User">
                <h1>Create  Account</h1>
               
                <div className="Signup-Inputs" >
                    <input type="text"  placeholder="First Name"/>
                    <input type="text"  placeholder="Last Name"/>
                    <input type="email"  placeholder="Email"/>
                    <input type="password"  placeholder="Password"/>
                    <input type="password"  placeholder="Confirm Password"/>
                    <textarea placeholder="Address" ></textarea>
                    <input type="text" placeholder="Phone Number"/>
                    <button>SIGN UP</button>
                </div>

             </div>
       </div>
</div>
    
  

  );
}
