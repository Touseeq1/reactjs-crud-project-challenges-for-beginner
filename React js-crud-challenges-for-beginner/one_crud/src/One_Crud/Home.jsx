import React from "react";
import List from "./List";
import axios from "axios";
import { useState } from "react";
const Home = () => {
    const [poststate, setPoststate] = useState({ stuname: "", email: "" })
    const [ifpost, setIfpost] = useState();
    function onTextFieldChange(e){
        setPoststate({ ...poststate, [e.target.name]: e.target.value })
    }
    async function onFormSubmit(e) {
        e.preventDefault() //use for button. cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur after click
        try {
            await axios.post(`http://localhost:3333/students`,poststate)
            setIfpost(true)
        }
        catch (error) {
        }
    }
    if (ifpost) {
        return <Home />
    }
return (
    <>
        <div className="container-fluid">
            <div className="main-row row">
                <div className="col-12">
                    <div className="card col-12">
                        <div className="card-body">
                            Crud-App with API
                        </div>
                    </div>
                </div>
                <div className="main-colum col-12 mt-4">
                    <div className="row">
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xxl-6">
                            <div className="card">
                                <div className="card col-12">
                                    <div className="card-body">
                                        Enter Students
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="stuname" onChange={e => onTextFieldChange(e)} placeholder="Enter Name" /><br />                                            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="email" onChange={e => onTextFieldChange(e)} placeholder="Enter Email" /><br />
                                        </div>
                                        <div className="row"> <button className="p-2" onClick={e => onFormSubmit(e)}>Form_Submit</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <List />
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
export default Home
