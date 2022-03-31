import React from 'react';

function Summary_data(props) {
  return (
    
      <tr >
        <td className="product__type">{props.items.productType}</td>
        <td className="product__washtype">
          {[
            props.items.value.ironing ? 'ironing' : '',
            props.items.value.Folding ? 'Folding' : '',
            props.items.value.Packing ? 'Pressing' : '',
            props.items.value.wash ? 'washing' : '',
          ]
            .filter((validtypes) => {
             return validtypes.length > 0;
            })
            .join(',')}
        </td>

        <td className="price__calculation">
          <pre>
            {props.items.value.quantity} X {props.items.value.price / props.items.value.quantity}
          </pre>
        </td>
        <td className="product__price">{props.items.value.price}</td>
      </tr>
  );
}

export default Summary_data;
