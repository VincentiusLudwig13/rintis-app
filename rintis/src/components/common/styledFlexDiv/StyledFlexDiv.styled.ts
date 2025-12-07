// Styled Component
import styled from 'styled-components';
import { parseGapValue } from '@/common/utils/styled';
import { StyledFlexDivProps } from '@/components/common/styledFlexDiv/StyledFlexDiv.type';

const StyledFlexDiv = styled.div<StyledFlexDivProps>`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  flex-wrap: ${({ $wrap = 'nowrap' }) => $wrap};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  align-items: ${({ $align = 'stretch' }) => $align};
  align-content: ${({ $alignContent }) => $alignContent};

  /* Gap handling */
  gap: ${({ $gap }) => parseGapValue($gap)};
  ${({ $rowGap }) => $rowGap && `row-gap: ${parseGapValue($rowGap)};`}
  ${({ $columnGap }) =>
    $columnGap && `column-gap: ${parseGapValue($columnGap)};`}

    /* Size */
  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $height }) => $height && `height: ${$height};`}
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth};`}
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}
  ${({ $maxHeight }) => $maxHeight && `max-height: ${$maxHeight};`}
  ${({ $minHeight }) => $minHeight && `min-height: ${$minHeight};`}

    /* Margin & Padding */
  ${({ $margin }) => $margin && `margin: ${$margin};`}
  ${({ $padding }) => $padding && `padding: ${$padding};`}

    /* Individual Margins */
  ${({ $marginTop }) => $marginTop && `margin-top: ${$marginTop};`}
  ${({ $marginRight }) => $marginRight && `margin-right: ${$marginRight};`}
  ${({ $marginBottom }) => $marginBottom && `margin-bottom: ${$marginBottom};`}
  ${({ $marginLeft }) => $marginLeft && `margin-left: ${$marginLeft};`}

    /* Individual Paddings */
  ${({ $paddingTop }) => $paddingTop && `padding-top: ${$paddingTop};`}
  ${({ $paddingRight }) => $paddingRight && `padding-right: ${$paddingRight};`}
  ${({ $paddingBottom }) =>
    $paddingBottom && `padding-bottom: ${$paddingBottom};`}
  ${({ $paddingLeft }) => $paddingLeft && `padding-left: ${$paddingLeft};`}

    /* Flex Children Properties */
  ${({ $basis }) => $basis && `flex-basis: ${$basis};`}
  ${({ $grow }) => $grow !== undefined && `flex-grow: ${$grow};`}
  ${({ $shrink }) => $shrink !== undefined && `flex-shrink: ${$shrink};`}

    /* Positioning */
  ${({ $position }) => $position && `position: ${$position};`}
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $zIndex }) => $zIndex !== undefined && `z-index: ${$zIndex};`}

    /* Background & Border */
  ${({ $background }) => $background && `background: ${$background};`}
  ${({ $backgroundColor }) =>
    $backgroundColor && `background-color: ${$backgroundColor};`}
  ${({ $borderRadius }) => $borderRadius && `border-radius: ${$borderRadius};`}
  ${({ $border }) => $border && `border: ${$border};`}

    /* Individual Borders */
  ${({ $borderTop }) => $borderTop && `border-top: ${$borderTop};`}
  ${({ $borderRight }) => $borderRight && `border-right: ${$borderRight};`}
  ${({ $borderBottom }) => $borderBottom && `border-bottom: ${$borderBottom};`}
  ${({ $borderLeft }) => $borderLeft && `border-left: ${$borderLeft};`}

    /* Shadow */
  ${({ $boxShadow }) => $boxShadow && `box-shadow: ${$boxShadow};`}

    /* Overflow */
  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
  ${({ $overflowX }) => $overflowX && `overflow-x: ${$overflowX};`}
  ${({ $overflowY }) => $overflowY && `overflow-y: ${$overflowY};`}

    /* Cursor */
  ${({ $cursor }) => $cursor && `cursor: ${$cursor};`}

    /* Additional Custom CSS */
  ${({ $customCss }) => $customCss && $customCss}
`;

export default StyledFlexDiv;
