import React from 'react'
import Transaction from './Transaction'
import { Row, Col } from 'react-bootstrap'
import Form from './AddTransaction'
import { useState } from 'react'

function TranscationList(props) {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [isPressed, setPressed] = useState(false)
    let transactionData = props.data
    let transactionArray = []

    transactionData.forEach(x => {

        transactionArray.push(<Transaction key={x.id} transactionTitle={x.description} category={x.category} amount={x.amount} />
        )

    })






    function handleFilterChange(event) {
        setSearch(event.target.value)
    }

    function handleSearchForm(event) {
        event.preventDefault()
        let newData = []
        let filteredData = []

        newData = transactionData.filter((transaction) => {
            return transaction.description === search


        }
        )
        newData.forEach(x => {

            filteredData.push(<Transaction key={x.id} transactionTitle={x.description} category={x.category} amount={x.amount} />


            )

        })
        console.log(newData)
        setList(filteredData)
    }

    function showAllTransactions() {
        setList(transactionArray)
    }
    function handleAddBtn() {
        if (isPressed) {
            setPressed(false)
        }
        else {
            setPressed(true)
        }

    }











    return (
        <div className='transactionList'>
            <div className="Filter">
                <form onSubmit={handleSearchForm}>
                    <Row>
                        <Col>
                            <h4 style={{ color: 'white' }}>ABC</h4>
                        </Col>
                        <Col className='searchBar' >
                            <input value={search} type='text' onChange={handleFilterChange} name='description'></input>

                        </Col>
                        <Col >
                            <button className='searchBtn' type='submit'>Search</button>


                        </Col>
                    </Row>

                </form>


            </div>
            <Row className='buttons'>
                <Col className='addBtndiv'>
                    <button className='addBtn' type='button' onClick={handleAddBtn} >{isPressed ? <button>X</button> : 'Add Transaction'}</button>

                </Col>
                <Col className='showDiv'>
                    <button onClick={showAllTransactions}>Show All Transactions</button>

                </Col>
            </Row>
            <h3 className='header2'>Transactions</h3>
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


            {list}
            {isPressed ? <Form data={transactionArray} /> : ''}
        </div>
    )
}

export default TranscationList
