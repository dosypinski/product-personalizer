import styles from './../Product.module.scss'
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import OptionColor from './../OptionColor/OptionColor';
import OptionSize from './../OptionSize/OptionSize';

const ProductForm = ({ handleSubmit, sizes, colors, setCurrentColor, setCurrentSize, currentSize }) => {

    return (
        <form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
          <OptionColor colors={colors} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
      </form>
    )
};

ProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
};

export default ProductForm;