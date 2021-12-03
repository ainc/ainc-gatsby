/*
    - Card that has a Background Image overlayed with an Icon, Header, and Text.
    - queries the drupal content 'Icon Card W Bg'
    
*/

import * as React from 'react'
import { Card } from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby'


const CardIconBG = () => {
    const dataTwo = useStaticQuery(graphql`
      query {
        nodeIconCardWBg {
          field_text
          relationships {
            field_bg_ima {
              uri {
                url
              }
            }
          }
        }
      }

    `)

    return (
        <Card>
            <Card.Img src={dataTwo.nodeIconCardWBg.relationships.field_bg_ima.uri.url}/> 
            <Card.ImgOverlay>
                <Card.Body>
                    {/* <Card.Img src={dataTwo.allNodeIconCardWBg.nodes.relationships.field_icon.uri.url}/> */}
                    <Card.Header>
                        {dataTwo.nodeIconCardWBg.field_text}
                    </Card.Header>
                    <Card.Text>
                        {/* {dataTwo.allNodeIconCardWBg.nodes.field_text} */}
                    </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardIconBG