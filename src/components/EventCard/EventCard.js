import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Title, DateCard, Events, EventsCard, DateTitle, Image, EventsText } from './EventCard.module.scss'

class EventCard extends React.Component {

  render() {
      return <Card>
        <Card className={`${EventsCard}`} style={{ height: '32rem', width: '35rem' }}>
          <Card.Img className={`${Image}`} src="https://d33wubrfki0l68.cloudfront.net/3195e71273629e8681bdf2be8d7a193ec83e4642/90d87/images/uploads/51735812402_448c4fe446_k.jpg" style={{ height: '30rem', width: '33rem' }} />
          <Card.ImgOverlay>
            <Card.Body className={`${Events}`}>
              <Card.Text className={`${EventsText}`}>
                5:00 PM<br />
                Lyric Theatre
              <Card.Title className={`${Title}`}>
              <a href="https://www.eventbrite.com/e/5-across-february-2022-startup-pitch-competition-tickets-226103029247">5 Across February - Startup<br />
              Pitch Competition</a>
              </Card.Title>
              </Card.Text>
              <Card className={`${DateCard}`}>
                <Card.Title className={`text-center ${DateTitle}`}>23</Card.Title>
                <Card.Text className={`text-center text-black`}>
                  FEB
                </Card.Text>
                </Card>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </Card>
  }
};

export default EventCard;

