import { Form, Label } from 'components/Form/ContactForm.styled';
import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input value={filter} type="text" onChange={onFilter} />
      </Label>
    </Form>
  );
};
