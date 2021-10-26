import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from './context/ContextProvider';

const Contacts = ({ searchKey }) => {
  const { contacts, updateContact } = useContext(ContactsContext);
  const [filterContacts, setFilterContacts] = useState();

  useEffect(() => {
    let newContacts = getFilterContacts();
    setFilterContacts(newContacts);
    console.log('search');
  }, [searchKey]);

  const getFilterContacts = () => {
    let newContacts = [...contacts];

    newContacts = newContacts.filter((contactItem) => {
      return (
        searchKey.toString() === '' ||
        contactItem.name.firstname
          .toString()
          .toLowerCase()
          .includes(searchKey?.toString().toLowerCase())
      );
    });
    return newContacts;
  };

  return (
    <div>
      <ul className="list-group">
        {filterContacts?.map((contactItem, i) => {
          return (
            <li className="list-group-item">
              <div className="contact">
                <div className="">
                  <input
                    type="checkbox"
                    name="contact"
                    className="contactItem"
                    checked={contactItem.favorite}
                    onChange={() => updateContact(i)}
                  />
                  <span>
                    {contactItem.name.firstname} {contactItem.name.lastname}
                  </span>
                </div>
                <div>
                  <small className="small">
                    {contactItem.contact[0].number}
                  </small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contacts;
