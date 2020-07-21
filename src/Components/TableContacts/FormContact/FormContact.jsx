import React from 'react';
import {useState} from 'react';

const FormContact = (props) => {
    const [newContact,
        setNewContact] = useState({
            firstname: '', 
            lastname: '', 
            email: '', 
            phone: ''
        });

    const handleChange = (event) => {
        const value = event.target.value;
        setNewContact({
            ...newContact , [event.target.name]: value
        })
    }

    const handleClear = () => {
        setNewContact({
            firstname: '', 
            lastname: '', 
            email: '', 
            phone: ''
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newContact.firstname.length > 0 
            && newContact.lastname.length > 0 
            && newContact.email.length > 0 
            && newContact.phone.length > 0){
                props.handleAdd({...newContact , id: Math.floor(Math.random() * 100 + 10)})
                handleClear();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    name={"firstname"}
                    id="name"
                    value={newContact.firstname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter name of contact"
                    required 
                    pattern=".{4,}" 
                    title="Please enter at least 4 characters."
                    />
                <label>Lastname:</label>
                <input
                    name={"lastname"}
                    id="lastname"
                    value={newContact.lastname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter surname of contact"
                    required
                    />
                <label>Eamil:</label>
                <input
                    name={"email"}
                    id="email"
                    value={newContact.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email of contact"
                    required
                   />
                <label>Phone:</label>
                <input
                    name={"phone"}
                    id="phone"
                    value={newContact.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter phone of contact"
                    required
                    pattern=".{11,}"
                    />
                <button type="submit">Save</button>
                <button onClick={handleClear} type="reset">Clear</button>
            </form>
        </div>
    );
}

export default FormContact;
