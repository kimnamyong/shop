import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Data from './components/data';
import { useState } from "react";
function App() {
  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <NavBar />
      <Container className="background">
        <h1>20% Season Off</h1>
        <p>  This is a modified jumbotron that occupies the entire horizontal space
          of its parent. (^_^)     </p>
      </Container>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"   />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content} & {shoes[0].price}원</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
           <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content} & {shoes[1].price}원</p>
          </div>

          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
           <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content} & {shoes[2].price}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;