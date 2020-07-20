import React from 'react';

function TableRow(props) {

    return (
        <tr>
            <td>{`${props.firstname}`}</td>
            <td>{`${props.lastname}`}</td>
            <td>{`${props.email}`}</td>
            <td>{`${props.phone}`}</td>
            <td>
                <button onClick={props.handleDelete}>Delete</button>
            </td>
        </tr>

    );
}

export default TableRow;
