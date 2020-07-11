import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
        role: '',

    }

    const [teamMembersList, setTeamMembersList] = useState(initialState);
    const [contact, setContact] = useState(initialState);

    const handleChange = e => {
        setTeamMembersList({...teamMembersList, [e.target.name]: e.target.value}); 
    }

    const handleSubmit = e => {
        e.preventDefault();
        setContact({...teamMembersList})
        setTeamMembersList({...teamMembersList})

    }
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name</label>
                <input onChange={handleChange} name='name' value={teamMembersList.name}/>
                <label for='phone'>Phone</label>
                <input onChange={handleChange} type='tel' name='phone' value={teamMembersList.phone}/>
                <label for='email'>Email</label>
                <input onChange={handleChange} type='email' value={teamMembersList.email}/>
                <label for='role'>Role</label>
                <input onChange={handleChange} type='role' name='role' value={teamMembersList.role}/>
                <button type='submit' >Submit Form</button>
            </form>
            <div>
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.role}</p>
            </div>
        </div>
    );


}

    // const Container = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     color: dodgerblue;
    //     form {
            
    //     }

    // `
export default ContactForm;