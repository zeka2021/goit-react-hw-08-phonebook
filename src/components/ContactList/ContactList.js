// import React, { Component } from 'react';
import s from './ContactList.module.css';

function ContactList({ children}) {
  
    return (
      <div className={s.container}>
        <ul className={s.listContainer}>{children}</ul>
      </div>
    );
  }

export default ContactList;
