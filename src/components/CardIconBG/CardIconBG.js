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

const CardIconBG = () => {

const data = useStaticQuery(graphql`
    query {
        allNodeIconCardWBg {
            nodes {
            field_text
            relationships {
                field_bg_ima {
                    localFile {
                        url
                      }
                }
                field_icon {
                    localFile {
                        url
                      }
                }
            }
            title
            }
        }
    }`
)

const CardBg = styled.div`
    background-position: center center;
    height: auto;
`

const CardIconBG = () => {

    const data = useStaticQuery(graphql`
        query {
            allNodeIconCardWBg {
                nodes {
                    field_text
                }
            }
        }`
    )

    return (
        <div class = "row">{
        data.allNodeIconCardWBg.nodes.map((node) =>(
        <Card style={{ width: '18rem' }}>
                <CardBg style={{ backgroundImage: `url(${node.relationships.field_bg_ima.localFile.url})` }}>
                <Card.Body className={card, cardOverlay}>
                    <Card.Header className={heading}>
                        {node.title}
                    </Card.Header>
                    <Card.Text className={heading__subtitle}>
                        {node.field_text}
                    </Card.Text>
                    <img src={node.relationships.field_icon.localFile.url}>
                    </img>
                </Card.Body>
                </CardBg>        
        </Card>
        ))
    }</div>
    )
}

export default CardIconBG;