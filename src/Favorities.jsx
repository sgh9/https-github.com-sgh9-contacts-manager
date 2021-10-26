import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from './context/ContextProvider';

const Favorities = ({ searchKey }) => {
  const { contacts } = useContext(ContactsContext);

  return (
    <div>
      <ul className="list-group">
        {contacts
          ?.filter((contactItem) => contactItem.favorite)
          .map((contactItem) => {
            return (
              <li className="list-group-item">
                <div className="contact">
                  <div className="">
                    <span>
                      {contactItem.name.firstname} {contactItem.name.lastname}
                    </span>
                  </div>
                  <div>
                    <span>{contactItem.contact[0].number}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Favorities;
