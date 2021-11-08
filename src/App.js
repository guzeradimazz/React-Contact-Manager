import Header from './components/Header/Header';
import React,{ useState,useEffect } from 'react';
import './styles/App.css';
import ContactList from './components/ContactList/ContactList';
import AddForm from './components/AddForm/AddForm';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';



function App() {
const [contacts, setContacts] = useState([])
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [displayedPeople, setDisplayedPeople] = useState([])
const [searchQuery, setSearchQuery] = useState('')

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

useEffect(() => {
  setDisplayedPeople(
    contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )
}, [contacts,searchQuery])
  if(!displayedPeople.length) return (<div>    
    <Header/>
    <AddForm
      contacts={contacts}
      setContacts={setContacts}
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
    />
    <Search
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
    <NotFound/>  
  </div>)

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
      <Search
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <ContactList 
        setName={setName}
        setPhone={setPhone} 
        contacts={displayedPeople}
        setContacts={setContacts}
      />
    </div>
  );
}

export default App;
