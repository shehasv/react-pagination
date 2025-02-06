import './Product.css';

const Product = ({ title, image }) => {
  return (
    <div className="item">
      <img className="item__image" src={image} alt={title} />
      <h5 className="item__title">{title}</h5>
    </div>
  );
};

export default Product;
