import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import { setProducts } from "./store/slices/product-slice";
import { setPrograms } from "./store/slices/program-slice";
import products from "./data/products.json";
//import programs from "./data/programs.json";
import 'animate.css';
import 'swiper/swiper-bundle.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";
import "./i18n";
import  {database}  from "./firebase";
import { set, ref, push, get } from "firebase/database";


     const TableName="programs";
     const tableRef = ref(database, TableName); 
     get(tableRef)
     .then((snapshot) => {
       if (snapshot.exists()) {
         const programs = snapshot.val();         
         store.dispatch(setPrograms(programs));
            console.log('Data from Firebase:', programs); 
       } else {
         console.log('No data found in the node.');
       }
     })
     .catch((error) => {
       console.error('Error retrieving data:', error);
     });
     
     const ProductTableName="products";
     const prdtableRef = ref(database, ProductTableName); 
     get(prdtableRef)
     .then((snapshot) => {
       if (snapshot.exists()) {
         const products = snapshot.val();         
         store.dispatch(setProducts(products));
            console.log('Data from Firebase products:', products); 
       } else {
         console.log('No data found in the node.');
       }
     })
     .catch((error) => {
       console.error('Error retrieving data:', error);
     });  
    //store.dispatch(setPrograms(programs));
   // store.dispatch(setProducts(products));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <PersistProvider>
        <App />
      </PersistProvider>
    </Provider>
);

