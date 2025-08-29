import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from './Card';
import axios from "axios";

const Home = (props) => {

  let getUrl = "http://localhost:3000/data.json";
  let [show, setShow] = useState(false);
  const loading = () => {
    return (
      <div>
        <h2> loading.....중</h2>
      </div>
    );
  };

  const getData = () => {
    axios
      .get(getUrl)
      .then((result) => {
        console.log(result);
        console.log(props);
        setShow(true);       
        props.shoes변경([...props.shoes, ...result.data]);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      }).catch(() => {
        console.log("접속실패....");
        setShow(true);
      });
  };
  return (
    <div>
      <Container className="background">
        <h1>20% Season Off</h1>
        <p>  This is a modified jumbotron that occupies the entire horizontal space
          of its parent. (^_^)     </p>
      </Container>

      <div className="container">
        <div className="row">
          {
            props.shoes.map((shoe, i) => {
              return <Card shoes={shoe} i={i} key={i} />
            })
          }
        </div>
        {show ? loading() : null}
        <button className="btn btn-primary"
          onClick={getData}>
          더보기(axios)
        </button>

      </div>
    </div>
  )
}

export default Home
