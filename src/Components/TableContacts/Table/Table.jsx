import React, { useState } from 'react';

import TableRow from '../TableRow/TableRow';
import FormContact from '../FormContact/FormContact';
import './Table.scss';


function Table(props ){
    const [contacts ,setContacts] = useState(
       
        [
            {id:1, firstname: 'ali' , lastname: 'davudi' , email:'ali@gmail.com' , phone:'09123846734'},
            {id:2, firstname: 'Saeed' , lastname: 'mohammadi' , email:'saeed@gmail.com' , phone:'09103843917'},
            {id:3, firstname: 'kazem' , lastname: 'masumi' , email:'kazem@gmail.com' , phone:'09363843998'},
            {id:4, firstname: 'Nima' , lastname: 'mohseni' , email:'nima@gmail.com' , phone:'09353843972'},
            {id:5, firstname: 'Alireza' , lastname: 'sharifi' , email:'alireza@gmail.com' , phone:'09193843924'},
            {id:6, firstname: 'Makan' , lastname: 'alimohammadi' , email:'makan@gmail.com' , phone:'09123843911'},
            {id:7, firstname: 'nader' , lastname: 'amini' , email:'nader@gmail.com' , phone:'09193844928'},
            {id:8, firstname: 'Yaser' , lastname: 'davudi' , email:'Yaser@gmail.com' , phone:'09153843949'},
            {id:9, firstname: 'Karim' , lastname: 'davudi' , email:'karim@gmail.com' , phone:'09133413972'},
            {id:10, firstname:'Morteza' , lastname: 'davudi' , email:'morteza@gmail.com' , phone:'09103843955'},
        ]
        
    )

    const [search , setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    let filteredContacts = contacts.filter(contact => 
           contact.phone.startsWith(search) 
        || contact.firstname.startsWith(search.toLowerCase()) 
        || contact.firstname.startsWith(search.toUpperCase()));


    const handleAdd = (obj) =>{
        setContacts([...contacts , obj]);
    }

    const handleDelete = (id) => {
        setContacts([...contacts.filter(contact => contact.id !== id)]);
    }
    
    return <>
        
        <div className="container">
            <div className="row ">
                <div className="col ">
                    <div className="row justify-content-center mt-4 fixBox">
                        <input 
                            className="form-control form-control-lg bg-info"
                            name={'search'} 
                            value={search} 
                            onChange={handleChange} 
                            placeholder="Search by Name or Phone"
                        />
                        <span><i className="fa fa-search"/></span>
                    </div>
                    <div className="formBox">
                        <FormContact handleAdd={handleAdd}/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center contentTable">
                <div className="col">
                    <table className="table table-hover">
                        <thead className="headerColor">
                            <tr className="">
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map(contact=>(
                                <TableRow 
                                    key={contact.id} 
                                    firstname={contact.firstname}
                                    lastname={contact.lastname}    
                                    email={contact.email}    
                                    phone={contact.phone}
                                    handleDelete={()=>handleDelete(contact.id)}
                                />
                            ))}
                                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   </>
}

export default Table;
