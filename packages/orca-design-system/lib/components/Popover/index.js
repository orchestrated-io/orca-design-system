import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Container = styled.div`
  display: block !important;
  position: relative;
  &:hover {
    > div {
      opacity: 1;
      z-index: 100;
      visibility: visible;
    }
  }
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
  left: 100%;
  top: 50%;
  color: ${theme.greyDarkest};
  outline: 0;
  padding: 8px 10px;
  border-radius: 2px;
  transform: translateX(10px) translateY(-50%);
  transition: ${variables.defaultTransition};
  box-shadow: -3px 0px 12px 0 ${theme.greyDarkest.fade(0.85)};
  width: ${props => (props.width ? props.width + "px" : "200px")};
  background: ${theme.white};
  transition: all 300ms ease-in-out;
  opacity: 0;
  z-index: -100;
  visibility: hidden;

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent;
    border-right-color: ${theme.white};
    left: -6px;
    top: 50%;
    margin-top: -6px;
    position: absolute;
  }

  &:after {
    content: "";
    left: -34px;
    display: block;
    height: 100%;
    top: 0;
    position: absolute;
    width: 100%;
  }

  ${({ direction }) =>
    direction === "top"
      ? css`
          left: 50%;
          top: auto;
          bottom: 100%;
          transform: translateX(-50%) translateY(-10px);
          box-shadow: 0 4px 14px 0 ${theme.greyDarkest.fade(0.85)};
          &:before {
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -9px;
            margin-left: -3px;
            transform: rotate(-90deg);
          }
          &:after {
            left: 0;
            height: calc(100% + 15px);
          }
        `
      : direction === "right"
      ? css`
          /* No changes as same as default */
        `
      : direction === "bottom"
      ? css`
          left: 50%;
          top: 100%;
          transform: translateX(-50%) translateY(10px);
          box-shadow: 0 -3px 12px 0 ${theme.greyDarkest.fade(0.85)};
          &:before {
            left: 50%;
            top: -9px;
            margin-top: 0;
            margin-left: -3px;
            transform: rotate(90deg);
          }
          &:after {
            left: 0;
            top: auto;
            bottom: 0;
            height: calc(100% + 15px);
          }
        `
      : direction === "left"
      ? css`
          left: auto;
          right: 100%;
          transform: translateX(-10px) translateY(-50%);
          box-shadow: 3px 0 12px 0 ${theme.greyDarkest.fade(0.85)};
          &:before {
            left: auto;
            right: -6px;
            transform: rotate(180deg);
          }
          &:after {
            left: auto;
            right: -34px;
          }
        `
      : css``};
`;

class Popover extends React.Component {
  render() {
    const {
      children,
      direction,
      width,
      text
    } = this.props;
    return (
      <Container>
        <Text direction={direction} width={width}>
          {text}
        </Text>
        {children}
      </Container>
    );
  }
}

Popover.propTypes = {
  /** Specifies the direction of the popover */
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Specifies the width of the popover in pixels */
  width: PropTypes.string
};

/** @component */
export default Popover;
