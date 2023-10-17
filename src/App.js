import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListofPrograms from "./pages/home/ListofPrograms";
// import { Lazy } from "swiper";


// home pages
const LoginPage = lazy(() => import("./pages/home/LoginPage"));
const PhysicalWellness = lazy(() => import("./pages/home/PhysicalWellness"));
const SocialWellness = lazy(() => import("./pages/home/SocialWellness"));
const BlogNew = lazy(() => import("./pages/home/BlogNew"));
const Sleep = lazy(() => import("./pages/home/Sleep"));
const NewHealth = lazy(() => import("./pages/home/NewHealth"));
const Benefits = lazy(() => import("./pages/home/Benefits"));
const Beauty = lazy(() => import("./pages/home/Beauty"));
const Anxiety = lazy(() => import("./pages/home/Anxiety"));
const Performance = lazy(() => import("./pages/home/Performance"));
const Health = lazy(() => import("./pages/home/Health"));
const SignUp = lazy(() => import("./pages/home/SignUp"));
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const Wellness = lazy(() => import("./pages/home/Wellness"));
const ProgramList = lazy(() => import("./pages/home/ListofPrograms"));
const CloudKitchen = lazy(() => import("./pages/home/CloudKitchen"));
const Gadgets = lazy(() => import("./pages/home/Gadgets"));
const Shop = lazy(() => import("./pages/home/Shop"));
const Food = lazy(() => import("./pages/home/HomeFood"));
const ProgramGridStandard = lazy(() => import("./pages/program/ProgramGridStandard"));
const HealthyLifestyle = lazy(() => import("./pages/home/HealthyLifestyle"));
const CategoryBlog = lazy(() => import("./pages/blog/CategoryBlog"));
const SocialBlog = lazy(()=> import("./pages/blog/SocialBlog"));
const ComprehensiveWellness = lazy(() => import("./pages/home/New"));
const CardView = lazy(() => import("./pages/home/CardView"));
// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopProductGrid = lazy(() => import("./pages/shop/ShopProductGrid"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));


//Program Pages
const Program = lazy(() => import("./pages/shop-program/Program"));
const Physical1 = lazy(() => import("./pages/shop-program/Physical1"));
const Sport1 = lazy(() => import("./pages/shop-program/Sport1"));
const Fitness1 = lazy(() => import("./pages/shop-program/Fitness1"));
const YogaNew = lazy(() => import("./pages/shop-program/YogaNew"));


// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));

const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeFashion/>}
              />
              
              <Route path={process.env.PUBLIC_URL + "/beauty"} element={<Beauty/>}/>
              <Route path={process.env.PUBLIC_URL + "/physicalwellness"} element={<PhysicalWellness/>}/>
              <Route path={process.env.PUBLIC_URL + "/socialwellness"} element={<SocialWellness/>}/>
              <Route path={process.env.PUBLIC_URL + "/blog"} element={<BlogNew/>}/>
              <Route path={process.env.PUBLIC_URL + "/anxiety"} element={<Anxiety/>}/>
              <Route path={process.env.PUBLIC_URL + "/sleep"} element={<Sleep/>}/>
              <Route path={process.env.PUBLIC_URL + "/performance"} element={<Performance/>}/>
              <Route path={process.env.PUBLIC_URL + "/CardView"} element={<CardView/>}/>
              <Route path={process.env.PUBLIC_URL + "/HealthyLifestyle"} element={<HealthyLifestyle/>} />
              <Route path={process.env.PUBLIC_URL + "/ComprehensiveWellness"} element={<ComprehensiveWellness/>}/>
              <Route path={process.env.PUBLIC_URL + "/newhealth"} element={<NewHealth/>}/>
              <Route
                path={process.env.PUBLIC_URL + "/login"}
                element={<LoginPage/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/signup"}
                element={<SignUp/>}
              />
               <Route
                path={process.env.PUBLIC_URL + "/wellness"}
                element={<Wellness/>}
              />
                             <Route
                path={process.env.PUBLIC_URL + "/program"}
                element={<ListofPrograms/>}
              />
               <Route
                path={process.env.PUBLIC_URL + "/cloud-kitchen"}
                element={<CloudKitchen/>}
              />

            <Route
                path={process.env.PUBLIC_URL + "/benefits"}
                element={<Benefits/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/health"}
                element={<Health/>}
              />

<Route
                path={process.env.PUBLIC_URL + "/newhealth"}
                element={<NewHealth/>}
              />
                <Route
                path={process.env.PUBLIC_URL + "/social"}
                element={<SocialBlog/>}
              />
              <Route path={process.env.PUBLIC_URL + "/gadgets"}
              element={<Gadgets/>}/>

              {/* Homepages */}
              <Route
                path={process.env.PUBLIC_URL + "/Shop"}
                element={<Shop/>}
              />
             <Route
                path={process.env.PUBLIC_URL + "/programdetails"}
                element={<ProgramGridStandard/>}
              />
              {/* Category program pages */}
              <Route
                path={process.env.PUBLIC_URL + "/category"}
                element={<CategoryBlog/>}
              />
              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shopping"}
                element={<ShopGridStandard/>}
              />

  {/* Food pages */}
  <Route
                path={process.env.PUBLIC_URL + "/Food"}
                element={<Food/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                element={<ShopGridFilter/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shopdetails"}
                element={<ShopProductGrid/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                element={<ShopGridNoSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                element={<ShopGridFullWidth/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                element={<ShopGridRightSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-standard"}
                element={<ShopListStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                element={<ShopListFullWidth/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                element={<ShopListTwoColumn/>}
              />


 {/* Shop program pages */}
 <Route
                path={process.env.PUBLIC_URL + "/program/:id"}
                element={<Program />}
              />

<Route
                path={process.env.PUBLIC_URL + "/PhysicalWellness/:id"}
                element={<Physical1 />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/fitness/:id"}
                element={<Fitness1 />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/yoga/:id"}
                element={<YogaNew />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/sport/:id"}
                element={<Sport1 />}
              />
              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                element={<ProductTabLeft/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                element={<ProductTabRight/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                element={<ProductSticky/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-slider/:id"}
                element={<ProductSlider/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                element={<ProductFixedImage/>}
              /> 

              {/* Blog pages */}
              <Route
                path={process.env.PUBLIC_URL + "/blog-standard"}
                element={<BlogStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                element={<BlogRightSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-details-standard"}
                element={<BlogDetailsStandard/>}
              /> 

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                element={<Compare/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout/>}
              /> 

              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;