import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Ch_pass = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({ Status: false, msg: '', type: '' }) //This is object in useState() 
    const handlechpass = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);  //All inputfield data are come here
        const actualData = {                      //actualData is object
            oldpass: data.get('old_pass'),  // mean data sy get ki email
            newpass: data.get('new_pass'),
        }
        //    console.log(actualData)
        if (actualData.oldpass && actualData.newpass) {
            // console.log(actualData)
            document.getElementById('chpass-form').reset(); //To empty input field
            setError({ Status: true, msg: 'Update password success', type: 'alert-success' }) //Here type is color
            setTimeout(() => {
                navigate("/logreg");
            }, 3000)
        } else {
            // console.log('all field are required')
            setError({ Status: true, msg: 'All field are required to login', type: 'alert-danger' })
        }
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-9">
                            <form onSubmit={handlechpass} id="chpass-form">
                                <div class="card">
                                    <div class="card-body">
                                        <h1>Change Password</h1><br />
                                        <div class="row g-2"><input type="text" name="old_pass" placeholder="Enter New Passord" />
                                        </div><br />
                                        <div class="row g-2"><input type="text" name="new_pass" placeholder="Enter New Confirm Passord" /></div><br />
                                        <div class="row g-2">
                                            <div class="col-4">
                                                {error.Status ? <alert severity={error.type}>{error.msg}</alert> : ''}
                                                <button class="p-2">UPDATE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ch_pass

