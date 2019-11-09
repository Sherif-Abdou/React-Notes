export default class Note {
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.id = Date.now();
    }
}