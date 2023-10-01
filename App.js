import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import store from "./src/components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./src/components/MainContainer.jsx";
import WatchVideo from "./src/components/WatchVideo.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
