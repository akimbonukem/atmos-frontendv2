import React, { Component } from "react";

class Home extends Component {
  render() {
    const placas = this.props.placas;
    const displayPlacas = Object.values(placas.placas.byId).map(registro => {
      return (
        <div className="placas">
          <ul>
            <li>ID: {registro.id}</li>
            <li>Ambiente: {registro.ambiente}</li>
            <li>Descrição: {registro.descricao}</li>
          </ul>
        </div>
      );
    });

    const removeplacas = Object.values(placas.placas.byId).splice(3, 1);
    console.log(removeplacas);

    return (
      <div className="dados">
        <h1>Dashboard</h1>
        <h2>{displayPlacas}</h2>
        <button onClick={() => this.props.nova(4, "placa 5", "placa 5")}>
          adicionar placa
        </button>
        <button onClick={() => this.props.delete(4)}>deletar placa</button>
      </div>
    );
  }
}

export default Home;
