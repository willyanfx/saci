// Path: src/buttons/index.tsx
import React from 'react';
import { styled } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  appearance?: 'secondary' | 'primary';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, appearance, size, isFullWidth, ...props }: ButtonProps, ref) => {
  return (
    <StyledButton
      ref={ref}
      size={size}
      isFullWidth={isFullWidth}
      appearance={appearance}
      type="StyledButton"
      {...props}
    >
      {children}
    </StyledButton>
  );
});

export const StyledButton: ButtonProps = styled('button', {
  variants: {
    appearance: {
      primary: { background: 'gainsboro' },
      secondary: { background: 'blue' }
    },
    size: {
      small: { padding: '10px 15px' },
      medium: { padding: '10px 15px' },
      large: { padding: '10px 15px' }
    },
    isFullWidth: {
      true: { width: '100%' }
    }
  },
  borderRadius: '9999px',
  fontSize: '13px',

  '&:hover': {
    backgroundColor: 'lightgray'
  }
});

type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>;

Button.defaultProps = {
  appearance: 'primary',
  size: 'medium',
  isFullWidth: false
} as ButtonProps;

Button.displayName = 'Button';

export { Button };
