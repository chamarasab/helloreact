import React from "react";
import ListItem from "./ListItem";

function NameList() {
    return (
        //<div>
        <React.Fragment>
            <ul>
                <li className="text-light">List Item 1</li>
                <li className="text-warning">List Item 2</li>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <li className="text-primary">List Item 4</li>
            </ul>
        </React.Fragment>
        //</div>
    );
}
export default NameList;