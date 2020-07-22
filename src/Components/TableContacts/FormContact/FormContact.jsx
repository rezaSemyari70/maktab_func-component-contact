import React from 'react';
import {useState} from 'react';

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
    
    // Clear Form contact
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

    return (
        <div>
        {/* Form Contacts */}
            <form className="mt-5 mb-4" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col ">
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="exampleInputName1">Name:</label>
                            <input
                                className="form-control"
                                name={"firstname"}
                                id="name"
                                value={newContact.firstname}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter name of contact"
                                required
                                pattern=".{4,}"
                                title="Please enter at least 4 characters."/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
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
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center my-2">
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
                        <div className="d-flex justify-content-between align-items-center my-2">
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
                        <div className="col-2 pt-2 ml-5">
                            <div className="d-flex justify-content-between align-items-center">
                                
                                <button className="btn-success saveBtn" type="submit">Save Contact</button>
                            </div>
                            <div className="d-flex align-self-center justify-content-between mt-2">
                                <button className="btn-outline-secondary clearBtn" onClick={handleClear} type="reset">Clear</button>
                            </div>  
                        </div>
                        <div className="col-1"></div>
                    
                </div>

            </form>
        </div>
    );
}

export default FormContact;
