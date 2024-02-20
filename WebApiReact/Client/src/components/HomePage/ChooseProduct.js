import React, { useEffect } from 'react'
import { fetchCategories } from '../../Slices/categorySlice';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function ChooseProduct() {
  const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <div className="choose-product-section mb-110">
        <div className="container">
          <div className="section-title text-center">
            <h3>Choose What You Want</h3>
          </div>
          <div className="row gy-4 justify-content-center">
            {categories.map((category) => (
              <div key={category.id} className="col-lg-4 col-md-6">
                <div className="choose-product-card hover-img style-2">
                  <Link to={`/shoplist/${category.id}`}>
                    <img src={category.image} alt={`${category.title} image`} />
                  </Link>

                  <div className="choose-product-card-content">
                    <h2 className="first-text">{category.title}</h2>
                    <h2 className="second-text">{category.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseProduct