import React,{useState} from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*props*/
  const contacts=props.contacts;
  const appoinments=props.appoinments;
  /*States*/
  const [title,setTitle]=useState('')
  const [contact,setContact]=useState('')
  const [date,setDate]=useState()
  const [time,setTime]=useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    */
   const appoinment={
    title:title,
    contact:contact,
    date:date,
    time:time,
   }
   props.addAppointment(appoinment);
   const clear =(setValue)=>{
    setValue('')
  }
    clear(setTitle);
    clear(setContact);
    clear(setDate);
    clear(setTime);

  };
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contacts}
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileList={appoinments}/>
      </section>
    </div>
  );
};
