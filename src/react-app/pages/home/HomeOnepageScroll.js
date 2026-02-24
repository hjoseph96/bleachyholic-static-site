import { Fragment } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/seo";
import sliderData from "../../data/hero-sliders/scroll-slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import HeaderOne from "../../wrappers/header/HeaderOne";

const HomeOnepageScroll = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <div className="fullpage-slider-wrapper">
        <div className="fullpage-header-fixed">
          <HeaderOne
            layout="container-fluid"
            headerPaddingClass="header-padding-1"
            headerBgClass="bg-white"
          />
        </div>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel
          speed={1000}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="fullpage-swiper bg-antiquewhite"
        >
          {sliderData &&
            sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="slider-section flone-fp-section">
                  <div className="container">
                    <div className="row fullpage-slider-wrap-mrg">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center">
                        <div className="slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content">
                          <h3 className="animated">{single.title}</h3>
                          <h1
                            className="animated"
                            dangerouslySetInnerHTML={{
                              __html: single.subtitle
                            }}
                          />
                          <div className="slider-btn-11 btn-hover">
                            <Link
                              className="animated"
                              to={process.env.PUBLIC_URL + single.url}
                            >
                              SHOP NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider12-img-1 slider-animated-1">
                          <img
                            className="animated"
                            alt=""
                            src={process.env.PUBLIC_URL + single.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default HomeOnepageScroll;
