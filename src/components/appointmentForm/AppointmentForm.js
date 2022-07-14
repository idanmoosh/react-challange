import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type='text' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required/>
      <label>Contacts</label>
      <ContactPicker contacts={contacts} value={contact} onChange={contact=>setContact(contact)}/>
      <label>Date</label>
      <input type='date' name='date' value={date} onChange={(e)=> setDate(e.target.value)} min={getTodayString} required/>
      <label>Time</label>
      <input type='time' name='time' value={time} onChange={(e)=> setTime(e.target.value)} required/>
      <input type='submit' value='Submit'/>

    </form>
  );
};

