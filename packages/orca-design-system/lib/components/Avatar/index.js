import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import variables from "../../variables";

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  `

const AvatarText = styled.div`
  > * + * {
    margin-top: ${variables.defaultSpacingQuarter};
  }
  a:after {
    height: ${props => props.small ? "1px" : "2px"};;
  }
`

const AvatarImage = styled.img`
  width: ${props => props.small ? "38px" : "50px"};
  height: ${props => props.small ? "38px" : "50px"};
  background-color: ${theme.greyLighter};
  border-radius: 100%;
  border: 0;
  display: block;
  margin-right: ${variables.defaultSpacingHalf};
  `;

const AvatarDefault = styled.div`
  width: ${props => props.small ? "38px" : "50px"};
  height: ${props => props.small ? "38px" : "50px"};
  border-radius: 100%;
  background: ${theme.greyLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: ${props => props.small ? "1.6rem" : "2rem"};
  text-align: center;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
  letter-spacing: normal;
  line-height: normal;
  color: ${theme.white};
  margin-right: ${variables.defaultSpacingHalf};
  ${props => !props.initials
  ? css`
      &:before {
        content:"";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg transform='translate(-502.000000, -201.000000)' fill='%23FFFFFF'%3E%3Cpath d='M505 206C505 203.2 507.2 201 510 201 512.8 201 515 203.2 515 206 515 208.8 512.8 211 510 211 507.2 211 505 208.8 505 206ZM514.5 212L513.6 212C511.4 213.3 508.6 213.3 506.4 212L505.5 212C503.6 212 502 213.6 502 215.5L502 216.3C502 216.7 502.3 217 502.8 217L517.3 217C517.7 217 518 216.7 518 216.3L518 215.5C518 213.6 516.4 212 514.5 212Z'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: ${props => props.small ? "16px 16px" : "22px 22px"};
        position: relative;
        width: 100%;
        height: 100%;
      }
  `
  : css``};
`;

class Avatar extends React.Component {
  render() {
    const { src, initials, children, small } = this.props;
    return (
      <AvatarContainer>
        {src ? 
          <AvatarImage src={src} small={small}/>
        : <AvatarDefault small={small} initials={initials}>{initials}</AvatarDefault>
        }
        <AvatarText>
          {children}
        </AvatarText>
      </AvatarContainer>
    );
  }
}

Avatar.propTypes = {
  /** Specifies to use small avatar instead of regular size */
  small: PropTypes.bool,
  /** Specifies a source path if a profile picture is available */
  src: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.string
};

/** @component */
export default Avatar;