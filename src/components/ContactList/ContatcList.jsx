import { useEffect } from 'react';
import { ContactItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </ul>
  );
};
