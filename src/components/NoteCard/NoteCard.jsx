import React, { Component } from "react";
import "./styles.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class NoteCard extends React.Component {

  delete(){
    const noteIndex = this.props.noteIndex;
    this.props.removeNote(noteIndex);
  }

  render() {
    return (
      <section className="note-card">
          <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          <DeleteSVG onClick={this.delete.bind(this)} />
          <h4>{this.props.category}</h4>
          </header>
          <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
