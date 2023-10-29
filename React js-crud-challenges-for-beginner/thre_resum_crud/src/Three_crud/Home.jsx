import React from "react";
import List from "./List";
const Home = () => {
    return(
        <>
    <div className="container-fluid">
        <div className="main-row row">
            <div className="col-12">
                <div className="card col-12">
                    <div className="card-body">
                        3nd Crud-App with API
                    </div>
                </div>
            </div>
            <div className="main-colum col-12">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row"> <input className="p-3" type="text" placeholder="Enter Name" /></div><br />
                                <div className="row"> <input className="p-3" type="text" placeholder="Enter Email" /></div><br />
                                <div className="row"> <input className="p-3" type="date"/></div><br />
                                <div className="row"><select className="form-select p-3" aria-label="Default select example">
                                    <option selected>State</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select></div><br/>
                                    <div className="Radioo">
                                        <h6>Gender</h6>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                value="option1" />
                                            <label className="form-check-label" for="inlineRadio1"> Female</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                value="option2" />
                                            <label className="form-check-label" for="inlineRadio2">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                value="option2" />
                                            <label className="form-check-label" for="inlineRadio2">Other</label>
                                        </div>
                                    </div><br/>
                                        <h5>Prefer Job Location</h5>
                                        <div className="row">
                                            <div className="col-3">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1">Lahore</label>
                                            </div>
                                            <div className="col-4">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1">Islamabad</label>
                                            </div>
                                            <div className="col-4">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1">Khushab</label>
                                            </div>
                                        </div><br/>
                                            <div className="row ">
                                                <div className="col-10">
                                                    <div className="row">
                                                        <div className="col-4 ">
                                                            <input type="file" id="myfile" name="myfile" />
                                                        </div>
                                                        <div className="col-4">
                                                            <input type="file" id="myfile" name="myfile" />
                                                        </div><br />
                                                        <div className="col-2">
                                                            <button className="p-1">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                         <List />
                        </div>
                    </div>
                </div>
            </div>
            </> );
}
            export default Home