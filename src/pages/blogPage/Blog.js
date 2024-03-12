import { Button } from "@mui/material";
import blogStyles from "./blog.module.scss";
import { SearchAppBar } from "../../components/appBar/AppBar";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import { getAllBlogs } from "../../redux/blogs/blogsSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
  const blogs = useSelector(getAllBlogs);
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={blogStyles.blogPageWrapper}>
        <div className={blogStyles.allBlogs}>
          <h1>Блог</h1>
          {blogs.map((blog) => {
            return (
              <div key={`blog${blog.id}`}>
                <div className={blogStyles.blog}>
                  <div
                    className={blogStyles.imageDiv}
                    onClick={() => {
                      navigate(`blog/${blog.id}`);
                    }}
                  >
                    <img src={blog.image} alt="" />
                  </div>
                  <div className={blogStyles.textDiv}>
                    <h6>{blog.date}</h6>
                    <h3>{blog.blogName}</h3>
                    <p>{blog.shortDescription}</p>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`blog/${blog.id}`)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
                <hr className={blogStyles.line} />
              </div>
            );
          })}
        </div>
      </div>
      <FooterNavBar />
    </div>
  );
};
