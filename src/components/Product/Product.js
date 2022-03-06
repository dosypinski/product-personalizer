import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = ({title, basePrice, colors, sizes, name }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Summary')
    console.log('=====================')
    console.log('Name: ' + title)
    console.log('Price: ' + getPrice())
    console.log('Size: ' + currentSize)
    console.log('Color: ' + currentColor)
  }

  const getPrice = () => {
    const clickedSize = sizes.find(element => element.name === currentSize)
    return basePrice + clickedSize.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} colors={colors} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} currentSize={currentSize} />
      </div>
    </article>
    
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;