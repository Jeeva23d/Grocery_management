 import './Login.css'
 import { FaFacebook } from "react-icons/fa";
 import { FcGoogle } from "react-icons/fc";
 import { FaLinkedin } from "react-icons/fa";
 import { Link } from 'react-router-dom';
 export  default function Login(){
    return(
        <div className="Login-Container">
            <div className="Login-Left">
                <div className="Login-User">
                    <h1 className='Login-Name'>Login to Your Account</h1>
                    <p>Login using social networks</p>
                    <div className="Login-SocialNetworks">
                    <FaFacebook size={40} style={{
                        marginRight:"12px"
                    }}/>
                    <FcGoogle size={40}/>
                    <FaLinkedin size={40} style={{
                         marginLeft:"12px"
                    }}/>

                    </div>
                    <div className='Login-or'>
                        <hr className='Login-hr1'></hr>
                        <p>OR</p>
                        <hr className='Login-hr2'></hr>

                    </div>
                    <div className='Login-Inputs'>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button type="submit">Sign In</button>
                    </div>

                </div>

            </div>
            <div className="Login-Right">
                <div className="JumpToSignup">
                    <h1>New Here?</h1>
                    <p>Sign up and discover a great Experience with our website</p>
                    <Link to="/Signup"><button className="Enter-to-Signup">Sign Up</button></Link>


                </div>
            </div>

        </div>
    )
}