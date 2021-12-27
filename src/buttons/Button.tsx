// Path: src/buttons/index.tsx
import React from 'react';
import { styled } from '@stitches/react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, variant, size, isFullWidth, ...props }: ButtonProps, ref) => {
  return (
    <UIButton
      ref={ref}
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      type="button"
      {...props}
    >
      {children}
    </UIButton>
  );
});

const UIButton = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray'
  }
});

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  isFullWidth: false
} as ButtonProps;

Button.displayName = 'Button';

export { Button };
