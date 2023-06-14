import ArtcileViewer from "./scenes/ArtcileViewer";
import Landing from "./scenes/Landing";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/articles",
    element: <ArticleViewer/>
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container bg-midnight-blue w-5/6 mx-auto md:h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
