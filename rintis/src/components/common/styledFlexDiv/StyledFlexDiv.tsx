// components/StyledFlex.tsx
import React from 'react';
import { StyledFlexProps } from '@/components/common/styledFlexDiv/StyledFlexDiv.type';
import StyledFlexDiv from '@/components/common/styledFlexDiv/StyledFlexDiv.styled';

// Main Component
export const StyledFlex: React.FC<StyledFlexProps> = ({
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,

  // Layout props
  direction,
  wrap,
  justify,
  align,
  alignContent,

  // Spacing props
  gap,
  rowGap,
  columnGap,

  // Size props
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,

  // Margin & padding
  margin,
  padding,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  // Flex props
  basis,
  grow,
  shrink,

  // Positioning
  position,
  top,
  right,
  bottom,
  left,
  zIndex,

  // Styling
  background,
  backgroundColor,
  borderRadius,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  boxShadow,

  // Overflow
  overflow,
  overflowX,
  overflowY,

  // Cursor
  cursor,

  // Custom CSS
  customCss,
}) => {
  return (
    <StyledFlexDiv
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // Transient props (dengan prefix $)
      $direction={direction}
      $wrap={wrap}
      $justify={justify}
      $align={align}
      $alignContent={alignContent}
      $gap={gap}
      $rowGap={rowGap}
      $columnGap={columnGap}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $maxHeight={maxHeight}
      $minHeight={minHeight}
      $margin={margin}
      $padding={padding}
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $basis={basis}
      $grow={grow}
      $shrink={shrink}
      $position={position}
      $top={top}
      $right={right}
      $bottom={bottom}
      $left={left}
      $zIndex={zIndex}
      $background={background}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $border={border}
      $borderTop={borderTop}
      $borderRight={borderRight}
      $borderBottom={borderBottom}
      $borderLeft={borderLeft}
      $boxShadow={boxShadow}
      $overflow={overflow}
      $overflowX={overflowX}
      $overflowY={overflowY}
      $cursor={cursor}
      $customCss={customCss}
    >
      {children}
    </StyledFlexDiv>
  );
};
