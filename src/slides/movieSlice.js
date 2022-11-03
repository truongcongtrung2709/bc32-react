import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// createAsyncThunk: giúp dispatch action pending/fulfilled/rejected một cách tự động dựa vào trạng thái của action
export const getMovies = createAsyncThunk(
  "movie/getMovies", // action type
  // Ví dụ dispatch(getMovies(params)) => async (params, thunkAPI) => {}
  // thunkAPI: là một object chứa các hàm của redux-thunk: dispatch, getState,...
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      );
      // thành công => return về data
      return { data };
    } catch (error) {
      // thất bại => return rejectWithValue(error)
      //Cách 1: return rejectWithValue(error)
      // return rejectWithValue({
      //   error:
      //     error.response.data || "Something went wrong, please try later!!!",
      // });

      // Cách 2: throw error
      throw error.response.data;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // getMoviePending: (state, action) => {
    //   return { ...state, loading: true };
    // },
    // getMovieFulfilled: (state, action) => {
    //   return { ...state, movies: action.payload.data, loading: false };
    // },
    // getMovieRejected: (state, action) => {
    //   return { ...state, error: action.payload.error, loading: false };
    // },
  },

  // Để xử lý các action được dispatch từ createAsyncThunk ta dùng extraReducers
  extraReducers: (builder) => {
    // builder.addCase("movie/getMovies/pending");
    builder.addCase(getMovies.pending, (state, action) => {
      return { ...state, loading: true };
    });

    builder.addCase(getMovies.fulfilled, (state, action) => {
      return { ...state, movies: action.payload.data, loading: false };
    });

    builder.addCase(getMovies.rejected, (state, action) => {
      return { ...state, error: action.error.message, loading: false };
    });
  },
});

export default movieSlice.reducer;

// ==================== Cách dùng thunk action cũ ====================

// // actions
// const { getMoviePending, getMovieFulfilled, getMovieRejected } =
//   movieSlice.actions;

// // thunk action
// export const getMovies = () => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch(getMoviePending());

//       const { data } = await axios.get(
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
//       );

//       dispatch(getMovieFulfilled({ data }));
//     } catch (error) {
//       dispatch(
//         getMovieRejected({
//           error:
//             error.response.data || "Something went wrong, please try later!!!",
//         })
//       );
//     }
//   };
// };
