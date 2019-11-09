import React from "react";
import NoteList from "./NoteList";
import Note from "../model/Note";
import NoteEditor from "./NoteEditor";
import NavBar from "./NavBar";
import CreateModel from "./CreateModel";

export default class NoteWindow extends React.Component {
    constructor(props) {
        super(props);
        let note = new Note("Untitled", "Not really anything");
        let note2 = new Note("Another Note", "Testing");
        note2.id += 10;

        this.state = {
            openFile: null,
            notes: [note, note2]
        };

        this.selectNote = this.selectNote.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    render() {
        return (
            <div id="note-window" className="container">
                <NavBar/>
                <br/>
                <div className="row">
                    <NoteList notes={this.state.notes} selectNote={this.selectNote} selectedNote={this.state.openFile}/>
                    {this.state.openFile !== null &&
                    <NoteEditor note={this.state.openFile} changeContent={this.changeContent}/>
                    }
                </div>
                <CreateModel createNote={this.createNote}/>
            </div>
        );
    }

    selectNote(note) {
        this.setState(() => ({
            openFile: note
        }));
    }

    changeContent(value) {
        let notes = this.state.notes;
        let openFile = null;
        let new_notes = notes.map(note => {
            if (note.id === this.state.openFile.id) {
                note.content = value;
                openFile = note;
            }
            return note;
        });

        this.setState(() => ({
            notes: new_notes,
            openFile: openFile
        }));
    }

    createNote(title) {
        let note = new Note(title, "");
        let notes = this.state.notes;
        notes.push(note);
        this.setState(() => ({
            notes: notes,
            openFile: note
        }));
    }
}