import React from "react";

/*function ListItem() {
    return (
        <li className="text-success">
            List Item 3
        </li>


    );
}
*/
function ListItem(props) {
    return (
        <li className="text-success">
            Name - {props.name} - Course - {props.course}
        </li>
    );
}

export default ListItem;