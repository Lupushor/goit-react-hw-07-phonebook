import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Редюсери слайсу
  extraReducers: builder => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload; // payload - це дані, які повертає функція-обробник
      state.isLoading = false;
      state.error = null;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    })
    .addCase(deleteContact.rejected, handleRejected),
  });


// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
