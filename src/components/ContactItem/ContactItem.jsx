import React from 'react';
import './ContactItem.css';

const ContactItem = ({item,contacts,setContacts,setName,setPhone}) => {
    let itemId = item.id
    const reName =()=>{
        let renamedItem = contacts.filter(item=>item.id === itemId)[0]
        setName(renamedItem.name)
        setPhone(renamedItem.phone)
        setContacts(contacts.filter(item=>item.id !== itemId))
        
    }
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
                <button
                    className='contact__item__rename'
                    onClick={()=>reName()}
                >rename</button>
            </div>
        </div>
    );
};

export default ContactItem;