import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"about us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-10 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">About Company</span>
                  <h2>Sidham Pharmacy</h2>
                </div>
                <p>
                  Sidham Pharmacy, established in 2019, has aimed to provide
                  exceptional services for mind, body and soul. We are working
                  continuously to achieve excellence in these areas. We have
                  vast experience in this field and understand the importance
                  and requirements of the patients. The products and therapy
                  sessions are designed by keeping individual needs in mind and
                  these products and sessions are suitable for all age groups
                  and caters to the individual requirements. We also organise
                  special therapy sessions for athletes, sciatica pain, cervical
                  pain and many more, we use ayurvedic plants for our/their
                  products and use ancient techniques for manufacturing, means
                  our products is cruelty free [NO ANIMAL PRODUCT IS USED IN THE
                  MAKING OF OUR PRODUCTS].
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="">
                <img
                  className="image"
                  src="assets/images/about/aboutAyurveda.png"
                  alt="About"
                />

                {/* <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Vegetables</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Fruits</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Agriculture &amp; Farming</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Gallery Area Start */}
     
      {/* Gallery Area End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1">
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-lg-6"> */}
          {/* <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div> */}
          {/* </div> */}
          <div className="col-lg-8 justify-center m-auto">
            <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
              <div className="section-title mb-35">
                <span className="sub-title mb-20">Why Choose Us</span>
                <h3>At Sidham Pharmacy, we stand out in the realm of holistic healthcare.</h3>
                <p>
                Since our establishment in 2019, we have dedicated ourselves to offering exceptional services that cater to the mind, body, and soul. With a wealth of experience in the field, we understand the diverse needs of our patients, allowing us to provide tailored solutions that prioritize individual well-being. From specialized therapy sessions addressing concerns such as sciatica and cervical pain to our commitment to utilizing Ayurvedic principles and cruelty-free practices, we ensure a holistic approach to wellness. Choose Sidham Pharmacy for personalized care and embark on a journey towards optimal health and happiness.
                </p>
              </div>
              {/* <div className="about-features mt-60">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          <Link href="/service-details">Discount Options</Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <h4>
                          <Link href="/service-details">
                            Best Return Policy
                          </Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>
                        <h4>
                          <Link href="/service-details">Online Support</Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* About Section End */}
      {/* Team Area Start */}
      <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}

      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>Valuable Customer’s Feedback</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section>
      {/* Feedback Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        {/* <div className="container">
          <ClientLogoSlider />
        </div> */}
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default About;
