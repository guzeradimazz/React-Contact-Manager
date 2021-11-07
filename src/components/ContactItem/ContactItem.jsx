import React from 'react';
import './ContactItem.css';

const ContactItem = ({item,contacts,setContacts}) => {
    let itemId = item.id
    return (
        <div key={item.id}>
            <hr />
            <div className='contact__item'>
                <p className='contact__item__name'>
                    {item.name}
                </p>
                <p className='contact__item__phone'>
                    {item.phone}
                </p>
                <button 
                    className='contact__item__delete'
                    onClick={()=>setContacts(contacts.filter(item=>item.id !== itemId))}
                >delete</button>
                
            </div>
            <hr />
        </div>
    );
};

export default ContactItem;