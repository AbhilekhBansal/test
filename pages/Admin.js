import Link from 'next/link'
import React from 'react'

function Admin() {
  return (
    <section className="what-we-want rel z-1 bg-lighter pt-130 rpt-100 pb-95 rpb-65">
    <div className="container">
        asdasdasdddddddd
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-5">
          <div className="what-we-want-content mb-30 rmb-65 wow fadeInUp delay-0-2s">
            <div className="section-title mb-20">
              <span className="sub-title mb-20">What We Want</span>
              <h2>Know Something About We Want Customers</h2>
            </div>
            <p>
              On the other hand we denounce with righteou indignation
              dislike men who are beguiled and demoralized by the charms
            </p>
            <Link href="/services">
              <a className="read-more color-secondary">
                Read More <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="what-we-want-features">
            <div className="row">
              <div className="col-md-6">
                <div className="about-feature-item style-two wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <i className="flaticon-offer" />
                  </div>
                  <h4>
                    <Link href="/service-details">Discount Options</Link>
                  </h4>
                  <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                  <img src="assets/images/about/arrow.png" alt="Arrow" />
                  <div
                    className="feature-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/features/feature-bg.jpg)",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-feature-item style-two wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <i className="flaticon-return-box" />
                  </div>
                  <h4>
                    <Link href="/service-details">Best Return Policy</Link>
                  </h4>
                  <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                  <img src="assets/images/about/arrow.png" alt="Arrow" />
                  <div
                    className="feature-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/features/feature-bg.jpg)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="what-we-want-shapes">
      <img
        className="shape-one"
        src="assets/images/shapes/www-shape1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/www-shape2.png"
        alt="Shape"
      />
    </div>
  </section>  )
}

export default Admin