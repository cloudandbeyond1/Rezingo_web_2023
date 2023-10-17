import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {NavLink} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  const scrollRef = useRef();
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const wheelListener = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", wheelListener);
      return () => el.removeEventListener("wheel", wheelListener);
    }
  }, []);

  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>         
        <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to={process.env.PUBLIC_URL + "/"}>
              {t("home")}
            </NavLink>
          </li>
          {/* <li>
        <Link to={process.env.PUBLIC_URL + "/about"}>
              {t("About")}
            </Link>
          </li> */}
          <li className="nav-item">
        <NavLink  activeClassName="active" className="nav-link" to={process.env.PUBLIC_URL + "/program"}>
              {t("Program")}
            </NavLink>
          </li>
         
         
          <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to={process.env.PUBLIC_URL + "/Shop"}>
              {t("Shop")}
            </NavLink>
          </li>


          {/* <li>
            <Link to={process.env.PUBLIC_URL + ""}>
              {" "}
              {t("Supplement")}
             
            </Link>
            <ul className="mega-menu" style={{width:"1500px",left:"-815px"}}>
              <li>
                <ul style={{paddingLeft: "38px",paddingTop: "56px"}}>
                  
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/benefits"} className="font1">
                      {t("The Benefits")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/health"} className="font1 color1">
                      {t("Health")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/beauty"} className="font1 color1">
                      {t("Beauty")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/performance"} className="font1 color1"
                    >
                      {t("Performance")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/sleep"} className="font1 color1">
                      {t("Sleep")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/anxiety"} className="font1 color1">
                      {t("Anxiety")}
                    </Link>
                  </li>
                 
                </ul>
              </li>


              
              


              <li>
                <ul style={{ borderLeft: "1px solid #acacac", paddingLeft: "40px",position:"absolute",left:"-120px"}}>
                  <li style={{display:"flex"}}>
                  <Link to={process.env.PUBLIC_URL + "#"}>
                      {t("RELATED STORIES")}
                    </Link>
                    <Link to={process.env.PUBLIC_URL + "#"}>
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                    </Link>
                  
                  </li>
                  <div style={{display:"flex"}} className="box-scroll" ref={scrollRef} >
                  <li className="mega-menu-img zoom" >
                    <Link to={process.env.PUBLIC_URL + "#"} style={{marginRight:"20px"}}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/supplement/1.jpg"
                        }
                        alt=""
                        style={{width: "300px",height: "225px"}}
                    
                      />
                    </Link>
              
                  <Link to={process.env.PUBLIC_URL + "#"} style={{lineHeight:"20px",marginTop:"6px"}}>
                      {t("The Best Daily Supplements According to Science")}
                    </Link>
               
                  </li>

                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "#"} style={{marginRight:"20px"}}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/supplement/2.jpg"
                        }
                        alt=""
                        style={{width: "300px",height: "225px"}}
                      />
                    </Link>
                    <Link to={process.env.PUBLIC_URL + "#"}>
                      {t("Coping with the Menopause")}
                    </Link>
                  </li>



                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "#"} style={{marginRight:"20px"}}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/supplement/3.jpg"
                        }
                        alt=""
                        style={{width: "300px",height: "225px"}}
                      />
                    </Link>
                    <Link to={process.env.PUBLIC_URL + "#"}>
                      {t("The Truth About Supplements")}
                    </Link>
                  </li>

                 


                  </div>
                </ul>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
