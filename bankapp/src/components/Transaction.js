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
                            <span className='title'>{props.transactionTitle}</span>


                        </div>
                    </Col>
                    <Col>
                        <div>
                            <span className='category'>{props.category}</span>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4 className='amount'>{props.amount}</h4>



                        </div>


                    </Col>

                </Row>


            </Container>

            <hr />

        </div>
    )
}

export default Transaction
