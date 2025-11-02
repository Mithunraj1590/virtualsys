import Style from "./BlogDetailDescription.module.scss";

const BlogDetailDescription = ({ props }) => {
    const parse = require("html-react-parser");
 return (
  <div className={Style.description}>
      {parse(props?.data?.description)}
  </div>
);
 };
export default BlogDetailDescription;
