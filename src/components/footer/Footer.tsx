import React from 'react';
import { FooterWrapper } from './style';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        bookable app <span>&copy;{new Date().getFullYear()}</span> all rights
        reserved
      </p>
    </FooterWrapper>
  );
};

export default Footer;
