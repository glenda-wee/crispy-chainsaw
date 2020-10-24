import React, { Component } from "react";

//stateless functional components 

// const NavBar = () => {
//     return (
//         <nav className="navbar navbar-dark bg-dark">
//           <a className="navbar-brand" href="#">
//             ReadME{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       );
// }

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          ReadME{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
