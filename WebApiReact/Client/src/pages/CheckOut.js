import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { clearCart } from "../Slices/cartSlice";
import Modal from "../Modal";
import axios from 'axios';

function CheckOut() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxRate = 0.05; // Example tax rate of 5%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {

    dispatch(clearCart());



    setIsModalOpen(true);
  };
  const submitCart = async () => {
    if (localStorage.getItem("token") != null) {
      const response = await axios.post(`https://localhost:7237/api/cart/fillcart`, {
        username: localStorage.getItem('username'),
        totalprice: total
      },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }

        })

    }
    else {
      alert("Lütfen Giriş Yapınız.")
    }
    dispatch(clearCart())
  }

  return (
    <div>
      <div className="checkout-section pt-110 mb-110">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="form-wrap mb-30">
                <h4>Billing Details</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your country name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Street Address</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="House and street name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <select>
                          <option>Town / City</option>
                          <option>Dhaka</option>
                          <option>Saidpur</option>
                          <option>Newyork</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="fname"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Additional Information</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-wrap box--shadow">
                <h4>Ship to a Different Address?</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="added-product-summary mb-30">
                <h5>Order Summary</h5>
                <ul className="added-products">
                  {cartItems.map((item) => (
                    <li key={item.id} className="single-product">
                      <div className="product-area">
                        <div className="product-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="product-info">
                          <h5>
                            <a href="#">{item.title}</a>
                          </h5>
                          <div className="product-total">
                            <div className="quantity-counter">
                              <a href="#" className="quantity__minus">
                                <i className="bx bx-minus" />
                              </a>
                              <input
                                name="quantity"
                                type="text"
                                className="quantity__input"
                                defaultValue={1}
                              />
                              <a href="#" className="quantity__plus">
                                <i className="bx bx-plus" />
                              </a>
                            </div>
                            <strong>
                              {" "}
                              <i className="bi bi-x-lg px-2" />
                              <span className="product-price">
                                {item.price}
                              </span>
                            </strong>
                          </div>
                        </div>
                      </div>
                      <div className="delete-btn">
                        <i className="bx bx-x" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cost-summary mb-30">
                <table className="table cost-summary-table">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>${subtotal.toFixed(2)}</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="tax">Tax</td>
                      <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total (tax excl.)</td>
                      <td>${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total (tax incl.)</td>
                      <td>${total.toFixed(2)}</td>
                    </tr>
                  </tbody>

                </table>
              </div>
              <div className="cost-summary total-cost mb-30">
                <table className="table cost-summary-table total-cost">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>${total.toFixed(2)}</th>
                    </tr>
                  </thead>

                </table>
              </div>
              <form className="payment-form">
                <div className="payment-methods mb-30">
                  <ul className="payment-list">
                    <li className="check-payment">
                      <div className="form-check payment-check">
                        <h6>Check payments</h6>
                        <p className="para">
                          Please send a check to Store Name, Store Street, Store
                          State / Country, Store Postcode.
                        </p>
                      </div>
                      <div className="checked"></div>
                    </li>
                    <li className="cash-delivary">
                      <div className="form-check payment-check">
                        <h6>Cash on delivery</h6>
                        <p className="para">Pay with cash upon delivery.</p>
                      </div>
                      <div className="checked"></div>
                    </li>
                    <li className="paypal">
                      <div className="form-check payment-check paypal">
                        <h6>Paypal</h6>
                        <img src="assets/img/inner-page/payment.png" alt="" />
                        <a href="#" className="about-paypal">
                          What is PayPal?
                        </a>
                      </div>
                      <div className="checked"></div>
                    </li>
                    <li className="stripe">
                      <h6>Card</h6>
                      <div className="checked"></div>
                    </li>
                  </ul>
                  <div
                    className="choose-payment-method pt-25 pb-25"
                    id="strip-payment"
                    style={{ display: "none" }}
                  >
                    <h5>Select Your Payment Method</h5>
                    <div className="row gy-4 g-4">
                      <div className="col-md-12">
                        <div className="input-area">
                          <label>Card Number</label>
                          <div className="input-field">
                            <input
                              type="text"
                              placeholder="1234 1234 1234 1234"
                            />
                            <img
                              src="assets/img/inner-page/payment.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="input-area">
                          <label>Expiration Date</label>
                          <div className="row gy-4">
                            <div className="col-sm-6">
                              <select>
                                <option>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>
                            <div className="col-sm-6">
                              <select>
                                <option>Day</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="input-area">
                          <label>CVC</label>
                          <input type="text" placeholder={123} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-form-bottom d-flex align-items-start">
                    <input
                      type="checkbox"
                      className="custom-check-box"
                      id="terms"
                    />
                    <label htmlFor="terms">
                      I have read and agree to the website{" "}
                      <a href="#">Terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="place-order-btn">
                  <button
                    onClick={submitCart}
                    type="submit"
                    className="primary-btn1 hover-btn3"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-body">
          <h3>Thank you for your order!</h3>
          <p>
            We appreciate your business! If you have any questions, please email
            <a href="mailto: betul@gmail.com"> </a>
          </p>
        </div>

      </Modal>
    </div>
  );
}

export default CheckOut