import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from '../../Slices/productSlice';
import { addToCart } from '../../Slices/cartSlice';

function BestSelling() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1  // Varsayılan olarak 1 adet ürün ekleyin, ihtiyaca göre ayarlayabilirsiniz
    }));
  };


  // useEffect(() => {
  //   dispatch(setProducts());
  // }, [dispatch]);

  const bestSellingProducts = products
    .slice()
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 3);

  return (
    <div>
      <div className="best-selling-section mb-110">
        <div className="container">
          <div className="section-title2">
            <h3>Best Selling Product</h3>
            <div className="all-product hover-underline">
              <a href="shop-list.html">
                *View All Product
                <svg
                  width={33}
                  height={13}
                  viewBox="0 0 33 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25.5083 7.28L0.491206 7.25429C0.36093 7.25429 0.23599 7.18821 0.143871 7.0706C0.0517519 6.95299 0 6.79347 0 6.62714C0 6.46081 0.0517519 6.3013 0.143871 6.18369C0.23599 6.06607 0.36093 6 0.491206 6L25.5088 6.02571C25.6391 6.02571 25.764 6.09179 25.8561 6.2094C25.9482 6.32701 26 6.48653 26 6.65286C26 6.81919 25.9482 6.9787 25.8561 7.09631C25.764 7.21393 25.6386 7.28 25.5083 7.28Z" />
                  <path d="M33.0001 6.50854C29.2204 7.9435 24.5298 10.398 21.623 13L23.9157 6.50034L21.6317 0C24.5358 2.60547 29.2224 5.06539 33.0001 6.50854Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="row gy-4">
            {
              products && (
                bestSellingProducts.map((product) => (
                  <div className="col-lg-4 col-md-6">
                    <div key={product.id} className="product-card hover-btn">
                      <div className="product-card-img double-img">
                        <a href="product-default.html">
                          <img src={product.image} alt="" className="img1" />
                          <img src={product.image} alt="" className="img2" />

                          <div className="batch">
                            <span className="new">New</span>
                            <span>-15%</span>
                          </div>
                        </a>
                        <div className="overlay">
                          <div className="cart-area">
                            <a
                              href="#"
                              onClick={() => handleAddToCart(product)}
                              className="hover-btn3 add-cart-btn"
                            >
                              <i className="bi bi-bag-check" /> Add To Cart
                            </a>
                          </div>
                        </div>
                        <div className="view-and-favorite-area">
                          <ul>
                            <li>
                              <a href="whistlist.html">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 18 18"
                                >
                                  <g clipPath="url(#clip0_168_378)">
                                    <path d="M16.528 2.20919C16.0674 1.71411 15.5099 1.31906 14.8902 1.04859C14.2704 0.778112 13.6017 0.637996 12.9255 0.636946C12.2487 0.637725 11.5794 0.777639 10.959 1.048C10.3386 1.31835 9.78042 1.71338 9.31911 2.20854L9.00132 2.54436L8.68352 2.20854C6.83326 0.217151 3.71893 0.102789 1.72758 1.95306C1.63932 2.03507 1.5541 2.12029 1.47209 2.20854C-0.490696 4.32565 -0.490696 7.59753 1.47209 9.71463L8.5343 17.1622C8.77862 17.4201 9.18579 17.4312 9.44373 17.1868C9.45217 17.1788 9.46039 17.1706 9.46838 17.1622L16.528 9.71463C18.4907 7.59776 18.4907 4.32606 16.528 2.20919ZM15.5971 8.82879H15.5965L9.00132 15.7849L2.40553 8.82879C0.90608 7.21113 0.90608 4.7114 2.40553 3.09374C3.76722 1.61789 6.06755 1.52535 7.5434 2.88703C7.61505 2.95314 7.68401 3.0221 7.75012 3.09374L8.5343 3.92104C8.79272 4.17781 9.20995 4.17781 9.46838 3.92104L10.2526 3.09438C11.6142 1.61853 13.9146 1.52599 15.3904 2.88767C15.4621 2.95378 15.531 3.02274 15.5971 3.09438C17.1096 4.71461 17.1207 7.2189 15.5971 8.82879Z" />
                                  </g>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href={() => false}
                                data-bs-toggle="modal"
                                data-bs-target="#product-view"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={22}
                                  height={22}
                                  viewBox="0 0 22 22"
                                >
                                  <path d="M21.8601 10.5721C21.6636 10.3032 16.9807 3.98901 10.9999 3.98901C5.019 3.98901 0.335925 10.3032 0.139601 10.5718C0.0488852 10.6961 0 10.846 0 10.9999C0 11.1537 0.0488852 11.3036 0.139601 11.4279C0.335925 11.6967 5.019 18.011 10.9999 18.011C16.9807 18.011 21.6636 11.6967 21.8601 11.4281C21.951 11.3039 21.9999 11.154 21.9999 11.0001C21.9999 10.8462 21.951 10.6963 21.8601 10.5721ZM10.9999 16.5604C6.59432 16.5604 2.77866 12.3696 1.64914 10.9995C2.77719 9.62823 6.58487 5.43955 10.9999 5.43955C15.4052 5.43955 19.2206 9.62969 20.3506 11.0005C19.2225 12.3717 15.4149 16.5604 10.9999 16.5604Z" />
                                  <path d="M10.9999 6.64832C8.60039 6.64832 6.64819 8.60051 6.64819 11C6.64819 13.3994 8.60039 15.3516 10.9999 15.3516C13.3993 15.3516 15.3515 13.3994 15.3515 11C15.3515 8.60051 13.3993 6.64832 10.9999 6.64832ZM10.9999 13.9011C9.40013 13.9011 8.09878 12.5997 8.09878 11C8.09878 9.40029 9.40017 8.0989 10.9999 8.0989C12.5995 8.0989 13.9009 9.40029 13.9009 11C13.9009 12.5997 12.5996 13.9011 10.9999 13.9011Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <a
                            href="product-default.html"
                            className="hover-underline"
                          >
                            {product.title}
                          </a>
                        </h6>
                        <p>
                          <a href="shop-list.html">REVLON</a>
                        </p>
                        <p className="price">
                          $150.00 <del>$200.00</del>
                        </p>
                        <div className="rating">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                          </ul>
                          <span>(50)</span>
                        </div>
                      </div>
                      <span className="for-border" />
                    </div>
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSelling