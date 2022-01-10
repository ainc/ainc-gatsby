import * as React from 'react';
import { Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const BrandButton = styled.button`
    font-family: ${styles.styles.fonts.baseFont};
    font-weight: 600;
    letter-spacing: 3px;
    background: ${styles.styles.colors.brand};
    padding: 0.5rem 2rem;
    color: white;
    overflow: hidden;
    display: inline-block;
    text-transform: uppercase;
    font-size: ${styles.styles.sizes.text};
    border: 2px solid ${styles.styles.colors.brand};
    border-radius: 4px;
    position: relative;

    &.disabled,
    &[disabled],
    fieldset[disabled] & {
        cursor: not-allowed;
    }

    &:hover {
        color: ${styles.styles.colors.brand2};
    }

    &.secondary {
        background-color: ${styles.styles.colors.brand2};
        border-color: ${styles.styles.colors.brand2};
        &:hover {
            color: ${styles.styles.colors.brandGrey};
        }
    }
    &.btn--small {
        font-size: ${styles.styles.sizes.text};
        padding: 0.4rem 1.4rem;
    }
`

const brandButton = (props) => {
    return (
        <BrandButton {...props} >
            {props.children}
        </BrandButton>
    ) 
}
 
export default brandButton;
