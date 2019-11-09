import React from "react";

export default class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.selectNote = this.selectNote.bind(this);
    }

    render() {
        const { note, selectedNote } = this.props;
        let className = "list-group-item list-group-item-action";
        if (selectedNote !== null) {
            className = className.concat(selectedNote.id === note.id ? " active" : "");
        }
        return (
            <div key={note.id}>
                <button className={className} onClick={this.selectNote}>{note.name}</button>
            </div>
        );
    }

    selectNote() {
        let note = this.props.note;
        this.props.selectNote(note);
    }
}