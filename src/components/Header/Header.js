import React from "react";
import "./Header.css";
import { Jumbotron, Container } from 'reactstrap';

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

// const Header = (props) => {
//   return (
//     <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <div className="header">
//             <div className="title">{props.children}</div>
//             <div className="scores">
//               Score: {props.score} Highscore: {props.highscore}
//             </div>
//           </div>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// };


export default Header;