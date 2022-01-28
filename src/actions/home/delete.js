import axios from "axios";

function Delete(id) {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };
}

export default Delete;
