import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Title, DateCard, Events, EventsCard, DateTitle, Image } from './EventCard.module.scss'

class EventCard extends React.Component {

  render() {
      return <Card>
        <Card className={`${EventsCard}`} style={{ height: '32rem', width: '35rem' }}>
          <Card.Img className={`${Image}`} src="https://images.unsplash.com/photo-1633113214735-2cd84b3587ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" style={{ height: '32rem', width: '35rem' }} />
          <Card.ImgOverlay>
            <Card.Body className={`${Events}`}>
              <Card.Title className={`${Title}`} >5 Across Finals</Card.Title>
              <Card.Text className={`text-white`}>
                5:00 PM<br />
                Lyric Theatre
              </Card.Text>
              <Card className={`${DateCard}`}>
                <Card.Title className={`text-center ${DateTitle}`}>8</Card.Title>
                <Card.Text className={`text-center text-black`}>
                  Dec
                </Card.Text>
                </Card>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </Card>
  }
};

export default EventCard;

