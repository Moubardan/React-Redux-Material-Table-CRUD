import axios from "axios";

function Post(newData) {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8000/users", newData);
    const data = res.data;
    dispatch({
      type: "POST",
      payload: data,
    });
  };
}

export default Post;
