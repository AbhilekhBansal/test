import Link from "next/link";
import banner from "../../public/assets/images/banner/mainBanner.jpg";

const PageBanner = ({ pageName, pageTitle }) => {
  // console.log(banner)
  return (
  
    <section
      className="page-banner text-white py-165 rpy-130 h-[180px]"
      style={{ backgroundImage: `url(${banner.src})`, height: "180px" }}
    >
      
      <div className="container bread">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle ? pageTitle : pageName}
          </h1>
         
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
