import React from 'react';
import {useState} from 'react';
import AOS from 'aos'

import './FormContact.scss';

const FormContact = (props) => {
    const [newContact,
        setNewContact] = useState({firstname: '', lastname: '', email: '', phone: ''});

    const handleChange = (event) => {
        const value = event.target.value;
        setNewContact({
            ...newContact,
            [event.target.name]: value
        })
    }

    const handleClear = () => {
        setNewContact({firstname: '', lastname: '', email: '', phone: ''})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newContact.firstname.length > 0 && newContact.lastname.length > 0 && newContact.email.length > 0 && newContact.phone.length > 0) {
            props.handleAdd({
                ...newContact,
                id: Math.floor(Math.random() * 100 + 10)
            })
            handleClear();
        }
    }

    AOS.init()

    return (
        <div>
            <form className="mt-5 mb-4" onSubmit={handleSubmit} >
                <div className="col d-lg-flex">
                    <div className="col-1"></div>
                    <div className="col" style={{overflow: "hidden"}}>
                        <div className="d-flex justify-content-between align-items-center my-2"data-aos="fade-left"
                                    data-aos-offset="300" data-aos-easing="ease-in-sine" >
                            <label htmlFor="exampleInputName1">Name:</label>
                            <input
                                className="form-control "
                                name={"firstname"}
                                id="name"
                                value={newContact.firstname}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter name of contact"
                                required
                                pattern=".{4,}"
                                title="at least 4 character"
                                />
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2" data-aos="fade-right"
                                    data-aos-offset="300" data-aos-easing="ease-sine">
                            <label htmlFor="exampleInputLastname1">Lastname:</label>
                            <input
                                className="form-control"
                                name={"lastname"}
                                id="lastname"
                                value={newContact.lastname}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter surname of contact"
                                required/>
                        </div>
                    </div>
                    <div className="col"  style={{overflow: "hidden"}}>
                        <div className="d-flex justify-content-between align-items-center my-2" data-aos="fade-left"
                                    data-aos-offset="300" data-aos-easing="ease-sine">
                            <label htmlFor="exampleInputEmail1">Eamil:</label>
                            <input
                                className="form-control"
                                name={"email"}
                                id="email"
                                value={newContact.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Enter email of contact"
                                required/>
                        </div>
                        <div >
                            <div className="d-flex justify-content-between align-items-center my-2" data-aos="fade-right"
                                    data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <label htmlFor="exampleInputPhone1">Phone:</label>
                                <input
                                className="form-control"
                                name={"phone"}
                                id="phone"
                                value={newContact.phone}
                                onChange={handleChange}
                                type="tel"
                                placeholder="Enter phone of contact"
                                required
                                pattern=".{11,}"/>
                            </div>
                        </div>
                    </div>
                    
                        <div className="d-flex d-lg-block pt-2 ml-lg-5  align-items-center justify-content-center boxBtn">
                            <div className="d-flex justify-content-between align-self-center" >
                                
                                <button className="btn-success mr-2 mr-lg-0 saveBtn" type="submit" data-aos="zoom-in">Save Contact</button>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" >
                                <button className="btn-outline-secondary mb-2 clearBtn" onClick={handleClear} type="reset" data-aos="zoom-in-up">Clear</button>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    
                </div>

            </form>
        </div>
    );
}

export default FormContact;
