import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {

const numberOfContacts = 5; 

const newContactList = [...contactList].slice(0, numberOfContacts);
const remainingContactList = [...contactList].splice(numberOfContacts,contactList.length - numberOfContacts);

const [contacts, setContacts] = useState(newContactList);
const [contactsLeft, setContactsLeft] = useState(remainingContactList);

const clickToAddRandom = (contacts, contactsLeft) => {
  console.log("contactsLeft " + contactsLeft.length);
  console.log("contacts " + contacts.length);  
  
  let randomContactIndex = Math.floor(Math.random() * contactsLeft.length);
    
    let randomContact = contactsLeft[randomContactIndex];
    
    // setContactsLeft((contactsLeft) =>
    //   contactsLeft.splice(contactsLeft.indexOf(randomContactIndex), 1)
    // );
    // setContactsLeft((contactsLeft) => [...contactsLeft].splice(randomContactIndex, 1))
    setContactsLeft((contactsLeft) => contactsLeft.slice(randomContactIndex, 1))


    // const [list, updateList] = useState(defaultList);

    // const handleRemoveItem = (e) => {
    //   updateList(list.slice(list.indexOf(e.target.name, 1)));
    // };

    setContacts(contacts => [...contacts, randomContact])

    console.log("contactsLeft " + contactsLeft.length);
    console.log("contacts " + contacts.length);
}
 
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className="btn-randomContact" onClick={() => clickToAddRandom(contacts, contactsLeft)} >Add random contact</button>
      <table className="contactList">
        <thead className="table-header">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} height={50} alt="contact" />
                </td>
                <td>
                  <p> {contact.name} </p>
                </td>
                <td>
                  <p> {contact.popularity.toFixed(2)} </p>
                </td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
