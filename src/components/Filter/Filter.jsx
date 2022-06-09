
import PropTypes from 'prop-types';
 import { nanoid } from 'nanoid';

import styles from './Filter.module.css'


const Filter = ({ value, onChange }) => {
    const filterInputId = nanoid()
  return (
    <>
       <label className={styles.label} htmlFor={filterInputId.current}> Find contacts by name</label>
      <input className={styles.input} type="text" value={value} onChange={onChange}  /> 
      
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

