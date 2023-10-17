import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProgramGrid from "./ProgramGrid";
import { Link } from "react-router-dom";
import PhysicalGrid from "./PhysicalGrid";


const TabPhysical = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,type
}) => {
  
  return (
    <div
      className={clsx("product-area", spaceTopClass, spaceBottomClass, bgColorClass)}
    >
<div className="container containermaxwidth py-5 mt-5">
        

      {/* <SectionTitleTwo
          titleText="Our Top Programs"
          positionClass="text-center"
        /> */}
        
        <Tab.Container defaultActiveKey="All">
      
         
        
         

          <Tab.Content>
            <Tab.Pane eventKey="All">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Physical">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Social">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Financial">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Environmental">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Intellectual">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Occupational">
              <div className="row">
                <PhysicalGrid
           
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Spiritual">
              <div className="row">
              <PhysicalGrid
           
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Emotional">
              <div className="row">
              <PhysicalGrid
           
           />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        
      </div>
      <div className="view-more text-center btn-primary mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shopdetails"}
          >
            VIEW MORE PROGRAMS
          </Link>
        </div>
    </div>
  );
};

TabPhysical.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabPhysical;
