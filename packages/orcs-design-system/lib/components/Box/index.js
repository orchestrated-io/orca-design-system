import React from "react";
import styled from "styled-components";
import { space, layout, color, border, variant, compose } from "styled-system";
import { css } from "@styled-system/css";
import PropTypes from "prop-types";
import systemtheme from "../../systemtheme";

const boxStyles = compose(space, layout, color, border);

const BoxWrapper = styled("div")(
  css({
    width: "auto",
    display: "block",
    overflow: "visible"
  }),
  variant({
    prop: "shadow",
    variants: {
      default: {
        boxShadow: "boxDefault"
      }
    }
  }),
  variant({
    prop: "boxBorder",
    variants: {
      default: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "greyLighter"
      }
    }
  }),
  boxStyles
);

export default function Box({ children, ...props }) {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
}

Box.propTypes = {
  /** Children of `Box` are taken as node elements */
  children: PropTypes.node,
  /** Sets `Box` display mode. Default is `block`. */
  display: PropTypes.oneOf([
    "inline",
    "block",
    "contents",
    "inline-block",
    "none",
    "initial",
    "inherit"
  ]),
  /** Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`. */
  overflow: PropTypes.oneOf(["visible", "hidden", "scroll", "auto"]),
  /** Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Sets the background colour of the box. */
  bg: PropTypes.string,
  /** Sets the width of the box. */
  width: PropTypes.string,
  /** Sets the height of the box. Default is `auto`. */
  height: PropTypes.string,
  /** Specifies the colour theme. Default is `systemtheme`. */
  theme: PropTypes.object
};

Box.defaultProps = {
  bg: "transparent",
  theme: systemtheme
};
