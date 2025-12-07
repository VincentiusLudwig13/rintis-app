import React, { CSSProperties, ElementType, ReactNode } from 'react';
import {
  typographyConfig,
  TypographyVariant,
  TypographyWeight,
} from '@/core/theme/styleGuide/typographyConfig';

type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  italic?: boolean;
  color?: string;
  align?: TypographyAlign;
  children: ReactNode;
  className?: string;
  component?: ElementType;
  style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyMedium',
  weight = 'regular',
  italic = false,
  color = '#262626',
  align = 'left',
  children,
  className = '',
  component,
  style: customStyle,
  ...props
}) => {
  const config = typographyConfig[variant];

  if (!config) {
    console.warn(`Typography variant "${variant}" not found`);
    return null;
  }

  // Determine HTML element based on variant
  const getComponent = (): ElementType => {
    if (component) return component;

    if (variant.startsWith('h')) return variant as ElementType;
    if (variant.startsWith('body')) return 'p';
    if (variant === 'caption' || variant === 'pixie') return 'span';
    return 'p';
  };

  const Component = getComponent();

  // Get font weight with proper type checking
  const fontWeight = (() => {
    if (weight === 'bold' && 'bold' in config.weight) {
      return config.weight.bold;
    }
    if (weight === 'regular' && 'regular' in config.weight) {
      return config.weight.regular;
    }
    // Default fallback: use bold if available, otherwise 400
    return 'bold' in config.weight ? config.weight.bold : 400;
  })();

  const style: CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: `${config.size}px`,
    lineHeight: `${config.height}px`,
    fontWeight: fontWeight,
    fontStyle: italic ? 'italic' : 'normal',
    color: color,
    textAlign: align,
    margin: 0,
    letterSpacing: '0%',
    ...customStyle,
  };

  return (
    <Component style={style} className={className} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
