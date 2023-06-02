import React from "react";
import { Provider } from "react-redux";
import BookList from "./BookList";
import BookForm from "./BookForm";

import store from "./store/store";

const B17BT2 = () => {
    return (
        <Provider store={store}>
            <div
                style={{
                    height: "400px",
                    width: "400px",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                }}
            >
                <BookForm />
                <BookList />
            </div>
        </Provider>
    );
};

export default B17BT2;