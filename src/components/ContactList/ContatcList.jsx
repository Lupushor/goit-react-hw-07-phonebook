// import PropTypes from 'prop-types';
import { ContactItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete contact
          </button>
        </ContactItem>
      ))}
    </ul>
  );
};
