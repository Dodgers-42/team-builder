import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Something from './Something';
import ContactForm from './ContactForm';

function App() {
  // const [contactForm, setContactForm] = useState([]);
  
  return (
    
      
     <div>
      <ContactForm form={ContactForm} />
    </div>
  );
}

export default App;
