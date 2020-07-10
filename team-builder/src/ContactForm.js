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
        </Container>
    );

    

}
export default ContactForm;