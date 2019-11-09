import React from "react";
import NoteItem from "./NoteItem";

export default class NoteList extends React.Component {
    render() {
        let {notes, selectNote, selectedNote} = this.props;
        return (
            <div className="list-group col-sm-3">
                {notes.map(note => (
                    <NoteItem note={note} selectNote={selectNote} selectedNote={selectedNote}/>
                ))}
                <button className="list-group-item list-group-action list-group-item-primary" data-toggle="modal" data-target="#create">Create+</button>
            </div>
        );
    }
}
