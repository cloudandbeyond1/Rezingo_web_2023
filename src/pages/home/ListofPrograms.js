import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TabProgram from "../../wrappers/Program/TabProgram";

const ListofPrograms = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Programs"
        description="Black shop home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        {/* <HeroSliderWellness /> */}
        {/* <ProductSliderFour/> */}
        <div className="blog-area blog-no-sidebar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                  <div className="row">
                    {/* blog posts */}
                    <TabProgram spaceBottomClass="pb-60" category="Program" />

                  </div>

                  {/* blog pagination */}
                  {/* <BlogPagination /> */}
              </div>
            </div>
          </div>
        </div>
        {/* banner */}
      </LayoutOne>
    </Fragment>
  );
};

export default ListofPrograms;
