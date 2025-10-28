'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haast-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-haast-primary hover:bg-haast-primary-dark text-white hover:scale-105 hover:shadow-haast-glow',
        secondary: 'border-2 border-haast-primary text-haast-primary hover:bg-haast-primary hover:text-white',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-haast-black-graphite hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300',
        'outline-dark': 'border-2 border-haast-black-graphite bg-haast-black-graphite text-white hover:bg-white hover:text-haast-black-graphite hover:scale-105 hover:shadow-lg hover:shadow-haast-black-graphite/30 transition-all duration-300',
        'conversion-green': 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-600/40 transition-all duration-300',
        ghost: 'text-white hover:bg-haast-gray-dark hover:text-haast-primary',
        destructive: 'bg-haast-red-alert text-white hover:bg-red-600',
      },
      size: {
        default: 'h-12 px-8 py-4',
        sm: 'h-10 px-6 py-2',
        lg: 'h-14 px-10 py-4 text-lg',
        xl: 'h-16 px-12 py-4 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
