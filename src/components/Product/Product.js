import styles from './Product.module.scss';
import Button from '../Button/Button'; 
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import OptionColor from './OptionColor/OptionColor';
import shortid from 'shortid';
import clsx from 'clsx';

const Product = ({title, basePrice, colors, sizes, name }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const clickedSize = sizes.find(element => element.name === currentSize)
    return basePrice + clickedSize.additionalPrice;
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Summary')
    console.log('=====================')
    console.log('Name: ' + title)
    console.log('Price: ' + getPrice())
    console.log('Size: ' + currentSize)
    console.log('Color: ' + currentColor)
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <OptionColor colors={colors} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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