import React, { useState } from "react";
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap'

function Form(props) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);
    let currentData = props.data

    const [submittedData, setSubmittedData] = useState([]);

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }

    function handleAmountChange(event) {
        setAmount(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            date: date,
            description: description,
            category: category,
            amount: amount
        };
        const dataArray = [...submittedData, formData];
        setSubmittedData(dataArray);

        setDate("");
        setDescription("");
        setCategory('')
        setAmount("")
    }

    const listOfTransactions = submittedData.map((data, index) => {
        return (
            <div className='transactionItem' key={index}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <span>{data.description}</span>


                            </div>
                        </Col>
                        <Col>
                            <div>
                                <span className='category'>{data.category}</span>

                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4 className='amount'>{data.amount}</h4>



                            </div>


                        </Col>

                    </Row>


                </Container>

            </div>
        );
    });

    return (
        <div>
            {listOfTransactions}
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <label for='description' >Description:</label>

                    </Col>
                    <Col>
                        <input type="text" id="description" name="description" onChange={handleDescriptionChange} value={description} />


                    </Col>

                </Row>
                <Row>
                    <Col>
                        <label for='category'>Category:</label>


                    </Col>
                    <Col>
                        <input type="text" name="category" id="category" onChange={handleCategoryChange} value={category} />

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label for='amount'>Amount:</label>


                    </Col>
                    <Col>
                        <input type="text" name="amount" id="amount" onChange={handleAmountChange} value={amount} />


                    </Col>

                </Row>
                <Row>
                    <Col>
                        <label>Date:</label>
                    </Col>
                    <Col>
                        <input name='date' type="date" id='date' onChange={handleDateChange} value={date} />

                    </Col>

                </Row>




                <button className="submitBtn" type="submit">Submit</button>
            </form>



        </div>

    );
}

export default Form;