import React from 'react';
import PropTypes from 'prop-types';
import crazy from '../../img/crazy.png';
import Layout from '../../components/Layout';
import Grid from '@material-ui/core/Grid';
const SkillsPage = ({ entry, widgetFor }) => (

  <Layout title={'Portfolio'}>
    <section className="section section--gradient" style = {{ backgroundColor : '#fef3e6'}}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div class="content-center" style={{ flexDirection: 'column' }}>
                <div className="case-studies ">
                  <div className="max-width-container">
                    <div className="experience-desktop-padding">
                      <Grid container className="wrap-reverse">
                        <Grid item xs={12} lg={12} className="experience-photos flex-direction-column align-items-start">
                          <img src={crazy} />

                          <div class="blockquote-wrapper">
                            <div class="blockquote">
                              <h1>
                                What excites me most about working in<span style={{ color: '#cf918e' }}> product </span> is being able to design and create things that have
                                <span style={{ color: '#cf918e' }}>purpose and solve real problems. </span> 
                              </h1>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <div>
                        <div>
                          <h3 class="">Engineering</h3>
                          <p>
                            The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in
                            exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to
                            encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned
                            programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that
                            exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is
                            complemented by my proficiency in modern building practices, ensuring that every aspect of your website is
                            finely tuned to perfection. <a>Github</a>
                          </p>
                        </div>
                        <div>
                          <h3 class="">Product</h3>
                          <p>
                            While I may not fit the conventional mold of a product manager, my diverse skill set in research, product
                            design, and product coordination empowers me to drive the growth of a product from its inception. As an
                            exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire
                            journey, effectively bridging the technical and product aspects. By leveraging my expertise, I can navigate the
                            path from 0 to 1, ensuring the product's success at every stage. <a>Projects</a>
                          </p>
                        </div>
                        <div>
                          <h3 class="">Design </h3>
                          <p>
                            Despite not fitting the typical designer stereotype, my exceptional visual abilities enable me to excel as a
                            presenter, effectively conveying design concepts to stakeholders and design teams. I possess a remarkable
                            aptitude for conceptualization, allowing me to envision and bring forth stunning creations. Additionally, my
                            expertise lies in fine-tuning stylesheets and crafting seamless user experiences that flow effortlessly.
                          </p>
                        </div>
                      </div>
                      <Grid container className="">
                        {/* <Grid className="experiencegrid" item xs={12} lg={6}>
            <h2>My Spotify Playlists</h2>
            <p></p>
          </Grid> */}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default SkillsPage;
