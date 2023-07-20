import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT + "/notes";

export const getNotes = async () => {
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    return error;
  }
};

export const addNewNote = async (description) => {
  try {
    const { status } = await axios.post(baseURL, { description });
    return status;
  } catch (error) {
    return error;
  }
};

export const editNote = async ({ description, isDeleted, id }) => {
  try {
    const { status } = await axios.put(baseURL + "/" + id, {
      description,
      isDeleted,
    });
    return status;
  } catch (error) {
    return error;
  }
};

export const getNoteById = async (id) => {
  try {
    const { data } = await axios.get(baseURL + "/" + id);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteNoteById = async (id) => {
  try {
    const { status } = await axios.delete(baseURL + "/" + id);
    return status;
  } catch (error) {
    return error;
  }
};
