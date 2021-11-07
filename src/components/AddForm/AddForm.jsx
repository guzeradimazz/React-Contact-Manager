import React from 'react';
import './AddForm.css';

const AddForm = ({contacts,setContacts}) => {
    const addNewContact = ()=>{
        const newContact = {
            id: '01FKY1G935ZNAR2Y4C621P4P1R',
            name:'jjj',
            phone:'8888'
        }
        setContacts([...contacts,newContact])
    }
    return (
        <div className='add__form'>
            <input 
                type="text" 
                placeholder='Enter name'
            />
            <input type="text" placeholder='Enter phone number'/>
            <button onClick={addNewContact}>add person</button>
        </div>
    );
};

export default AddForm;