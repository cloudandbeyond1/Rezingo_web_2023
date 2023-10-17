import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

function ProgramModal({ product, currency, discountedPrice, finalProductPrice, finalDiscountedPrice, show, onHide, wishlistItem, compareItem }) {
 console.log(product,"productdf")
  const onCloseModal = () => {
   // setThumbsSwiper(null)
    onHide()
  }

  return (
    <Modal show={show} onHide={onCloseModal} className="product-quickview-modal-wrapper">
    <Modal.Header closeButton></Modal.Header>
   
    <div className="modal-body">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-xs-12">
{product}
        </div>
       
      </div>
    </div>
   
  </Modal>
  );
}

ProgramModal.propTypes = {
  currency: PropTypes.shape({}),
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.shape({}),
  show: PropTypes.bool,
  wishlistItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({})
};

export default ProgramModal;
