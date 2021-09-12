export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
