const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_movies/pending":
      return {
        ...state,
        loading: true,
      };
    case "get_movies/fulfilled":
      return {
        ...state,
        movies: action.payload.data,
        loading: false,
      };
    case "get_movies/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default movieReducer;
