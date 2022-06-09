import { createAsyncThunk } from "@reduxjs/toolkit";

import * as Api from '../Api/Api';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, {rejectWithValue}) => {
        try{
            const result = await Api.getContacts()
            return result
        } catch(err){
            return rejectWithValue(err)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, {rejectWithValue}) => {
        try{
            const result = await Api.addContact(data)
            return result;
        } catch(err){
            return rejectWithValue(err)
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            const {name} = data;
            const compareNames = name.toLowerCase();
            const result = contacts.items.find(({name}) => {
                return (name.toLowerCase() === compareNames);
            });
            if(result){
                alert(`${name} has already been added`);
                return false;
            }            
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/removeContact",
    async (id, {rejectWithValue}) => {
        try{
            const result = await Api.removeContact(id)
            return result.id
        } catch(err){
            return rejectWithValue(err)
        }
    }
)


