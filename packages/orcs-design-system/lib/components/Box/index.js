import React from "react";
import styled from "styled-components";
import { space, layout, color, border, variant } from "styled-system";
import PropTypes from "prop-types";

const BoxWrapper = styled.div`
${space}
${layout}
${color}
${border}
  box-sizing: border-box;
  ${variant({
    variants: {
      borderbox: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "greyLighter"
      },
      shadowbox: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)"
      },
      bordershadowbox: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "greyLighter",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)"
      }
    }
  })}
  `;

export default function Box({ children, ...props }) {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
}

Box.propTypes = {
  /** Children of `Box` are taken as node elements */
  children: PropTypes.node,
  /** Sets `Box` display mode */
  display: PropTypes.oneOf([
    "inline",
    "block",
    "contents",
    "inline-block",
    "none",
    "initial",
    "inherit"
  ]),
  /** Sets behaviour of elements in `Box` that are larger than their container. */
  overflow: PropTypes.oneOf(["visible", "hidden", "scroll", "auto"]),
  /** Sets the border in one declaration: `border-width` `border-style` `border-color` */
  border: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Sets the background colour of the box. */
  bg: PropTypes.oneOf(["white", "greyLightest", "greyDark"]),
  /** Sets the width of the box. */
  width: PropTypes.string
};

Box.defaultProps = {
  width: "100%",
  display: "block",
  overflow: "visible",
  border: "none",
  m: 0,
  p: 4,
  bg: "transparent"
};
