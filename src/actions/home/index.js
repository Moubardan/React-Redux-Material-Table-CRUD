import axios from "axios";

function getInfo() {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:8000/users");
    const data = response.data;
    dispatch({
      type: "GETHOME",
      payload: data,
    });
  };
}

export default getInfo;
