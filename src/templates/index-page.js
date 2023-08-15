import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import flower from '../img/flowers.png'
import BlogRoll from '../components/BlogRoll';

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => {

  return (
    <div class="content" style={{ flexDirection: 'column' }}>
      <div className="home-studies">
        <div className="max-width-container">
          <div className="experience-desktop-padding">
            <Grid container className=" wrap-reverse">
              <Grid item xs={12} lg={12} className="experience-photos flex-direction-column align-items-start">
                <img src={flower} style={{ marginBottom: '20px' }} />
                <h2>I'm Jordan Stephenson</h2>
                <p>
                  Your friendly neighborhood product leader. I am passionate about building excellent
                  products that improve the lives of those around me. “There is nothing so useless as doing efficiently that which should
                  not be done at all.”
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
