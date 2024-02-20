import React from 'react'

function BestBrand() {
  return (
    <div>
      <div className="best-brand-section mb-110">
        <div className="container-fluid">
          <div className="section-title style-2 text-center">
            <h3>Our Best Brand</h3>
          </div>
          <div className="best-brand-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper brand-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand-icon">
                        <a href="shop-list.html">
                          <img src="assets/img/home1/brand-logo1.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestBrand