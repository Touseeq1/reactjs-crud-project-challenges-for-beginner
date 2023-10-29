import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({ Status: false, msg: '', type: '' }) //This is object in useState() 
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);  //All inputfield data are come here
        const actualData = {                      //actualData is object
            email: data.get('eemail'),  // mean data sy get ki email
            password: data.get('ppassword'),
        }
        //    console.log(actualData)
        if (actualData.email && actualData.password) {
            // console.log(actualData)
            document.getElementById('login-form').reset(); //To empty input field
            setError({ Status: true, msg: 'Login success', type: 'alert-success' }) //Here type is color
            setTimeout(()=>{
                navigate("/dashbord");
            },3000)
        } else {
            // console.log('all field are required')
            setError({ Status: true, msg: 'All field are required to login', type: 'alert-danger' })
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-10 col-lg-9 col-md-9 col-xxl-9">
                    <div className="card-body">
                        <form type="submit" id="login-form" onSubmit={handleSubmit}>
                            <div className="row g-2"><input type="text" name='eemail' id='email' placeholder="Enter Email" /></div><br />
                            <div className="row g-2"><input type="text" name='ppassword' id='password' placeholder="Enter Password" /></div>
                            <br />
                            <div className="row">
                                <div className="col-10 mb-2">
                                    <Link to="/sendpassreg">Forget Password</Link>
                                </div>
                                {error.Status ? <alert severity={error.type}>{error.msg}</alert> : ''}
                                <div className="col-5">
                                    <button className="p-2">LogIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login