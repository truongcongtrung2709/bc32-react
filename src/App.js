import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./1_Components/BT_Home/Home";
import MSI from "./1_Components/BT_MSI/MSI";
import BauCua from "./BT_BauCua/BauCua";
import Router from "./16_Router/Router";
import Movie from "./16_Router/Movie";
import Contact from "./16_Router/Contact";
import MovieDetails from "./16_Router/MovieDetails";

const router = createBrowserRouter([
  // Nếu muốn tất cả page trong ứng dụng đều có chung 1 layout nào đó ta sẽ đưa tất cả khai báo routes vào bên trong array children
  // { path: "/", element: <Root />, children: [] },
  { path: "/", element: <Home /> },
  { path: "/msi", element: <MSI /> },
  { path: "/baucua", element: <BauCua /> },
  {
    path: "/router",
    element: <Router />,
    children: [
      { path: "movie", element: <Movie /> },
      // :key => dynamic params (Chấp nhận mọi giá trị trên URL)
      { path: "movie/:movieId", element: <MovieDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  // NotFound route, cần được khai báo ở dưới cùng tất cả các route khác
  { path: "*", element: <h1>Not Found</h1> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
