import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "./action";

const BookForm = ({ book }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(book ? book.name : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (book) {
            dispatch(updateBook({ id: book.id, name }));
        } else {
            dispatch(addBook({ name }));
        }
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">{book ? "Update Book" : "Add Book"}</button>
        </form>
    );
};

export default BookForm;