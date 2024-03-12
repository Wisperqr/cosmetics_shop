import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./pages/404Page";
import { RegisterNewUserPage } from "./pages/RegisterNewUserPage";
import { Catalog } from "./pages/catalogPage/Catalog";
import { Delivery } from "./pages/deliveryPage/Delivery";
import { Blog } from "./pages/blogPage/Blog";
import { CartPage } from "./pages/cartPage/CartPage";
import { AccountOffice } from "./pages/accountOfficePage/AccountOffice";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  PrivateRoute,
  PrivateRouteForLogin,
} from "./components/privateRoute/PrivateRoute";
import { SingleBlogPage } from "./pages/singleBlogPage/SingleBlogPage";
import { SingleProductPage } from "./pages/singleProductPage/singleProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <PrivateRouteForLogin>
              <LoginPage />
            </PrivateRouteForLogin>
          }
        />
        <Route path="/registration" element={<RegisterNewUserPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/blogs" element={<Blog />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/accountoffice"
          element={
            <PrivateRoute>
              <AccountOffice />
            </PrivateRoute>
          }
        />
        <Route path="singleblogpage" element={<SingleBlogPage />} />
        <Route path="product/:id" element={<SingleProductPage />} />
        <Route path="catalog/product/:id" element={<SingleProductPage />} />
        <Route path="blog/:id" element={<SingleBlogPage />} />
        <Route path="blogs/blog/:id" element={<SingleBlogPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
