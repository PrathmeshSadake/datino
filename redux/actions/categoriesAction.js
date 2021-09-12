import axios from "axios";

export const getAllCategories = () => (dispatch) => {
  axios
    .get("http://localhost:1337/categories")
    .then((res) => dispatch({ type: "GET_CATEGORIES", payload: res.data }))
    .catch((err) => console.error(err));
};
