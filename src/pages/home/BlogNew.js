import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BlogSlider from "./BlogSlider";
import BlogSection from "./BlogSection";

const BlogNew = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Shop"
        description="Shop home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerContainerClass="container-fluid" headerPaddingClass="header-padding-2">
        
      <BlogSlider spaceTopClass="pt-100" spaceBottomClass="pb-100" />
      <BlogSection spaceTopClass="pt-100" spaceBottomClass="pb-100"/>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNew;
