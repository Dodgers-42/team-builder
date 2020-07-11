import React, { useState } from 'react';
import style from 'style-components';

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
        <Container>
            <form>
                <label for='name'>Name</label>
                <input onChange={handleChange} name='name' value={teamMembersList.name}/>
                <label for='phone'>Phone</label>
                <input onChange={handleChange} type='tel' name='phone' value={teamMembersList.phone}/>
                <label for='email'>Email</label>
                <input onChange={handleChange} type='email' value={teamMembersList.email}/>
                <label for='role'>Role</label>
                <input onChange={handleChange} type='role' name='role' value={teamMembersList.role}/>
            </form>
            <div>
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.role}</p>
            </div>
        </Container>
    );

    

}
export default ContactForm;