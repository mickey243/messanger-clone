import React, { forwardRef } from 'react'
import { Card, CardText, Row, Col, Container } from 'reactstrap';

const MsgCard = forwardRef(({ data, username }, ref) => {
  const isUser = username === data.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>

      <Card body className={isUser ? " message_usercard" : "message_guestcard"}>
        <CardText>{!isUser && `${data.username || 'unknown Use'} :`}  {data.message}</CardText>
      </Card>

    </div >

  )
})

export default MsgCard;
