import Header from './components/Header/Header';
import React,{ useState,useEffect } from 'react';
import './styles/App.css';
import ContactList from './components/ContactList/ContactList';



function App() {
const [contacts, setContacts] = useState([])

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
    }
  ])
}, [])

  return (
    <div className="App">
      <Header/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
