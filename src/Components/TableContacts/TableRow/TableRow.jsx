import React from 'react';

function TableRow ({firstname , lastname , email , phone})  {
    return (
        <tr>
            <td>{`${firstname}`}</td>
            <td>{`${lastname}`}</td>
            <td>{`${email}`}</td>
            <td>{`${phone}`}</td>
        </tr>
    );
}

export default TableRow;
