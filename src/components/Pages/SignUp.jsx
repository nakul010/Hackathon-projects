import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../SignUp.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SiginUp() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        c_password: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        handleValidation();
        // alert("Hello this is Form");
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        // theme: "dark",
      };
    const handleValidation = () => {
        const { password, c_password, username, email } = values;
        if (password !== c_password) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;
        } else if (username.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }

        return true;
    };
    return (
            <div className="formContainer">
            <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className='brand'>
                        <h1>HackSquad</h1>
                    </div>
                    <input type="text" placeholder="UserName" name="username" onChange={(e) => handleChange(e)} />
                    <input type="text" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="Confirm Password" name="c_password" onChange={(e) => handleChange(e)} />
                    <button type='submit'>Create Account</button>
                    <span>
                        Already Have An Account <Link to="/login">Login</Link>
                    </span>
                </form>
                <ToastContainer />
        </div>
    )
}

export default SiginUp