import dynamic from "next/dynamic";
import Link from "next/link";
import Float from "../components/Float";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer bg-green pt-4 text-white">
    <Float />
    <div className="container">

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="/assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Sidham Pharmacy, established in 2019, has aimed to provide exceptional services for mind, body and soul.
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>


              <li>
                <Link href="/portfolio-grid">
                  <a>Our Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/shop-grid">
                  <a>Best Products</a>
                </Link>
              </li>

              <li>
                <Link href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>

              <li>
                <Link href="/contact">Setting &amp; Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contact Us</h4>

            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                Manufacturing unit - village phalsanda jattan, pin 136156, Distt- Kurukshetra, Haryana
              </li>
              <li>
                <i className="fal fa-map-marker-alt" />
                Head office- h.no 4072, sec 32, Shusant city, Kurukshetra, Haryana
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:8570031091">8570031091  </a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:9050546746">9050546746 </a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:Sidhampharmacy@gmail.com">Sidhampharmacy@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2022 MunFirm. All Rights Reserved.</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">Setting &amp; Privacy</Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>Faqs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">Payments</Link>
          </li>
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="/assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="/assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="/assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="/assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="/assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);

