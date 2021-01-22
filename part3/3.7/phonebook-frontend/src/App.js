import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'


const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [notification, setNotification] = useState(null);

  // Use effect for populate 'persons' with data from json-server
  useEffect(() => {
    personService
      .getAll()
      .then(result => setPersons(result))
      .catch(error => alert("Error, cannot getAll:"))
  }, [])

  // Event handlers
  const newNameHandle = (event) => {
      setNewName(event.target.value)
  }

  const newNumberHandle = (event) => {
      setNewNumber(event.target.value);
  }
  const filterHandle = (event) => {
    setFilterName(event.target.value);
  }

  const deleteHandler = (person) => {
    if (window.confirm(`Delete ${person.name}`))
    {
      personService
      .deletePerson(person.id)
      .then(result => {
        setPersons(persons.filter(per => per.id !== person.id));
      })
      .catch( error => {
        setNotification({
          content: `Information of ${person.name} has already been removed from server`,
          success: false
        });
        setTimeout(()=> setNotification(null), 4000);
      })
      
    }
  }

  const addNewName = (event) => {
      event.preventDefault();

      const newObjectName = {
          name: newName,
          number: newNumber
      }
      // Post the new Contact to the server
      personService
        .create(newObjectName)
        .then(result => {
          setPersons(persons.concat(result));
          setNotification({content: `Added ${newObjectName.name}`, success: true});
          setTimeout(() => setNotification(null), 4000);
        })
        .catch(error => {
          setNotification({content: error.response.data.error, success: false});
          setTimeout(() => setNotification(null), 4000);
        })

        setNewName('');
        setNewNumber('');
    }
    
    var displayPeople = persons;
    if (filterName !== '')
    {
        displayPeople = displayPeople.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter change={filterHandle} value={filterName} />
      <h2> Add a new </h2>
      <PersonForm submit={addNewName} nameChange={newNameHandle} nameValue={newName} numberChange={newNumberHandle} numberValue={newNumber}/>
      
      <h2>Numbers</h2>
      <Persons display={displayPeople} deleteFunc={deleteHandler}/>
    </div>
  )
}

export default App