import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import store from "./src/components/utils/store";
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
