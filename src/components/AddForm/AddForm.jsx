import React from 'react';
import './AddForm.css';

const AddForm = ({contacts,setContacts,name,setName,phone,setPhone}) => {

    const addNewContact = (e)=>{
        e.preventDefault()
        const newContact = {
            id:'01FKZ7Z69FK9ZPRFCJYM8HAW6T',
            name:name,
            phone:phone
        }
        setContacts([...contacts,newContact])
        setPhone('')
        setName('')
    }
    return (
        <div className='add__form'>
            <input 
                type="text" 
                placeholder='Enter name'
                value={name}
                onChange={e=>setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter phone number'
                value={phone}
                onChange={e=>setPhone(e.target.value)}
            />
            <button onClick={addNewContact}>add person</button>
        </div>
    );
};

export default AddForm;