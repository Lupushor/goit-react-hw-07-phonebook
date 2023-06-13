export const getContacts = ({ contacts: { items } }) => items;
export const getFilter = ({ filter }) => filter;

export const getFilterContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter)
  );
};
