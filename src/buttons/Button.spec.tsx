import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
  it('applies specific type of provided', () => {});
  it('applies valid attribute to element', () => {});
});
