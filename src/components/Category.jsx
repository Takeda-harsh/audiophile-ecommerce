/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import '../styles/category.css';

const Category = ({ CategoryName, imageSrc, categoryClass, topPosition }) => {
  return (
    <div className={`item-category ${categoryClass}`} >
      <img src={imageSrc} alt={`Category: ${CategoryName}`} style={{ top: `${topPosition}px` }} />
      <div>
        <h5>{CategoryName}</h5>
        <p>
          SHOP <span><IoIosArrowForward /></span>
        </p>
      </div>
    </div>
  );
};

export default Category;
