import * as React from 'react';

/** @jsxImportSource @emotion/react */
import { buttonDefaultStyle } from './styles';
import { ButtonSizes, ButtonVariants } from './theme';

export const Button = ({ variant, size, children, ...rest }) => {
  return (
    <button
      css={[buttonDefaultStyle, ButtonVariants[variant], ButtonSizes[size]]}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'default',
  size: 'sm',
};
