import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from "../Slices/categorySlice";
import { selectCartTotal } from '../Slices/cartSlice';
import { loginUser } from "../Slices/userSlice";
import { setProducts } from '../Slices/productSlice';

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products.value);
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => selectCartTotal(state));
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogOut = () => {
    localStorage.clear()
    alert("Çıkış Yapıldı.")
  }

  const handleLogin = async () => {


    await dispatch(loginUser({ username, password })); // Login işlemini tetikle

    if (localStorage.getItem("token")) {
      navigate("/"); // Eğer user varsa, anasayfaya yönlendir
    }
  };

  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const [isCategoryMenuVisible, setCategoryMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCartMenu = () => {
    setCartMenuVisible(!isCartMenuVisible);
  };
  const toggleCategoryMenu = () => {
    setCategoryMenuVisible(!isCategoryMenuVisible);
  };

  useEffect(() => {
    dispatch(fetchCategories());
    // dispatch(setProducts());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(setProducts(categoryId));
    setSelectedCategory(categoryId);
    window.location.href = `/shoplist/${categoryId}`;

  };
  const handleMouseEnter = (categoryId) => {
    setSelectedCategory(categoryId);

  };

  const handleMouseLeave = () => {
    setSelectedCategory(null);
  };
  return (
    <>
      {userState.user && <p>Hoş Geldiniz, {userState.user.name}!</p>}
      <div>
        <div
          className="modal login-modal fade"
          id="user-login"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Log In
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Registration
                    </button>
                  </li>
                </ul>
              </div>
              <div className="modal-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="login-registration-form">
                      <div className="form-title">
                        <h3>Log In</h3>
                      </div>
                      <div>
                        <div className="form-inner mb-35">
                          <input
                            type="text"
                            placeholder="User name or Email *"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="form-inner">
                          <input
                            id="password"
                            type="password"
                            placeholder="Password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className="bi bi-eye-slash" id="togglePassword" />
                        </div>
                        <div className="form-remember-forget">
                          <div className="remember">
                            <input
                              type="checkbox"
                              className="custom-check-box"
                              id="check1"
                            />
                            {localStorage.getItem("token") && <span style={{ color: "green" }}>Giriş başarılı. Sayfaya Devam edebilirsiniz</span>

                            }
                          </div>
                          <a
                            href={() => false}
                            className="forget-pass hover-underline"
                          >
                            Forget Password
                          </a>
                        </div>
                        <button
                          onClick={handleLogin}
                          className="primary-btn1 hover-btn3"
                        >
                          Log In
                        </button>
                        <a href={() => false} className="member">
                          Not a member yet?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="login-registration-form">
                      <div className="form-title">
                        <h3>Registration</h3>
                      </div>
                      <form>
                        <div className="form-inner mb-25">
                          <input type="text" placeholder="User Name *" />
                        </div>
                        <div className="form-inner mb-25">
                          <input type="email" placeholder="Email Here *" />
                        </div>
                        <div className="form-inner mb-25">
                          <input
                            id="password2"
                            type="password"
                            placeholder="Password *"
                          />
                          <i className="bi bi-eye-slash" id="togglePassword2" />
                        </div>
                        <div className="form-inner mb-35">
                          <input
                            id="password3"
                            type="password"
                            placeholder="Confirm Password *"
                          />
                          <i className="bi bi-eye-slash" id="togglePassword3" />
                        </div>
                        <a
                          href={() => false}
                          className="primary-btn1 hover-btn3"
                        >
                          Registration
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header-area">
          <div className="container-xxl container-fluid position-relative  d-flex flex-nowrap align-items-center justify-content-between">
            <div className="category-dropdown">
              <div className="category-button" onClick={toggleCategoryMenu}>
                <img src="assets/img/home1/icon/category-icon.svg" alt="" />
                <span>Category</span>
              </div>
              <div
                className={`category-menu ${isCategoryMenuVisible ? "active" : ""
                  }`}
              >
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/category/${category.id}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="main-menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a onClick={LogOut}>Logout</a>

                </li>
                <li className="menu-item">
                  <Link to="/">Home</Link>
                  <i className="bi bi-plus dropdown-icon" />
                </li>
                <li className="menu-item">
                  <Link to="/cart">Cart</Link>
                  <i className="bi bi-plus dropdown-icon" />
                </li>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                    className="menu-item-has-children position-inherit"
                  >
                    <Link
                      to={`/shoplist`}
                      className="dropdown"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.title}
                    </Link>
                    <i className="bi bi-plus dropdown-icon" />
                    {selectedCategory === category.id && (
                      <div
                        className="mega-menu2"
                        style={{
                          backgroundImage:
                            'url("assets/img/home1/megamenu2-face-bg.png")',
                        }}
                      >
                        <div className="megamenu-wrap">
                          <ul className="menu-row">
                            {products
                              .filter(
                                (product) => product.categoryid === category.id
                              )
                              .map((product) => (
                                <li
                                  className="menu-single-item"
                                  key={product.id}
                                >
                                  <Link to="/shoplist">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={8}
                                      viewBox="0 0 16 8"
                                    >
                                      <path d="M11.346 4.44443L0.217529 4.42657C0.159577 4.42657 0.104 4.38069 0.0630221 4.29902C0.0220445 4.21734 -0.000976562 4.10656 -0.000976562 3.99106C-0.000976562 3.87555 0.0220445 3.76478 0.0630221 3.6831C0.104 3.60143 0.159577 3.55554 0.217529 3.55554L11.3462 3.5734C11.4042 3.5734 11.4597 3.61928 11.5007 3.70096C11.5417 3.78263 11.5647 3.89341 11.5647 4.00891C11.5647 4.12442 11.5417 4.2352 11.5007 4.31687C11.4597 4.39855 11.4039 4.44443 11.346 4.44443Z" />
                                      <path d="M15.9991 4.00526C13.6711 4.8883 10.7821 6.39874 8.9917 8L10.4038 4.00021L8.99703 0C10.7858 1.60336 13.6723 3.11716 15.9991 4.00526Z" />
                                    </svg>
                                    {product.title}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                          <div className="all-product">
                            <a
                              className="hover-underline "
                              href="shop-list.html"
                            >
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
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-right d-flex jsutify-content-end align-items-center">
              <div className="dropdown">
                <button
                  type="button"
                  className="modal-btn header-cart-btn"
                  onClick={toggleCartMenu}
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.0139 18H3.98532C1.86389 18 0.128174 16.2643 0.128174 14.1429V14.0143L0.513888 3.72857C0.578174 1.60714 2.31389 0 4.37103 0H13.6282C15.6853 0 17.421 1.60714 17.4853 3.72857L17.871 14.0143C17.9353 15.0429 17.5496 16.0071 16.8425 16.7786C16.1353 17.55 15.171 18 14.1425 18H14.0139ZM4.37103 1.28571C2.95675 1.28571 1.86389 2.37857 1.7996 3.72857L1.41389 14.1429C1.41389 15.5571 2.57103 16.7143 3.98532 16.7143H14.1425C14.8496 16.7143 15.4925 16.3929 15.9425 15.8786C16.3925 15.3643 16.6496 14.7214 16.6496 14.0143L16.2639 3.72857C16.1996 2.31429 15.1067 1.28571 13.6925 1.28571H4.37103Z" />
                    <path d="M8.99951 7.71427C6.49237 7.71427 4.49951 5.72141 4.49951 3.21427C4.49951 2.82855 4.75665 2.57141 5.14237 2.57141C5.52808 2.57141 5.78523 2.82855 5.78523 3.21427C5.78523 5.01427 7.19951 6.42855 8.99951 6.42855C10.7995 6.42855 12.2138 5.01427 12.2138 3.21427C12.2138 2.82855 12.4709 2.57141 12.8567 2.57141C13.2424 2.57141 13.4995 2.82855 13.4995 3.21427C13.4995 5.72141 11.5067 7.71427 8.99951 7.71427Z" />
                  </svg>
                  <span>
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </button>
                <div
                  className={`cart-menu ${isCartMenuVisible ? "active" : ""}`}
                >
                  <div className="cart-body">
                    {cartItems.map((item) => (
                      <ul>
                        <li className="single-item">
                          <div className="item-area">
                            <div className="item-img">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="content-and-quantity">
                              <div className="content">
                                <div className="price-and-btn d-flex align-items-center justify-content-between">
                                  <span>
                                    {item.price}
                                    <del>$200</del>
                                  </span>
                                  <button className="close-btn">
                                    <i className="bi bi-x" />
                                  </button>
                                </div>
                                <p>
                                  <a href={() => false}>{item.title}</a>
                                </p>
                              </div>
                              <div className="quantity-area">
                                <div className="quantity">
                                  <a
                                    className="quantity__minus"
                                    href={() => false}
                                  >
                                    <span>
                                      <i className="bi bi-dash" />
                                    </span>
                                  </a>
                                  <input
                                    name="quantity"
                                    type="text"
                                    className="quantity__input"
                                    value={item.quantity}
                                  />
                                  <a
                                    className="quantity__plus"
                                    href={() => false}
                                  >
                                    <span>
                                      <i className="bi bi-plus" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div className="cart-footer">
                    <div className="pricing-area">
                      <ul className="total">
                        <li>Total</li>
                        <li>
                          <span>{subtotal.toFixed(2)}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-button">
                      <ul>
                        <li>
                          <Link
                            to="/shoplist"
                            className="primary-btn1 hover-btn-4"
                          >
                            Continue Shopping
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/checkout"
                            className="primary-btn1 hover-btn3"
                          >
                            Product Checkout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="save-btn">
                <Link to="/wishlist">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_68_10)">
                      <path d="M16.528 2.20922C16.0674 1.71414 15.5099 1.31909 14.8902 1.04862C14.2704 0.778143 13.6017 0.638026 12.9255 0.636976C12.2487 0.637756 11.5794 0.777669 10.959 1.04803C10.3386 1.31839 9.78042 1.71341 9.31911 2.20857L9.00132 2.54439L8.68352 2.20857C6.83326 0.217182 3.71893 0.102819 1.72758 1.95309C1.63932 2.0351 1.5541 2.12032 1.47209 2.20857C-0.490696 4.32568 -0.490696 7.59756 1.47209 9.71466L8.5343 17.1622C8.77862 17.4201 9.18579 17.4312 9.44373 17.1869C9.45217 17.1789 9.46039 17.1707 9.46838 17.1622L16.528 9.71466C18.4907 7.59779 18.4907 4.32609 16.528 2.20922ZM15.5971 8.82882H15.5965L9.00132 15.7849L2.40553 8.82882C0.90608 7.21116 0.90608 4.71143 2.40553 3.09377C3.76722 1.61792 6.06755 1.52538 7.5434 2.88706C7.61505 2.95317 7.68401 3.02213 7.75012 3.09377L8.5343 3.92107C8.79272 4.17784 9.20995 4.17784 9.46838 3.92107L10.2526 3.09441C11.6142 1.61856 13.9146 1.52602 15.3904 2.8877C15.4621 2.95381 15.531 3.02277 15.5971 3.09441C17.1096 4.71464 17.1207 7.21893 15.5971 8.82882Z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="user-login">
                <button
                  type="button"
                  className="user-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#user-login"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_122_313)">
                      <path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="sidebar-button mobile-menu-btn ">
                <span />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header