import React from 'react'

function Transaction(props) {
    return (
        <div className='transactionItem'>
            <h2>{props.transactionTitle}</h2>
            <h3>{props.key}</h3>
            <h4>{props.category}</h4>
            <h5>{props.amount}</h5>
        </div>
    )
}

export default Transaction
