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
          {
            shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} />
            })
          }
        </div>
      </div>
    </div>
  );
}
export default App;

// function Card(props) {
//   return (
//     <div className="col-md-4">
//       <img
//         src={"shoes" + (props.i + 1) + ".jpg"} width="100%"
//       />
//       <h4>{props.shoes.title}</h4>
//       <p>{props.shoes.content} & {props.shoes.price}</p>
//     </div>
//   )
// }

function Card({shoes,i}) {
  return (
    <div className="col-md-4">
      <img
        src={"shoes" + (i + 1) + ".jpg"} width="100%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.content} & {shoes.price}</p>
    </div>
  )
}