import { SearchAppBar } from "../components/appBar/AppBar";
import Slider from "../components/slider/Slider";
import { Categories } from "../components/categories/Categories";
import DiscountsSlider from "../components/discountsSlider/DiscountsSlider";
import { BlogMainPage } from "../components/blogMainPage/BlogMainPage";
import { FooterNavBar } from "../components/footerNavBar/FooterNavBar";
import { useEffect } from "react";
import {
  API_URL_BLOGS,
  API_URL_PRODUCTS,
  API_URL_USERS,
} from "../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts as setAllProductsRedux } from "../redux/products/productsActions";
import { setAllBlogs } from "../redux/blogs/blogsActions";
import { getAllBlogs } from "../redux/blogs/blogsSelectors";
import "react-toastify/dist/ReactToastify.css";
import { ToastElement } from "../components/toast/toast";
import { setUsers } from "../redux/user/userActions";

export const MainPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(getAllBlogs);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch(API_URL_BLOGS);
      const respBlogs = await response.json();
      dispatch(setAllBlogs(respBlogs));
    }

    fetchBlogs();

    async function fetchProducts() {
      const response = await fetch(API_URL_PRODUCTS);
      const respProducts = await response.json();
      dispatch(setAllProductsRedux(respProducts));
    }

    fetchProducts();

    async function fetchUsers() {
      const response = await fetch(API_URL_USERS);
      const respUsers = await response.json();
      dispatch(setUsers(respUsers));
    }
    fetchUsers();
  }, [dispatch]);

  return (
    <>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <SearchAppBar />
        <Slider />
        <Categories />
        <DiscountsSlider />
        <BlogMainPage blogs={blogs} />
        <FooterNavBar />
      </div>
      <ToastElement />
    </>
  );
};
