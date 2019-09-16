import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container } from 'reactstrap';


// const Header = props => (
//   <div className="header">
//     <div className="title">{props.children}</div>
//     <div className="scores">
//       Score: {props.score} Highscore: {props.highscore}
//     </div>
//   </div>
// );

// const Header = (props) => {
//   return (
//     <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <div >
//             <div >{props.children}</div>
//             <div >
//               Score: {props.score} Highscore: {props.highscore}
//             </div>

//             <h1 className="display-3">Fluid jumbotron</h1>
//             <p className="lead">This is a modified jumbotron that occupies the entire horizontal space</p>
//           </div>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// };

const Header = (props) => {
  return (
    <div>
      <Jumbotron >
        <Container >
          <h1 className="display-3">{props.children}</h1>
          <p> Click on a new plant everytime to win! If you click on the same plant twice you will lose the game.</p>
          <h2 className="lead">Score: {props.score} </h2>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Header;