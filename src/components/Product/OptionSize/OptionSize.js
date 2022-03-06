import styles from './../Product.module.scss'
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {
    return (
        <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
        </ul>
      </div>
    )
};

OptionSize.propTypes ={
    sizes: PropTypes.array.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
};

export default OptionSize;