import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({contacts}) => {
    return (
        <div>
            {contacts.map(item=>
                <ContactItem key={item.id} item={item}/>
            )}
        </div>
    );
};

export default ContactList;