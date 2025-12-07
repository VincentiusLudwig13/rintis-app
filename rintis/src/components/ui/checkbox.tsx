'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { lightPalette } from '@/core/theme/styleGuide/color';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const isChecked = props.checked === true;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border transition-all',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      style={{
        borderColor: lightPalette.primary.main,
        backgroundColor: isChecked
          ? lightPalette.primary.main
          : lightPalette.background.default,
      }}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('grid place-content-center text-current')}
        style={{ color: lightPalette.text.inverse }}
      >
        <Check className="h-4 w-4 font-bold" strokeWidth={4} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
