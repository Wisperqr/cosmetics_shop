import { SearchAppBar } from "../../components/appBar/AppBar";
import singleBlogStyles from "./singleBlogPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/blogs/blogsSelectors";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import SelectedCategorySlider from "../../components/sliderSelectedCategory/sliderSelectedCategory";
import { ToastElement } from "../../components/toast/toast";

export const SingleBlogPage = () => {
  const params = useParams();
  const blogID = params.id;

  const blogs = useSelector(getAllBlogs);

  const blog = blogs.find((blog) => blog.id === blogID);

  return (
    <>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <SearchAppBar />
        <div className={singleBlogStyles.wrapper}>
          <div className={singleBlogStyles.blogContent}>
            <h2>{blog.blogName}</h2>
            <div className={singleBlogStyles.imgDiv}>
              <img src={blog.image} alt="" />
            </div>
            <p>{blog.description}</p>
          </div>
        </div>
        <SelectedCategorySlider category={blog.category} />
        <FooterNavBar />
        <ToastElement />
      </div>
    </>
  );
};
