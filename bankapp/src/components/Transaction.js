import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'

function Transaction(props) {
    return (
        <div className='transactionItem'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <span>{props.transactionTitle}</span>


                        </div>
                    </Col>
                    <Col>
                        <div>
                            <span className='amount'>{props.amount}</span>


                        </div>
                    </Col>
                    <Col>
                        <div>
                            <span>{props.category}</span>

                        </div>


                    </Col>

                </Row>


            </Container>



        </div>
    )
}

export default Transaction
