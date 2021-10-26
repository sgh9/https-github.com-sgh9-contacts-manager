import React, { useEffect, useReducer, createContext } from 'react';

import reducer from './reducer';

let initialState = [
  {
    name: {
      firstname: 'Alen',
      lastname: 'Beck',
    },
    contact: [
      {
        type: 'home',
        number: '1234567890',
      },
      {
        type: 'office',
        number: '0987654321',
      },
    ],
    favorite: false,
  },
  {
    name: {
      firstname: 'Aimee',
      lastname: 'Belmontez',
    },
    contact: [
      {
        type: 'home',
        number: '1234567890',
      },
    ],
    favorite: false,
  },
  {
    name: {
      firstname: 'Barrack',
      lastname: 'Obama',
    },
    contact: [
      {
        type: 'home',
        number: '1234567890',
      },
      {
        type: 'office',
        number: '0987654321',
      },
    ],
    favorite: false,
  },
];

export const ContactsContext = createContext(initialState);

const ContactsContextProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, initialState);

  const updateContact = (id) => {
    dispatch({
      type: 'UPDATE',
      payload: id,
    });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts: contacts,
        updateContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
