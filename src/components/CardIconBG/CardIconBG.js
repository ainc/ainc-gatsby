/*
    - Card that has a Background Image overlayed with an Icon, Header, and Text.
    - queries the drupal content 'Icon Card W Bg'
    
*/

import * as React from 'react'
import { Card } from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby'
import { 
    card,
    cardOverlay,
    cardIcon,
    heading,
    heading__subtitle
 } from './CardIconBG.module.scss'
import styled from 'styled-components'

export const query = graphql`
    query  {
        allNodeIconCardWBg {
          nodes {
            field_text
          }
        }
      }`

const CardIconBG = ({ data }) => {

const CardBg = styled.div`
 background-position: center center;
 height: auto;
`

    return (
        <div>{
        data.allNodeIconCardWBg.nodes.map((node) =>(
        <Card style={{ width: '18rem' }}>
                <CardBg>
                <Card.Body className={card, cardOverlay}>
                    {/* <Card.Img src={cardBgData.nodeIconCardWBg.relationships.field_icon.localFile.url} className={cardIcon}/> */}
                    <Card.Header className={heading}>
                        {/* {cardBgData.nodeIconCardWBg.title} */}
                    </Card.Header>
                    <Card.Text className={heading__subtitle}>
                        {node.field_text}
                    </Card.Text>
                    <Card.Text>
                        {/* test: {cardBgData.allNodeIconCardWBg.nodes.totalCount} */}
                    </Card.Text>
                </Card.Body>
                </CardBg>        
        </Card>
        ))
    }</div>
    )
}

export default CardIconBG