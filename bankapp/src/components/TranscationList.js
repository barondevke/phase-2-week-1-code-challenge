import React from 'react'
import Transaction from './Transaction'

function TranscationList(props) {
    let array = props.data
    let transactionArray = []

    array.forEach(x => {
        transactionArray.push(<Transaction key={x.id} transactionTitle={x.description} category={x.category} amount={x.amount} />)

    })




    return (
        <div className='transactionList'>
            {transactionArray}
        </div>
    )
}

export default TranscationList
