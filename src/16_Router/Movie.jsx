import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMovies } from "../slides/movieSlice";

const Movie = () => {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  //useNavigate là custom hook dùng để điều hướng route
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      {movies.map((item) => (
        <div key={item.maPhim}>
          <p>
            <span className="me-3">{item.tenPhim}</span>
            {/* <Link to={`/router/movie/${item.maPhim}`}>Chi tiết</Link> */}
            {/* <Link to={`${item.maPhim}`}>Chi tiết</Link> */}

            <button className="btn btn-success" onClick={()=>navigate(`${item.maPhim}`)}>Chi tiết</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Movie;
