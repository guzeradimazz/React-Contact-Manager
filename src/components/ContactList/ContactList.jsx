import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({contacts,setContacts,setName,setPhone}) => {
    return (
        <div>
            {contacts.map(item=>
                <ContactItem 
                    setName={setName}
                    setPhone={setPhone}
                    contacts={contacts} 
                    setContacts={setContacts} 
                    key={item.id+=1} 
                    item={item}
                />
            )}
        </div>
    );
};

export default ContactList;