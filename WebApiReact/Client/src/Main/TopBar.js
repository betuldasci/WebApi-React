import React from 'react'

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3">
              <div className="top-bar-left">
                <p>
                  *New Winter Product 2023{" "}
                  <a href="shop-list.html">Shop Now*</a>
                </p>
              </div>
              <div className="company-logo">
                <a href="index.html">
                  <img src="assets/img/logo.svg" alt="" />
                </a>
              </div>
              <div className="search-area">
                <form>
                  <div className="form-inner">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <i className="bx bx-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar