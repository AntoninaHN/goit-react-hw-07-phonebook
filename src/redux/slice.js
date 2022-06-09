import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, removeContact} from './operations'
export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      filter: "",
      editedContact: null,
      isLoading: false,
      error: null,
    },
    reducers: {
      changeFilter(state, { payload }) {
        return { ...state, filter: payload };
      },
      editOnClick(state, { payload }) {
        return { ...state, editedContact: payload };
      },
    },
    extraReducers: {
      [addContact.pending]: (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }),
      [addContact.fulfilled]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }),
      [addContact.rejected]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }),
      [removeContact.pending]: (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }),
      [removeContact.fulfilled]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(({ id }) => id !== payload),
      }),
      [removeContact.rejected]: (state) => ({
        ...state,
        isLoading: false,
        error: null,
      }),
      [fetchContacts.pending]: (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }),
      [fetchContacts.fulfilled]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: null,
        items: [...payload],
      }),
      [fetchContacts.rejected]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }),
     
    },
  });
  
  export default contactsSlice.reducer;
  export const { changeFilter, editOnClick } = contactsSlice.actions;