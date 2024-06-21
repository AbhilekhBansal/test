import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { productActiveTwo } from "../src/sliderProps";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "../src/useCartStore";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState("1");

  const images = [
    "assets/images/slider/c.png",
    "assets/images/slider/A.png",
    "assets/images/slider/b.png",
  ];

  const product_d = (prevproducts) =>
    prevproducts?.filter((product) => product.id === id);

  const [product, setProduct] = useState(product_d || {});
console.log(product)

  const addToCart = (id, quantity,image) => {
    // temp data
    id = 4;
    const product_name = "hair oil";
    const price = "250";

    const cartList = localStorage.getItem("cart");
    const cart = cartList ? JSON.parse(cartList) : [];
    const existingItemIndex = cart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const i_data = cart.find((item) => item.id === id);
      if (i_data.quantity != quantity) {
        cart[existingItemIndex].quantity = quantity;
        toast.success("Quantity updated successfully!");
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
        cart.push({ id, product_name, price, quantity ,image});
        toast.success("Item added to cart successfully!");
        localStorage.setItem("cart", JSON.stringify(cart));
        useCartStore.getState().updateCartCount()
    }
    // console.log("Cart updated:", cart);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e,image) => {
    e.preventDefault();
    addToCart(product?.id, quantity,image);
  };

  return (
    <Layout>
      <PageBanner pageName={"Product Details"} />
      <section className="product-details-area pt-130 rpt-100">
        <div className="container">
          <div
            className="row  justify-content-between"
            style={{ minHeight: "560px" }}
          >
            <div
              className=" imgparent col-lg-6 col-md-6 col-sm-12"
              style={{ height: "100%" }}
            >
              <div>
                {images.map((img, i) => (
                  <div key={i} onClick={() => setActiveTab(i)}>
                    <img
                      className="imgselct"
                      src={img}
                      width={100}
                      alt="Preview"
                    />
                    <br />
                  </div>
                ))}
              </div>
              <div
                className="product-preview-images rmb-55 wow fadeInLeft delay-0-2s"
                style={{ height: "100%" }}
              >
                <a
                  className="parent"
                  href="assets/images/slider/C.png"
                  style={{ background: "white", height: "100%", width: "100%" }}
                >
                  <img src={images[activeTab]} alt="Preview" />
                  <span className="sale"> on sale</span>
                </a>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  <span className="off">20 Off</span>
                </div>
                <div className="section-title mb-20">
                  <h2>Organic Vegetable</h2>
                </div>

                <span
                  className=" mb-20"
                  style={{
                    lineHeight: "34.461px",
                    fontFamily: "Roboto-Medium",
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  {" "}
                  ₹55.96
                </span>
                <br />
                <div className="custom-reviews-main">
                  <div className="custom-reviews-main-svg review-first">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path
                        d="M12.2192 0.835938L15.7004 7.81562L23.4852 8.94174L17.8522 14.3716L19.1816 22.0426L12.2192 18.419L5.25675 22.0426L6.58614 14.3716L0.953125 8.94174L8.73795 7.81562L12.2192 0.835938Z"
                        fill="#FFDE30"
                      ></path>
                    </svg>
                    <div>
                      <p className="custom-average-number ml-2 mb-0">4.8</p>
                    </div>
                  </div>
                  <div className="custom-reviews-main-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M10.5755 20.0426H9.52446L7.05226 17.4964H3.39577L2.61118 16.7562V13.1737L0.109375 10.6275V9.57647L2.61118 7.03025V3.43297L3.39577 2.69279H7.05226L9.52446 0.161377H10.5755L13.1217 2.69279H16.719L17.4592 3.41817V7.03025L19.9906 9.57647V10.6275L17.4148 13.1737V16.7562L16.6746 17.4964H13.1217L10.5755 20.0426ZM8.13293 13.7659H9.18398L14.7649 8.18493L13.7139 7.13387L8.66586 12.1967L6.62296 10.1538L5.5719 11.2049L8.13293 13.7659Z"
                        fill="#00AFEF"
                      ></path>
                    </svg>
                    <div>
                      <p className="custom-average-number mb-0 ml-2 ">
                        559
                        <span className="not-show ml-2">reviews</span>
                      </p>
                    </div>
                  </div>
                </div>

                <hr />
                <form
                  onSubmit={(e) => handleSubmit(e, 'C.png')}
                  className="add-to-cart mt-40 md-40"
                >
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    max={20}
                    required
                    aria-label="Quantity" // Accessibility improvement
                  />
                  <button type="submit" className="theme-btn">
                    Add to Cart <i className="fas fa-angle-double-right" />
                  </button>
                </form>
                <hr />
                <ul className="category-tags pt-10">
                  <li>
                    <b>Category</b>
                    <span>:</span>
                    <a href="#">Green</a>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <b>Tags</b>
                    <span>:</span>
                    <a href="#">Organic</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="des-section">
            <Tab.Container defaultActiveKey={"details"}>
              <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
                <li className="des">
                  <Nav.Link
                    eventKey={"details"}
                    href="#details"
                    data-toggle="tab"
                  >
                    Description
                  </Nav.Link>
                </li>
                <li className="des">
                  <Nav.Link eventKey={"use"} href="#use" data-toggle="tab">
                    How to use
                  </Nav.Link>
                </li>
                <li className="des">
                  <Nav.Link
                    eventKey={"information"}
                    href="#information"
                    data-toggle="tab"
                  >
                    Benifits
                  </Nav.Link>
                </li>
                <li className="des">
                  <Nav.Link
                    eventKey={"review"}
                    href="#review"
                    data-toggle="tab"
                  >
                    Ingredients
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
                <Tab.Pane className="tab-pane" eventKey="details">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore verit atis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum
                  </p>
                  <ul className="list-style-one">
                    <li>The Complete Guide To Switching From HTTP To HTTPS</li>
                    <li>
                      Ultimate Digital Clean-Up Checklist: Are You Prepared For
                      The New Year?
                    </li>
                    <li>
                      How To Roll Out New Features Without Hurting Loyal Users
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="use">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore verit atis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum
                  </p>
                  <ul className="list-style-one">
                    <li>The Complete Guide To Switching From HTTP To HTTPS</li>
                    <li>
                      Ultimate Digital Clean-Up Checklist: Are You Prepared For
                      The New Year?
                    </li>
                    <li>
                      How To Roll Out New Features Without Hurting Loyal Users
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="information">
                  <p>
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam
                  </p>
                  <ul className="list-style-one mt-25 mb-25">
                    <li>Strong lens for long distance surveillance.</li>
                    <li>WIFI technology can view and view the Internet</li>
                    <li>Wide Angle and Long Length</li>
                    <li>Smart zooming point</li>
                    <li>HD quality video output.</li>
                    <li>Smart Alarming System</li>
                    <li>Power system 12 volts (without adapter)</li>
                  </ul>
                  <p>
                    Now wherever you are, wherever you are, you can easily
                    monitor your CCTV videos through your mobile, tab, laptop or
                    PC. With the wireless camera, you can view the camera from
                    your mobile or computer to the right-left 0 to 360-degree
                    video. Cover the flower room with a camera.
                  </p>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="review">
                  <p>
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam
                  </p>
                  <ul className="list-style-one mt-25 mb-25">
                    <li>Strong lens for long distance surveillance.</li>
                    <li>WIFI technology can view and view the Internet</li>
                    <li>Wide Angle and Long Length</li>
                    <li>Smart zooming point</li>
                    <li>HD quality video output.</li>
                    <li>Smart Alarming System</li>
                    <li>Power system 12 volts (without adapter)</li>
                  </ul>
                  <p>
                    Now wherever you are, wherever you are, you can easily
                    monitor your CCTV videos through your mobile, tab, laptop or
                    PC. With the wireless camera, you can view the camera from
                    your mobile or computer to the right-left 0 to 360-degree
                    video. Cover the flower room with a camera.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>{" "}
          </section>
        </div>
      </section>
      {/* Product Details End */}
      {/* Revide Form Area Start */}
      <section
        className="review-form-area pt-65"
        style={{ padding: "2rem  8rem" }}
      >
        <h3>Reviews</h3>
        <br />
        <div>
          <ul className="comment-list">
            <li>
              <div className="comment-body">
                <div className="author-thumb">
                  <img
                    src="assets/images/products/review-author1.jpg"
                    alt="Author"
                  />
                </div>
                <div className="comment-content">
                  <div className="name-date">
                    <h6>John F. Medina</h6>
                    <span className="comment-date">25 Feb 2022</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <p>
                    Quis autem vel eum iure reprehenderit quin voluptate velit
                    esseeso quam nihile molestiae consequatur veillum quolore
                  </p>
                  <a href="#" className="reply-link">
                    Reply <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <ul className="children">
                <li>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/products/review-author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="comment-content">
                      <div className="name-date">
                        <h6>Somalia D. Silva</h6>
                        <span className="comment-date">25 Feb 2022</span>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <p>
                        Quis autem vel eum iure reprehenderit quin voluptate
                        velit esseeso quam nihile molestiae consequatur veillum
                        quolore
                      </p>
                      <a href="#" className="reply-link">
                        Reply <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="comment-body">
                <div className="author-thumb">
                  <img
                    src="assets/images/products/review-author3.jpg"
                    alt="Author"
                  />
                </div>
                <div className="comment-content">
                  <div className="name-date">
                    <h6>Roger A. Torrence</h6>
                    <span className="comment-date">25 Feb 2022</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <p>
                    Quis autem vel eum iure reprehenderit quin voluptate velit
                    esseeso quam nihile molestiae consequatur veillum quolore
                  </p>
                  <a href="#" className="reply-link">
                    Reply <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container comments-form">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <div className="section-title mb-15">
              <h3>Leave a Comments</h3>
            </div>
            <div className="ratting mb-40">
              <span>Your Rating</span>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row">
              <div className="col-md-4 r-input">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4 r-input">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4 r-input">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12 r-input">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12 r-input">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Reviews
                    <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Revidew Form Area End */}
      {/* Related Products Start */}
      <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h3>Related Products</h3>
          </div>
          <Slider {...productActiveTwo} className="product-active-two">
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/slider/A.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Oragic Orange</Link>
                </h5>
                <span className="price">
                  <span>85</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              <span className="offer">20 Off</span>
              <div className="image">
                <img src="assets/images/slider/B.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Organic Brocolli</Link>
                </h5>
                <span className="price">
                  <del>25</del>
                  <span>18</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/slider/C.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Fresh Carrots</Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer bg-red">sale</span>
              <div className="image">
                <img src="assets/images/slider/A.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Organic Brocolli</Link>
                </h5>
                <span className="price">
                  <span>205</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/slider/C.png" alt="Product" />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <Link href="/product-details">Fresh Carrots</Link>
                </h5>
                <span className="price">
                  <del>55</del>
                  <span>36</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* toaster */}
      {/* <div>
      <h1>My Next.js App</h1>
      <button onClick={notifySuccess}>Show Success Notification</button>
      <button onClick={notifyError}>Show Error Notification</button>
    </div> */}
    </Layout>
  );
};
export default ProductDetails;
