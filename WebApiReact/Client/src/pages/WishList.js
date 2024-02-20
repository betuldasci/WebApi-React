import React from 'react'
import { Link } from 'react-router-dom';

function WishList() {
  return (
    <div>
      <div className="whistlist-section mt-110 mb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="whistlist-table">
                <table className="eg-table2">
                  <thead>
                    <tr>
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="delete-icon">
                          <i className="bi bi-x-lg" />
                        </div>
                      </td>
                      <td data-label="Product" className="table-product">
                        <div className="product-img">
                          <img
                            src="assets/img/inner-page/whistlist-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="product-default.html">
                              Eau De Blue Perfume
                            </a>
                          </h6>
                        </div>
                      </td>
                      <td data-label="Price">
                        <p className="price">
                          <del>$40.00</del>
                          $30.00
                        </p>
                      </td>
                      <td data-label="Stock">
                        <span>In Stock</span>
                      </td>
                      <td>
                        <Link to="/cart" className="add-cart-btn hover-btn2">
                           <i className="bi bi-bag-check" />
                          Add To Cart
                        </Link>
                     
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList