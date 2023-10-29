import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [editval, setEditval] = useState({ stuname: "", email: "" });
    
    function Textfielchange(e) {
        setEditval({ ...editval, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        async function getEdit() {
            try {
                const editID = await axios.get(`http://localhost:3333/students/${id}`)
                setEditval(editID.data)
            }
            catch (error) {
            }
        } getEdit()
    }, [])
    
    async function updateID(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3333/students/${id}`,editval)
            
        }
        catch (error) {
        }
    }
    
    function Back() {
        navigate('/');
    }
    return (
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="card col-12">
                                <div className="card-body">
                                    Edit Students
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xxl-12">
                            <div className="card mt-4">
                                <div className="card col-12">
                                    <div className="card-body">
                                        <form>
                                            <div className="row ">
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xxl-5">
                                                    <div className="row g-2"> <input className="p-4" type="text" onChange={e => Textfielchange(e)} name="id" value={id} placeholder="Student ID" /></div><br />
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xxl-5">
                                                    <div className="row g-2"> <input className="p-4" type="text" onChange={e => Textfielchange(e)} name="stuname" value={editval.stuname} placeholder="Enter Name" /></div><br />
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-10">
                                                    <div className="row g-2"> <input className="p-4" type="text" onChange={e => Textfielchange(e)} name="email" value={editval.email} placeholder="Enter Email" /></div><br />
                                                </div>
                                            </div>
                                            <div className="row mt-4 ">
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="row g-3">
                                                        <button className="p-4" onClick={e => updateID(e)}>Update</button>
                                                    </div>

                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="row g-3">
                                                        <button className="p-4" onClick={Back}>Back to Home</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            </div>
        </>
    )
}
export default Edit
