// Props Interface untuk Flex Container
import { CSSProperties, ReactNode } from 'react';

export interface StyledFlexProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;

  // Layout Props
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  // Alignment Props
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'left'
    | 'right';

  align?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';

  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline';

  // Spacing Props
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;

  // Size Props
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;

  // Margin & Padding
  margin?: string;
  padding?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  // Flex Children Props
  basis?: string;
  grow?: number;
  shrink?: number;

  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;

  // Border & Background
  background?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;

  // Shadow
  boxShadow?: string;

  // Overflow
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';

  // Cursor
  cursor?: string;

  // Events
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;

  // Additional Custom CSS
  customCss?: string;
}

export interface StyledFlexDivProps {
  $direction?: StyledFlexProps['direction'];
  $wrap?: StyledFlexProps['wrap'];
  $justify?: StyledFlexProps['justify'];
  $align?: StyledFlexProps['align'];
  $alignContent?: StyledFlexProps['alignContent'];
  $gap?: number | string;
  $rowGap?: number | string;
  $columnGap?: number | string;
  $width?: string;
  $height?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $maxHeight?: string;
  $minHeight?: string;
  $margin?: string;
  $padding?: string;
  $marginTop?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $paddingTop?: string;
  $paddingRight?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
  $basis?: string;
  $grow?: number;
  $shrink?: number;
  $position?: string;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: number;
  $background?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $border?: string;
  $borderTop?: string;
  $borderRight?: string;
  $borderBottom?: string;
  $borderLeft?: string;
  $boxShadow?: string;
  $overflow?: string;
  $overflowX?: string;
  $overflowY?: string;
  $cursor?: string;
  $customCss?: string;
}
