import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div class="card-wrapper">
    <div class="card">
      <div class="image-wrapper">
        <a class="image-link" href="">
<img src='https://drscdn.500px.org/photo/92064849/m%3D900/v2?webp=true&sig=11d9fce5c5ec6d7b5ace21eff0cf8103b220658bc787b801dfe37ddc8e0b3d48' alt='Beautiful woman face by Oleg Gekman on 500px.com'/>
        </a>
      </div>
      <div class="text-box-wrapper">
      <div class="text-box">
        <h1 class="heading">
          Fashion Week Styles
        </h1>

        <p  class="text">
          Let's get this straight out of the way. Fashion in 2018 has been really hot. From Gucci sandals to Fendi handbags, we saw all of our favorite brands . .
        </p>
      </div>
     </div>
      
      <div class="button-wrapper">
          <a class="button" href="">
            Read More
          </a>
      </div>
    </div>
  </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>


<div class="card-wrapper">
    <div class="card">
      <div class="image-wrapper">
        <a class="image-link" href="">
<img src='https://drscdn.500px.org/photo/92064849/m%3D900/v2?webp=true&sig=11d9fce5c5ec6d7b5ace21eff0cf8103b220658bc787b801dfe37ddc8e0b3d48' alt='Beautiful woman face by Oleg Gekman on 500px.com'/>
        </a>
      </div>
      <div class="text-box-wrapper">
      <div class="text-box">
        <h1 class="heading">
          Fashion Week Styles
        </h1>

        <p  class="text">
          Let's get this straight out of the way. Fashion in 2018 has been really hot. From Gucci sandals to Fendi handbags, we saw all of our favorite brands . .
        </p>
      </div>
     </div>
      
      <div class="button-wrapper">
          <a class="button" href="">
            Read More
          </a>
      </div>
    </div>
  </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
