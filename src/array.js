import React, { Component } from 'react';
const Person=(props)=>(
  <div>
          <p>Name: {props.name}</p>
          <p>Roll No.: {props.roll}</p>
          <p>Address: {props.address}</p>
          <p>Mobile No.: {props.mobile}</p><br/><br/> 
      </div>
)
export default Person;