import Styles from './buttons.module.css';

export const primaryBtn = ({customClass="", innerText="Pass the innerText prop", btnType='button' }) => {
  return <button type={btnType} className={customClass} >{innerText}</button>
}


StatusBadge.propTypes = {
    btnType: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired
};