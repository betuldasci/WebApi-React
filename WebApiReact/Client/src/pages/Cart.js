import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Slices/cartSlice"; 

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 15; // Assume a flat rate for simplicity
  const taxes = 5; // Assume a flat rate for simplicity
  const total = subtotal + shipping + taxes;
  return (
    <div>
      <div className="whistlist-section cart mt-110 mb-110">
        <div className="container">
          <div className="row mb-50">
            <div className="col-12">
              <div className="whistlist-table">
                <table className="eg-table2">
                  <thead>
                    <tr>
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                     {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="delete-icon">
                          <i className="bi bi-x-lg" />
                        </div>
                      </td>
                      <td data-label="Product" className="table-product">
                        <div className="product-img">
                          <img
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href={() => false}>{item.title}</a>
                          </h6>
                        </div>
                      </td>
                      <td data-label="Price">
                        <p className="price">
                          <del>$40.00</del>
                          {item.price}
                        </p>
                      </td>
                      <td data-label="Quantity">
                        <div className="quantity-counter">
                          <a href={() => false} className="quantity__minus">
                            <i className="bx bx-minus" />
                          </a>
                          <input
                            name="quantity"
                            type="text"
                            className="quantity__input"
                            defaultValue={1}
                          />
                          <a href={() => false} className="quantity__plus">
                            <i className="bx bx-plus" />
                          </a>
                        </div>
                      </td>
                      <td data-label="Total">${subtotal.toFixed(2)}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-8">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Cart Totals</th>
                    <th />
                    <th>${subtotal.toFixed(2)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <ul className="cost-list text-start">
                        <li>Shipping Fee</li>
                        <li>Total ( tax excl.)</li>
                        <li>Total ( tax incl.)</li>
                        <li>Taxes</li>
                        <li>
                          Shipping Enter your address to view shipping options.
                          <br />
                          <a href={() => false}>Calculate shipping</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="single-cost text-center">
                        <li>Fee</li>
                        <li>$15</li>
                        <li />
                        <li>$15</li>
                        <li>$15</li>
                        <li>$5</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td />
                    <td>${subtotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" className="primary-btn1 hover-btn3">
                Product Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart