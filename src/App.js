import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";

class App extends Component {
  render() {
    const key = 0; // quantidade de placas e iterator
    return (
      <div className="principal">
        <Home
          placas={this.props.listaPlacas}
          nova={this.props.addPlaca}
          delete={this.props.deletarPlaca}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listaPlacas: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlaca: (id, ambiente, descricao) => {
      dispatch({
        type: "NOVA_PLACA",
        payload: { id, ambiente, descricao }
      });
    },
    deletarPlaca: id => {
      dispatch({
        type: "DELETE_PLACA",
        payload: { id }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
