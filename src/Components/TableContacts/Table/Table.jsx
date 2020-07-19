import React, { useState } from 'react';

import TableRow from '../TableRow/TableRow';

function Table(props){
    const [contacts] = useState(
       
        [
            {id:1, firstname: 'Ali' , lastname: 'davudi' , email:'ali@gmail.com' , phone:'09123846734'},
            {id:2, firstname: 'Saeed' , lastname: 'mohammadi' , email:'saeed@gmail.com' , phone:'09103843917'},
            {id:3, firstname: 'kazem' , lastname: 'masumi' , email:'kazem@gmail.com' , phone:'09363843998'},
            {id:4, firstname: 'Nima' , lastname: 'mohseni' , email:'nima@gmail.com' , phone:'09353843972'},
            {id:5, firstname: 'Alireza' , lastname: 'sharifi' , email:'alireza@gmail.com' , phone:'09193843924'},
            {id:6, firstname: 'Makan' , lastname: 'alimohammadi' , email:'makan@gmail.com' , phone:'09123843911'},
            {id:7, firstname: 'Nader' , lastname: 'amini' , email:'nader@gmail.com' , phone:'09193844928'},
            {id:8, firstname: 'Yaser' , lastname: 'davudi' , email:'Yaser@gmail.com' , phone:'09153843949'},
            {id:9, firstname: 'Karim' , lastname: 'davudi' , email:'karim@gmail.com' , phone:'09133413972'},
            {id:10, firstname: 'Morteza' , lastname: 'davudi' , email:'morteza@gmail.com' , phone:'09103843955'},
        ]
        
    )
    
    return <>
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <table className="table table-hover ">
                        <thead className="headerColor">
                            <tr className="">
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact=>(
                                <TableRow 
                                    key={contact.id} 
                                    firstname={contact.firstname}
                                    lastname={contact.lastname}    
                                    email={contact.email}    
                                    phone={contact.phone}    
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
