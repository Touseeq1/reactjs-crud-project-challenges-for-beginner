import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Reset_pass = () => {
    const navigate = useNavigate();
    const [regError, setRegError] = useState({ Status: false, msg: "", type: "" })
    const ResetHandle = (e) => {
        e.preventDefault()
        const Rdate = new FormData(e.currentTarget);
        const RactualData = {
            Password: Rdate.get("Password"),
            ConfrmPassword: Rdate.get("ConfrmPassword"),
        }
        if (RactualData.Password && RactualData.ConfrmPassword) {
            if (RactualData.Password === RactualData.ConfrmPassword) {  //This is "If" for Confrm password
                console.log(RactualData)
                setRegError({ Status: true, msg: "Password Reset success", type: "alert-success" })
                document.getElementById("reset-form").reset();
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
                    <form className="reg-form" id="reset-form" onSubmit={ResetHandle}>
                        <div className="card-body">
                            <div className="row g-2"><input type="text" name="Password" placeholder="Enter Password" /></div>
                            <br />
                            <div className="row g-2"><input type="text" name="ConfrmPassword" placeholder="Confirm Password" /></div>
                            <br />
                            <div className="row">
                            <div className="col-5">
                                {regError.Status ? <alert severity={regError.type}>{regError.msg}</alert> : ""}
                                </div>
                                <div className="col-5">
                             <button className="p-2">Update_ReserPass</button>
                            </div>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Reset_pass