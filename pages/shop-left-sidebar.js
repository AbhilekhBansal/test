import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
const ShopLeftSidebar = () => {
const [productList,setProductList] = useState([]);

useEffect(() => {
  const products = localStorage.getItem('productList');
  setProductList(JSON.parse(products) || []);

  const fetchData = async () => {
    
    // if(productList.length < 1){

      try {
        const response = await axios.get('http://localhost:8000/api/getProducts');

        // console.log(response.data)
        if (response.data.status === 200) {
          setProductList(response.data.data);
          console.log(response.data.data);
          localStorage.setItem('productList',JSON.stringify(response.data.data))

        } else if (response.data.status === 401) {
          console.log(response.data.msg);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    // } 
  };

  fetchData();
}, []);




  return (
    <Layout>
      <PageBanner pageName={"Shop"} />
      <section className="shop-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Category
                  </h4>
                  <ul>
                    <li>
                      <Link href="/shop-grid">Organic </Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Ayurveda</Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Herbal</Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Eco</Link> <span>(9)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Lorem</Link>{" "}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Mil</Link>{" "}
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Popular Tags
                  </h4>
                  <div className="tag-coulds">
                    <Link href="/shop-grid">Ayurveda</Link>
                    <Link href="/shop-grid">Organic</Link>
                    <Link href="/shop-grid">HEP Liver</Link>
                    <Link href="/shop-grid">Vedic</Link>
                    <Link href="/shop-grid">Herbal</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 mt-55">
             
              <div className="row shop-left-sidebar-row">
                {productList && productList.map((item,index)=>(

                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6" key={index}>
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer bg-red">sale</span>
                    <div className="image">
                      <img src="assets/images/slider/A.png" alt="Product" />
                    </div>
                    <div className="content">
                      <div className="ratting">
                      {item.rating && Array(+(item.rating)).fill(null).map((_, index) => (
                          <i className="fas fa-star" key={index} />
                        ))}
                        {/* <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" /> */}
                      </div>
                      <h5>
                      <Link href="/product-details/[productId]" as={`/product-details/${item.id}`}>
                        <a>{item.product_name ? item.product_name : 'Product Name'}</a>
                      </Link>
                        {/* <Link href={`/product-details/${item.id}`}>{item.name ? item.name : 'HEP Liver Pro'}</Link> */}
                      </h5>
                      <span className="price">
                        {item.sale && (<del>{item.sale}</del>)}
                        {item.Price && (<span>{item.Price}</span>)}
                        
                      </span>
                    </div>
                  </div>
                </div>

                ))}
                
                {/* <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
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
                        <Link href="/product-details">Ayurvcare</Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <span className="offer">20 Off</span>
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
                        <Link href="/product-details">Vedic Cervical Care</Link>
                      </h5>
                      <span className="price">
                        <del>55</del>
                        <span>36</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
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
                        <Link href="/product-details">HEP Liver Pro</Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
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
                        <Link href="/product-details">Ayurvcare</Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <span className="offer">20 Off</span>
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
                        <Link href="/product-details">Vedic Cervical Care</Link>
                      </h5>
                      <span className="price">
                        <del>55</del>
                        <span>36</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
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
                        <Link href="/product-details">HEP Liver Pro</Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
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
                        <Link href="/product-details">Ayurvcare</Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <span className="offer">20 Off</span>
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
                        <Link href="/product-details">Vedic Cervical Care</Link>
                      </h5>
                      <span className="price">
                        <del>55</del>
                        <span>36</span>
                      </span>
                    </div>
                  </div>
                </div> */}

              </div>
              <ul className="pagination flex-wrap justify-content-center pt-10">
                <Pagination
                  paginationCls={".shop-left-sidebar-row .col-xl-4"}
                  defaultSort={6}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ShopLeftSidebar;
