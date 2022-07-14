import React, {useState , useEffect} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  /*
  Define state variables for
  contact info and duplicate check
  */
  const contacts=props.contacts

  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [trackDuplicate,setTrackDuplicate]=useState(false)

  useEffect(()=>{
    for (let contact  of contacts){
      if (contact.name===name){
        setTrackDuplicate(true)
      }
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    const newContact={
      name: name,
      phone: phone,
      email: email
    }

    if (trackDuplicate===false){

      props.addContact(newContact)

      const clear =(setValue)=>{
        setValue('')
      }
      clear(setName);
      clear(setPhone);
      clear(setEmail)

  }
  };
  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileList={contacts}/>
      </section>
    </div>
  );
};
