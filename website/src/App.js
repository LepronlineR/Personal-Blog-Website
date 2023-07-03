import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ArticleViewer from "./scenes/ArticleViewer";
import Landing from "./scenes/Landing";
import ErrorPage from "./scenes/ErrorPage"
import Article from "./scenes/Article";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "/blog",
        element: <ArticleViewer/>
      },
      {
        path: "/blog/:postId",
        element: <Article/>
      },
    ]
  },
]);

function App() {
  return (
    <div className="app bg-midnight-blue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
