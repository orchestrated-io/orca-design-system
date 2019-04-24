import styled from "styled-components";
import variables from "../../variables";
import theme from "../../theme";

const styleLink = LinkComponent => styled(LinkComponent)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: ${variables.defaultTransition};
  font-weight: ${props => (props.bold ? 600 : 300)};

  color: ${props =>
    props.active ? theme.primary : props.white ? theme.white : theme.primary};

  margin-bottom: ${props =>
    props.marginBottomDouble
      ? variables.defaultSpacingDouble
      : props.marginBottomHalf
        ? variables.defaultSpacingHalf
        : props.marginBottom ? variables.defaultSpacing : 0};

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${props => (props.bold ? "2px" : "1px")};
    background-color: transparent;
    transition: ${variables.defaultTransition};
  }
  &:hover,
  &:focus {
    outline: none;
    &:after {
      background-color: ${props => (props.active ? theme.primary : props.white ? theme.white : theme.primary)};
    }
  }
`;

const Hyperlink = styleLink(styled.a``);

/** @component */
export default { styleLink, Hyperlink };
