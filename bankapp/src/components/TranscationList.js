import React from 'react'
import Transaction from './Transaction'
import { Row, Col } from 'react-bootstrap'
import Form from './AddTransaction'


function TranscationList(props) {
    let array = props.data
    let transactionArray = []

    array.forEach(x => {
        transactionArray.push(<Transaction key={x.id} transactionTitle={x.description} category={x.category} amount={x.amount} />)

    })




    return (
        <div className='transactionList'>
            <Row className='transactionHeading'>
                <Col >
                    <h4 className='nameHeading'>Transaction Name</h4>
                </Col>
                <Col >
                    <h4 className='categoryHeading'>Category</h4>
                </Col>
                <Col >
                    <h4 className='amountHeading'>Amount</h4>
                </Col>
            </Row>

            {transactionArray}
            <Form data={transactionArray} />
        </div>
    )
}

export default TranscationList
