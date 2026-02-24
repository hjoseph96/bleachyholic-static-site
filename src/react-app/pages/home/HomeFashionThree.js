import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import NewProductGrid from "../../wrappers/product/NewProductGrid";

const HomeFashionThree = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="BleachyHolic | Anime Apparel"
        description="Artisanal bleached anime apparel store. Shop for high-quality bleached anime apparel and accessories."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* product grid */}
        <NewProductGrid category="accessories" limit={10} />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionThree;
