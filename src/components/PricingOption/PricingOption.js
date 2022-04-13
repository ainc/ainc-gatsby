import * as React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import * as styles from './PricingOption.module.scss'

const MostPopularDiv = styled.div`
  visibility: ${props => (props.mostPopular) ? 'visible'  : 'hidden'};
`

const FreeMonthsDiv = styled.div`
  visibility: ${props => (props.freeMonths) ? 'visible'  : 'hidden'};
  height:     ${props => (props.freeMonths) ? 'auto'     : '0'};
  padding:    ${props => (props.freeMonths) ? '1.5rem 0' : '0'};
  border-top: 1px solid gainsboro;
`

const PricingOption = (props) => {
  return (
    <div>
      <MostPopularDiv {...props} className='pt-1 bg-white'>
        <div className={`mx-1 mb-1 ${styles.mostPopularRibbon}`}/>
        <div className='text-warning'>Most Popular</div>
      </MostPopularDiv>
      <Container className='px-4 py-5 bg-white'>
        <Row className='mb-5'>
          <h3 className={`text-uppercase ${styles.planLength}`}>{props.planLength} Plan</h3>
        </Row>
        <Row className='mx-auto mt-5 mb-2'>
          <GatsbyImage className={styles.icon} image={getImage(props.iconFile)} alt={props.iconAlt} />
        </Row>
        <Row className='mt-2 mb-5'>
          <h1 className={`fw-bold ${styles.price}`}>
            <small className='fw-normal'>$</small>{props.price}
          </h1>
        </Row>
        <Row className='mt-5 mb-2'>
          <h5 className={`fst-italic fw-bold ${styles.billingFrequency}`}>Billed {props.billingFrequency}</h5>
        </Row>
        <Row className='mt-2'>
          <Col>
            <BrandButton>
              <a href={props.buttonLink}>{props.buttonText}</a>
            </BrandButton>
          </Col>
        </Row>
      </Container>
      <FreeMonthsDiv {...props} className='bg-white'>
        <span className='fs-6'>
          <FontAwesomeIcon className={`mx-2 ${styles.redCheck}`} icon={faCheck} />
          This plan gives you {props.freeMonths} free month{(props.freeMonths > 1) ? "s" : "" }
        </span>
      </FreeMonthsDiv>
    </div>
  )
}

PricingOption.propTypes = {
  planLength:       PropTypes.string.isRequired,
  iconFile:         PropTypes.any.isRequired,
  iconAlt:          PropTypes.string,
  price:            PropTypes.number.isRequired,
  billingFrequency: PropTypes.string.isRequired,
  buttonText:       PropTypes.string.isRequired,
  buttonLink:       PropTypes.string,
  freeMonths:       PropTypes.number,
  mostPopular:      PropTypes.bool,
}

PricingOption.defaultProps = {
  iconAlt:          "Unknown image",
  buttonLink:       '',
  freeMonths:       0,
  mostPopular:      false,
}

export default PricingOption
