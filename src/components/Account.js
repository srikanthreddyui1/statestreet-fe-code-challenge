import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        console.log(this.props)
        let data = this.props.location.state || false
        if (data) {
            data = data.data
        }
        else {
            window.location.href = '/'
        }
        return (
            <div>
                <h1>Transaction {data.account}</h1>
                Account No. : {data.accountName}<br />
                Currency Code : {data.currencyCode}<br />
                Amount : {data.amount}<br />
                Transaction Type: {data.transactionType}<br />
            </div>
        )
    }
}
