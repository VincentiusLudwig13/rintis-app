import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Url } from 'node:url';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: Url | string;
}
