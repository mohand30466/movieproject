import React from "react";
import compinereducer from "../reducers/index";
import { connect } from "react-redux";

class MovieList extends React.Component() {
//   componentDidmount =()=>{
//       this.props.data
//   }

  render() {
    return <div>movie list</div>;
  }
}
const mapStateToProps = (state) => {
    console.log(state);
    
//   data: state.data;
//   console.log(data);
};

export default connect(mapStateToProps, { compinereducer })(MovieList);
