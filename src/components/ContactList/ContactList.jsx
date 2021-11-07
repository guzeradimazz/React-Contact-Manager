import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({contacts,setContacts}) => {
    return (
        <div>
            {contacts.map(item=>
                <ContactItem 
                    contacts={contacts} 
                    setContacts={setContacts} 
                    key={item.id} 
                    item={item}
                />
            )}
        </div>
    );
};

export default ContactList;