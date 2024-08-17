import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise and
          culinary expertise. Our mission is to staisfy your cravings and
          elevate your dining experiences, one delicious meal at a time.
        </p>
        <button>
          <span>View Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
