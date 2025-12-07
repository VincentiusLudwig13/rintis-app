'use client';

import React from 'react';
import Logo from '@/components/Logo';

const sizes = ['big', '48', '64', '96', '128'] as const;
const variants = ['default', 'grayscale'] as const;

const LogoDisplay = () => {
  return (
    <div className="space-y-12">
      {variants.map((variant) => (
        <section key={variant}>
          <h2 className="text-xl font-bold mb-4 capitalize">
            {variant} Variant
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {sizes.map((size) => (
              <div
                key={size}
                className="flex flex-col items-center justify-between gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm"
              >
                <Logo variant={variant} size={size} />
                <p className="text-sm text-gray-700 ">{size}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LogoDisplay;
