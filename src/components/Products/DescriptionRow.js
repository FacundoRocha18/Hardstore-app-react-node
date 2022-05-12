import React from 'react'

export const DescriptionRow = ({description}) => {

    return (

        <>
                <tr>
                    <th><h6>Marca: </h6></th>
                    <td>{description}</td>
                </tr>
        </>
    )
}

export default DescriptionRow;
