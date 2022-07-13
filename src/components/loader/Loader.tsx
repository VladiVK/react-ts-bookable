import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoaderWrapper } from './style';

type LoaderProps = {
  size: 'small' | 'medium' | 'large';
};

const spinnerSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const Loader = ({ size }: LoaderProps) => {
  return (
    <LoaderWrapper>
      <span className='spinner'>
        <FaSpinner className={`spinner__icon ${spinnerSize[size]}`} />
      </span>
    </LoaderWrapper>
  );
};

export default Loader;
