import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const ShopGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop"} />
      <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
            <div className="products-dropdown">
           
              <select style={{border: 'none',padding: '0px'}} >
                <option value="default" selected="">
                  Best Selling
                </option>
                <option value="new">Latest</option>
                <option value="old">Oldest</option>
                <option value="hight-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
            <ul className="grid-list">
              <li>
                <a href="#">
                  <i className="fas fa-border-all" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-bars" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row show-grid-row">
            
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <span className="offer">53 Off</span>
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
                    <Link href="/product-details">HEP Liver pro</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
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
                    <Link href="/product-details">Vedic Cervical Cure</Link>
                  </h5>
                  <span className="price">
                    <span>49.58</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <span className="offer bg-red">sale</span>
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
                    <Link href="/product-details">Ayuvcare</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <span className="offer">53 Off</span>
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
                    <Link href="/product-details">HEP Liver pro</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
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
                    <Link href="/product-details">Vedic Cervical Cure</Link>
                  </h5>
                  <span className="price">
                    <span>49.58</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <span className="offer bg-red">sale</span>
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
                    <Link href="/product-details">Ayuvcare</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination flex-wrap justify-content-center pt-10">
            <Pagination
              paginationCls={".show-grid-row .col-xl-3"}
              defaultSort={8}
            />
          </ul>
        </div>
      </section>
    </Layout>
  );
};
export default ShopGrid;
