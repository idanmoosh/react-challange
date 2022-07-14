import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
          type='text' 
          name='name' 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          required/>
          <label>Phone</label>
          <input 
          type='text' 
          name='phone' 
          value={phone}
          pattern="[0-9]*"
          onChange={(e)=>{ e.target.validity.valid? setPhone(e.target.value):alert('only numbers are valid')}}
          required/>
          <label>Email</label>
          <input 
          type='text' 
          name='email' 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required/>
          <input type='submit' value='Submit'/>
      </form>
    </div>
  );
};
