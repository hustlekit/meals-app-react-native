export default class Category {
    _id;
    _title;
    _color;

    constructor(id, title, color) {
        this._id = id;
        this._title = title;
        this._color = color;
    }


    get id() {
        return this._id;
    }

    set id( value ) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title( value ) {
        this._title = value;
    }

    get color() {
        return this._color;
    }

    set color( value ) {
        this._color = value;
    }
}