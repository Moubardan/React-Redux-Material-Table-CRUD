const initialState = {
  getHome: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "GETHOME":
      return { ...state, getHome: action.payload };

    case "POST":
      return { ...state, getHome: action.payload };
    case "PUT":
      return { ...state, getHome: action.payload };
    case "DELETE":
      return { ...state, getHome: action.payload };
    default:
      return state;
  }
}
