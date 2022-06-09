import axios from "axios";

axios.defaults.baseURL = "https://62a11ce9356d093c4c41f22d.mockapi.io/";

const path = "/contacts";

export const addContactApi = async (contact) => {
  try {
    const { data } = await axios.post(path, contact);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getContactsApi = async () => {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const removeContactApi = async (id) => {
  try {
    await axios.delete(path + "/" + id);
    return id;
  } catch (error) {
    throw error.message;
  }
};
