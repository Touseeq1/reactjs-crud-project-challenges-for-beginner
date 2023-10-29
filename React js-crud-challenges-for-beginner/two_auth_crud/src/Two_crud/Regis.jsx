import React from "react";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
const Regis = (e) => {
    const navigate=useNavigate();
    const [regError, setRegError] = useState({ Status: false, msg: "", type: "" })
    const RegHandle = (e) => {
        e.preventDefault()
        const Rdate = new FormData(e.currentTarget);
        const RactualData = {
            Namee: Rdate.get("Name"),
            Maill: Rdate.get("Email"),
            Password: Rdate.get("Password"),
            ConfrmPassword: Rdate.get("ConfrmPassword"),
            Agree: Rdate.get("tc"),
        }
        if (RactualData.Namee && RactualData.Maill && RactualData.Password && RactualData.ConfrmPassword && RactualData.Agree !== null) {
            if (RactualData.Password === RactualData.ConfrmPassword) {  //This is "If" for Confrm password
                console.log(RactualData)
                setRegError({ Status: true, msg: "Registration success", type: "alert-success" })
                document.getElementById("reg-form").reset();
                setTimeout(()=>{
                    navigate("/logreg");
                },3000)
            }
            else {
                setRegError({ Status: true, msg: "Confrm password not Match", type: "alert-success" })
            }
        }
        else {
            setRegError({ Status: true, msg: "All field are required to Registration", type: "alert-dangerus" })
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-10 col-lg-9 col-md-9 col-xxl-9">
                    <form className="reg-form" id="reg-form" onSubmit={RegHandle}>
                        <div className="card-body">
                            <div className="row g-2"><input type="text" name="Name" placeholder="Enter Name" /></div><br />
                            <div className="row g-2"><input type="text" name="Email" placeholder="Enter Email" /></div><br />
                            <div className="row g-2"><input type="text" name="Password" placeholder="Enter Password" /></div>
                            <br />
                            <div className="row g-2"><input type="text" name="ConfrmPassword" placeholder="Confirm Password" /></div>
                            <br />
                            <div className="row">
                                <div className="col-9">
                                    <input type="checkbox" id="vehicle1-tc" value="Agree" name="tc" />
                                    <label for="vehicle1">I Agree to term and condition</label>
                                </div>
                                {regError.Status ? <alert severity={regError.type}>{regError.msg}</alert> : ""}
                            </div><br />
                            <div className="row">
                                <div className="col-7">
                                    <a href="#" className="link-primary">Forget Password</a>
                                </div>
                                <div className="col-5">
                                    <button className="p-2">REGISTRATION</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Regis