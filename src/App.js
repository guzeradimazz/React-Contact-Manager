import Header from './components/Header/Header';
import React,{ useState,useEffect } from 'react';
import './styles/App.css';
import ContactList from './components/ContactList/ContactList';
import AddForm from './components/AddForm/AddForm';



function App() {
const [contacts, setContacts] = useState([])
const [name, setName] = useState('')
const [phone, setPhone] = useState('')

useEffect(() => {
  setContacts([
    {
      id: '01FKXYKEBDQ8YA425GND83TREK',
      name:'Nikolas',
      phone:'12345678'
    },
    {
      id:'01FKXYKNH7Y7ZKHHGYWP3P6XMZ',
      name:'Maks',
      phone:'12345678'
    },
    {
      id:'01FKXYKV95EP5TKMT1VNDAPEHE',
      name:'Dmitry',
      phone:'12345678'
    },
    {
      id:'01FKY054GJQB69ECMV8FEV9YCP',
      name:'Daniil',
      phone:'12345678'
    },
    {
      id:'01FKY05WQJCEJ07TJ3W6WXN5Z2',
      name:'Michael',
      phone:'12345678'
    },
    {
      id:'01FKY05YYR3FJF4ZJFV3CRCQV7',
      name:'Egor',
      phone:'12345678'
    }
  ])
}, [])

  return (
    <div className="App">
      <Header/>
      <AddForm
        contacts={contacts}
        setContacts={setContacts}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
      />
      <ContactList 
        setName={setName}
        setPhone={setPhone} 
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  );
}

export default App;
