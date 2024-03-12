import { useNavigate } from "react-router-dom";
import blogMainPageStyles from "./blogMainPage.module.scss";
import { Button } from "@mui/material";

export const BlogMainPage = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className={blogMainPageStyles.blogMainPageWrapper}>
      {blogs.map((blog) => {
        if (+blog.id % 2 !== 0) {
          return (
            <div key={`blog${blog.id}`}>
              <div className={blogMainPageStyles.blog}>
                <div className={blogMainPageStyles.textBlock}>
                  <h2>{blog.blogName}</h2>
                  <p>{blog.shortDescription}</p>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`blog/${blog.id}`)}
                    sx={{
                      color: "rgb(234, 234, 234)",
                      backgroundColor: "#283347",
                      "&:hover": {
                        backgroundColor: "#586c91",
                      },
                    }}
                  >
                    Подробнее
                  </Button>
                </div>
                <div className={blogMainPageStyles.imgBlock}>
                  <img src={blog.image} alt="" />
                </div>
              </div>
              <hr className={blogMainPageStyles.line} key={"line1"} />
            </div>
          );
        } else {
          return (
            <div key={`blog${blog.id}`}>
              <div
                className={`${blogMainPageStyles.blog} ${blogMainPageStyles.secondBlog}`}
              >
                <div className={blogMainPageStyles.imgBlock}>
                  <img src={blog.image} alt="" />
                </div>
                <div className={blogMainPageStyles.textBlock}>
                  <h2>{blog.blogName}</h2>
                  <p>{blog.shortDescription}</p>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`blog/${blog.id}`)}
                    sx={{
                      color: "rgb(234, 234, 234)",
                      backgroundColor: "#283347",
                      "&:hover": {
                        backgroundColor: "#586c91",
                      },
                    }}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
              <hr className={blogMainPageStyles.line} key={"line2"} />
            </div>
          );
        }
      })}
    </div>
  );
};
