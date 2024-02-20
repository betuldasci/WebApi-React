import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../Slices/categorySlice";
import { Link } from "react-router-dom";
import { addToCart } from "../Slices/cartSlice";
import { useState } from "react";
import { setProducts } from "../Slices/productSlice";

function ShopList() {
  const [quantities, setQuantities] = useState({});

  const { categoryId } = useParams();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    if (categoryId) {

    } else {
      // dispatch(setProducts());
    }
  }, [dispatch, categoryId]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: quantities[product.id] || 1 }));
  };

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
  };
  return (
    <div>
      <div>
        <div className="breadcrumb-section">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop List
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="filter-sidebar">
          <div className="sidebar-area">
            <div className="shop-widget mb-30">
              <div className="check-box-item">
                <h5 className="shop-widget-title">Categories</h5>
                <ul className="shop-item">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/shoplist/${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-list-section mt-110 mb-110">
          <div className="container-lg container-fluid">
            <div className="shop-columns-title-section mb-40">
              <p>Showing 1–12 of 101 results</p>
              <div className="filter-selector">
                <div className="filter">
                  <div className="filter-icon">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_456_25)">
                        <path d="M0.5625 3.17317H9.12674C9.38486 4.34806 10.4341 5.2301 11.6853 5.2301C12.9366 5.2301 13.9858 4.3481 14.2439 3.17317H17.4375C17.7481 3.17317 18 2.92131 18 2.61067C18 2.30003 17.7481 2.04817 17.4375 2.04817H14.2437C13.9851 0.873885 12.9344 -0.00871277 11.6853 -0.00871277C10.4356 -0.00871277 9.38545 0.873744 9.12695 2.04817H0.5625C0.251859 2.04817 0 2.30003 0 2.61067C0 2.92131 0.251859 3.17317 0.5625 3.17317ZM10.191 2.61215L10.191 2.6061C10.1935 1.78461 10.8638 1.11632 11.6853 1.11632C12.5057 1.11632 13.1761 1.78369 13.1796 2.6048L13.1797 2.61306C13.1784 3.43597 12.5086 4.10513 11.6853 4.10513C10.8625 4.10513 10.1928 3.43663 10.191 2.61422L10.191 2.61215ZM17.4375 14.8268H14.2437C13.985 13.6525 12.9344 12.7699 11.6853 12.7699C10.4356 12.7699 9.38545 13.6524 9.12695 14.8268H0.5625C0.251859 14.8268 0 15.0786 0 15.3893C0 15.7 0.251859 15.9518 0.5625 15.9518H9.12674C9.38486 17.1267 10.4341 18.0087 11.6853 18.0087C12.9366 18.0087 13.9858 17.1267 14.2439 15.9518H17.4375C17.7481 15.9518 18 15.7 18 15.3893C18 15.0786 17.7481 14.8268 17.4375 14.8268ZM11.6853 16.8837C10.8625 16.8837 10.1928 16.2152 10.191 15.3928L10.191 15.3908L10.191 15.3847C10.1935 14.5632 10.8638 13.8949 11.6853 13.8949C12.5057 13.8949 13.1761 14.5623 13.1796 15.3834L13.1797 15.3916C13.1785 16.2146 12.5086 16.8837 11.6853 16.8837ZM17.4375 8.43751H8.87326C8.61514 7.26262 7.56594 6.38062 6.31466 6.38062C5.06338 6.38062 4.01418 7.26262 3.75606 8.43751H0.5625C0.251859 8.43751 0 8.68936 0 9.00001C0 9.31068 0.251859 9.56251 0.5625 9.56251H3.75634C4.01498 10.7368 5.06559 11.6194 6.31466 11.6194C7.56439 11.6194 8.61455 10.7369 8.87305 9.56251H17.4375C17.7481 9.56251 18 9.31068 18 9.00001C18 8.68936 17.7481 8.43751 17.4375 8.43751ZM7.80901 8.99853L7.80898 9.00458C7.80652 9.82607 7.13619 10.4944 6.31466 10.4944C5.49429 10.4944 4.82393 9.82699 4.82038 9.00591L4.82027 8.99769C4.8215 8.17468 5.49141 7.50562 6.31466 7.50562C7.13753 7.50562 7.80718 8.17408 7.80905 8.99653L7.80901 8.99853Z" />
                      </g>
                    </svg>
                  </div>
                  <span>Filters</span>
                </div>
                <div className="selector">
                  <select>
                    <option>Default Sorting</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>
                </div>
                <ul className="grid-view">
                  <li className="column-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={20}
                      viewBox="0 0 12 20"
                    >
                      <g>
                        <rect width="4.88136" height="5.10638" rx="2.44068" />
                        <rect
                          y="7.44678"
                          width="4.88136"
                          height="5.10638"
                          rx="2.44068"
                        />
                        <rect
                          y="14.8937"
                          width="4.88136"
                          height="5.10638"
                          rx="2.44068"
                        />
                        <rect
                          x="7.11865"
                          width="4.88136"
                          height="5.10638"
                          rx="2.44068"
                        />
                        <rect
                          x="7.11865"
                          y="7.44678"
                          width="4.88136"
                          height="5.10638"
                          rx="2.44068"
                        />
                        <rect
                          x="7.11865"
                          y="14.8937"
                          width="4.88136"
                          height="5.10638"
                          rx="2.44068"
                        />
                      </g>
                    </svg>
                  </li>
                  <li className="column-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                    >
                      <g clipPath="url(#clip0_1610_1442)">
                        <rect width="5.10638" height="5.10638" rx="2.55319" />
                        <rect
                          y="7.44678"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          y="14.8937"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="7.44678"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="7.44678"
                          y="7.44678"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="7.44678"
                          y="14.8937"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="14.8936"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="14.8936"
                          y="7.44678"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                        <rect
                          x="14.8936"
                          y="14.8937"
                          width="5.10638"
                          height="5.10638"
                          rx="2.55319"
                        />
                      </g>
                    </svg>
                  </li>
                  <li className="column-4 active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                    >
                      <g clipPath="url(#clip0_1610_1453)">
                        <rect width="3.64741" height="3.64741" rx="1.8237" />
                        <rect
                          y="8.17627"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          y={16}
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="5.31909"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="5.31909"
                          y="8.17627"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="5.31909"
                          y={16}
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="10.6382"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="16.3525"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="10.6384"
                          y="8.17627"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="16.3525"
                          y="8.17627"
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="10.6382"
                          y={16}
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                        <rect
                          x="16.3525"
                          y={16}
                          width="3.64741"
                          height="3.64741"
                          rx="1.8237"
                        />
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="all-products list-grid-product-wrap">
              <div className="row gy-4 mb-80">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="col-lg-3 col-md-4 col-sm-6 item"
                  >
                    <div className="product-card style-3 hover-btn">
                      <div className="product-card-img double-img">
                        <a href="shop-list.html">
                          <img src={product.image} alt="" className="img1" />
                          <img
                            src="assets/img/home1/product-img-7.png"
                            alt=""
                            className="img2"
                          />

                          <div className="batch">
                            <span>-15%</span>
                          </div>
                        </a>
                        <div className="overlay">
                          <div className="cart-area">
                            <Link
                              onClick={() => handleAddToCart(product)}
                              className="hover-btn3 add-cart-btn"
                            >
                              <i className="bi bi-bag-check" /> Add To Cart
                            </Link>
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
                                data-bs-target={`#product-view-${product.id}`}
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
                          <a href="shop-list.html">Radiant Vibe</a>
                        </p>
                        <p className="price">
                          {product.price} <del>$200.00</del>
                        </p>
                      </div>
                      <span className="for-border" />
                    </div>
                  </div>
                ))}
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="modal product-view-modal"
                    id={`product-view-${product.id}`}
                  >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div
                            className="close-btn"
                            data-bs-dismiss="modal"
                          ></div>
                          <div className="shop-details-top-section">
                            <div className="row gy-4">
                              <div className="col-lg-6">
                                <div className="shop-details-img">
                                  <div
                                    className="tab-content"
                                    id="view-tabContent"
                                  >
                                    <div
                                      className="tab-pane fade show active"
                                      id="view-pills-img1"
                                      role="tabpanel"
                                    >
                                      <div className="shop-details-tab-img">
                                        <img src={product.image} alt="" />
                                      </div>
                                    </div>
                                    <div
                                      className="tab-pane fade"
                                      id="view-pills-img2"
                                      role="tabpanel"
                                    >
                                      <div className="shop-details-tab-img">
                                        <img src={product.image} alt="" />
                                      </div>
                                    </div>
                                    <div
                                      className="tab-pane fade"
                                      id="view-pills-img3"
                                      role="tabpanel"
                                    >
                                      <div className="shop-details-tab-img">
                                        <img src={product.image} alt="" />
                                      </div>
                                    </div>
                                    <div
                                      className="tab-pane fade"
                                      id="view-pills-img4"
                                      role="tabpanel"
                                    >
                                      <div className="shop-details-tab-img">
                                        <img src={product.image} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="nav nav-pills"
                                    id="view-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="shop-details-content">
                                  <h1>{product.title}</h1>

                                  <div className="price-area">
                                    <p className="price">
                                      {product.price} <del>$200.00</del>
                                    </p>
                                  </div>
                                  <div className="quantity-color-area">
                                    <div className="quantity-color">
                                      <h6 className="widget-title">Quantity</h6>
                                      <div className="quantity-counter">
                                        <a
                                          href={() => false}
                                          className="quantity__minus"
                                          onClick={() =>
                                            decrementQuantity(product.id)
                                          }
                                        >
                                          <i className="bx bx-minus" />
                                        </a>
                                        <input
                                          name="quantity"
                                          type="text"
                                          className="quantity__input"
                                          value={quantities[product.id] || 1}
                                          readOnly
                                        />
                                        <a
                                          href={() => false}
                                          className="quantity__plus"
                                          onClick={() =>
                                            incrementQuantity(product.id)
                                          }
                                        >
                                          <i className="bx bx-plus" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="quantity-color">
                                      <h6 className="widget-title">Color</h6>
                                      <ul className="color-list">
                                        <li className="select-wrap selected">
                                          <span />
                                        </li>
                                        <li className="select-wrap">
                                          <span />
                                        </li>
                                        <li className="select-wrap">
                                          <span />
                                        </li>
                                        <li className="select-wrap">
                                          <span />
                                        </li>
                                        <li className="select-wrap">
                                          <span />
                                        </li>
                                        <li className="select-wrap">
                                          <span />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="shop-details-btn">
                                    <Link
                                      to="/checkout"
                                      className="primary-btn1 hover-btn3"
                                    >
                                      *Buy Now*
                                    </Link>
                                    <a
                                      href={() => false}
                                      className="primary-btn1 style-3 hover-btn4"
                                      onClick={() => handleAddToCart(product)}
                                    >
                                      *Add to Cart*
                                    </a>
                                  </div>
                                  <div className="product-info">
                                    <ul className="product-info-list">
                                      <li>
                                        {" "}
                                        <span>SKU:</span> 9852410
                                      </li>
                                      <li>
                                        {" "}
                                        <span>Brand:</span>{" "}
                                        <a href="shop-4-columns.html">
                                          {product.filter[0]}
                                        </a>
                                      </li>
                                      <li>
                                        {" "}
                                        <span>Category:</span>{" "}
                                        <a href="shop-slider.html">
                                          {product.categoryid}
                                        </a>
                                        ,{" "}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopList;
