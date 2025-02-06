import { useEffect, useState } from 'react';
import Product from './Product';
import './ProductList.css';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [packetSize, setPacketSize] = useState(10);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await fetch('https://dummyjson.com/products?limit=0');
    let result = await data.json();
    setProducts(result.products);
  };

  const updatePacketSize = (value) => {
    setPacketSize(value);
  };

  const updatePage = (number: any) => {
    setCurrentPage(number);
  };

  const totalPages = Math.ceil(products?.length / packetSize);
  const start = currentPage * packetSize;
  const end = start + packetSize;

  return (
    <div>
      {products?.length > 0 ? (
        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            updatePage={updatePage}
            packetSize={packetSize}
            updatePacketSize={updatePacketSize}
          />
          <div className="product-list">
            {products.slice(start, end).map((item: any) => (
              <Product
                key={item.id}
                title={item.title}
                image={item.thumbnail}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>No Products Available</div>
      )}
    </div>
  );
};

export default ProductList;
