import React, { useEffect, useState } from 'react';
import "./Message.css";
import MsgCard from "./MsgCard";
import { Button, Form, FormGroup, Input, Container, InputGroup, InputGroupAddon } from 'reactstrap';
import { BsFillCursorFill } from 'react-icons/bs';
import FlipMove from 'react-flip-move';
import db from "../FireBase/Configuration";
import firebase from "firebase";

const Messanger = () => {
  //state define...
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([]);
  const [username, setUsername] = useState("");

  //to fetch data from firebase
  useEffect(() => {
    db.collection("Message").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMsg(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])
  console.log(msg);
  //take username and set
  useEffect(() => {
    setUsername(prompt("Enter Your Name :"));
  }, [])

  //onclick handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // setMsg([...msg, { username: username, text: input }]);
    db.collection("Message").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }
  return (
    <div>
      {/* Heading logo */}
      <img className="text-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" />
      {/* end logo */}
      <FlipMove>
        {
          msg.map(({ id, message }) => (
            <MsgCard key={id} data={message} username={username} />
            // <h1>{data.username}</h1>

          )
          )
        }
      </FlipMove>
      {/* ------------------- */}
      <Container className="text-center txt fixed-bottom mb-2 pb-2" >
        <Form>
          <FormGroup className="text-center  text-warning">
            <InputGroup>
              <Input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="enter your name" className="text-danger" />
              <InputGroupAddon addonType="prepend">
                {/* <InputGroupText>@</InputGroupText> */}
                <Button type="submit" disabled={!input} color="warning" onClick={handleSubmit} outline ><BsFillCursorFill /></Button>
              </InputGroupAddon>
            </InputGroup>


          </FormGroup>
        </Form>


      </Container>

    </div>
  )
}

export default Messanger;
