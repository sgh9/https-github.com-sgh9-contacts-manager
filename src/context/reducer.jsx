const reducer = (state, action) => {
  let newContacts = [];

  switch (action.type) {
    case 'ADD_CONTACT':
      return state;

    case 'UPDATE':
      let newContacts = [...state];
      let contact = newContacts.find((item, i) => i === action.payload);
      contact.favorite = !contact.favorite;
      newContacts[action.payload] = contact;
      return newContacts;

    default:
      return state;
  }
};

export default reducer;
