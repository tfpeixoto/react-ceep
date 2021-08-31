import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria)
    }
  }

  criarCategoria

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>
          })}
        </ul>

        <input
          type="text"
          placeholder="Adicionar categoria"
          className="lista-categorias_input"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
