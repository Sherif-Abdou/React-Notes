import React from "react";

export default class CreateModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    render() {
        return (
            <div className={"modal fade"} id={"create"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className={"modal-dialog"} role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input className={"form-control"} placeholder={"Note Name"} value={this.state.title} onChange={this.onTitleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.createNote} data-dismiss="modal">Create Note</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    createNote() {
        this.props.createNote(this.state.title);
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({
            title: title
        }));
    }
}
