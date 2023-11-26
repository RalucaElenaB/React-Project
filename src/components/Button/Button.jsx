import { css } from '@emotion/react';
import propTypes from 'prop-types';

const Button = ({ label }) => {
  const color = 'white';

  const style = css`
    padding: 12px;
    background-color: #ff6b0a;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      color: ${color};
    }
  `;

  return <button css={style}>{label}</button>;
};

Button.propTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
