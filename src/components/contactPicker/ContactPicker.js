import React from "react";

export const ContactPicker = (props) => {
  const contacts=props.contacts
  return (
    <select onChange={props.onChange}>
      <option key='blank' defaultValue={''}></option>
      {contacts.map(contact=>{
        return (<option key={contact.name} value={contact.name}>{contact.name}</option>)
      })}
    </select>
  );
};
