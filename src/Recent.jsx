import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from './context/ContextProvider';

const Recent = ({ searchKey }) => {
  const { contacts } = useContext(ContactsContext);
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
        {filterContacts?.map((contactItem) => {
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
export default Recent;
