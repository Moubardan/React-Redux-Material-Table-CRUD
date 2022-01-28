import axios from "axios";

function Edit(id, newData) {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:8000/users/${id}`, newData);
    const data = res.data;
    dispatch({
      type: "PUT",
      payload: data,
    });
  };
}

export default Edit;
