import React from "react";

export default class NoteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.onContentChange = this.onContentChange.bind(this);
    }

    render() {
        let { note } = this.props;
        console.log(this.props.note);
        return (
            <div className="col-8">
                <textarea value={note.content} onChange={this.onContentChange} className="form-control"></textarea>
            </div>
        );
    }

    onContentChange(e) {
        const value = e.target.value;
        this.props.changeContent(value);
    }
}