import React from "react";
import { useState } from "react";
const SendPassReg = () => {
    const [error, setError] = useState({ Status: false, msg: '', type: '' }) //This is object in useState() 
    const handlesend = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);  //All inputfield data are come here
        const actualData = {                      //actualData is object
            sendd: data.get('eemail'),  // mean data sy get ki email
        }
        if (actualData.sendd) {
            setError({ Status: true, msg: 'Password send success', type: 'alert-success' }) //Here type is color
            document.getElementById("sendPassReg-form").reset(); //To empty input field
        } else {
            setError({ Status: true, msg: 'All field are required to login', type: 'alert-danger' })
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-lg-6">
                        <form type="submit" className="send-form" id="sendPassReg-form" onSubmit={handlesend}>
                            <div className="row g-2"><input type="text" name='eemail' id='pass' placeholder="Enter new pass" /></div><br />
                            <button>Send</button>
                            {error.Status ? <alert severity={error.type}>{error.msg}</alert> : ''} <br />
                        </form>
                    </div>
                    <div className="col-6 col-lg-6">
                    </div>
                </div>
            </div>
        </>
    )

}
export default SendPassReg