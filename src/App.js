import './styles/ZeroStyle.css';
import Header from './components/Header/Header';
import React,{ useState,useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import AddForm from './components/AddForm/AddForm';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import PeopleApi from './API/API';
import './styles/App.css';

function App() {
const [contacts, setContacts] = useState([])
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [displayedPeople, setDisplayedPeople] = useState([])
const [searchQuery, setSearchQuery] = useState('')

useEffect(() => {
  async function fetchData(){
    const people = await PeopleApi.getAllPeople()
    setContacts(people)
  }
  fetchData()
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
