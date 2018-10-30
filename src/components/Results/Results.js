import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { connect } from 'react-redux';
import { Typography, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';
import { Link } from 'react-router-dom'

const STYLES = theme => ({
    marginXY: {
        marginTop: 80,
        marginLeft: 150,
        marginRight: 150
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
        color: '#000'
    },
})

class Results extends Component {
    constructor() {
        super()
        this.state = {
            restaurants: []
        }
    }


    render() {
        const { classes } = this.props
        let data = this.props.details
        let filters = this.props.filters
        console.log('data:', data)
        let rows = (<TableRow></TableRow>)
        let filterTerms = [
            "Savings Account",
            "Checking Account",
            "Auto Loan Account",
            "Credit Card Account",
            "Investment Account",
            "Personal Loan Account",
            "Money Market Account",
            "Home Loan Account",
            "deposit",
            "withdrawal",
            "invoice",
            "payment"]

        let accountSelect = []
        let transactionSelect = []

        let selectedAccount = []
        let selectedTransaction = []
        let fil = 0
        if (filters && filters.length > 0) {
            fil = 1
            filters.forEach(e => {
                if (e < 8) {
                    accountSelect.push(e)
                }
                else {
                    transactionSelect.push(e)
                }
            })
            selectedAccount = accountSelect.map(e => {
                return filterTerms[e]
            })
            selectedTransaction = transactionSelect.map(e => {
                return filterTerms[e]
            })
        }
        console.log('Selected Account:', selectedAccount)
        console.log('Selected Transaction:', selectedTransaction)

        if (data)
            rows = data.map((element, index) => {
                if (fil === 1) {
                    if (((selectedAccount.length > 0) ? (selectedAccount.indexOf(element.accountName) > -1) : true) && ((selectedTransaction.length > 0) ? (selectedTransaction.indexOf(element.transactionType) > -1) : true)) {

                        console.log('filter is present')
                        return (
                            <TableRow key={index} >
                                <TableCell component="th" scope="row">
                                    <Typography color="textPrimary"><Link to={{ pathname: '/account', state: { data: element } }} data={element}>{element.account}</Link></Typography>
                                </TableCell>
                                <TableCell ><Typography color="textPrimary">{element.accountName}</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary">{element.currencyCode}</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary">{element.amount}</Typography></TableCell>
                                <TableCell><Typography color="textPrimary">{element.transactionType}</Typography></TableCell>
                            </TableRow>
                        )
                    }
                    else {
                        return null
                    }
                }
                else {
                    return (
                        <TableRow key={index} >
                            <TableCell component="th" scope="row">
                                <Typography color="textPrimary"><Link to={{ pathname: '/account', state: { data: element } }} data={element}>{element.account}</Link></Typography>
                            </TableCell>
                            <TableCell ><Typography color="textPrimary">{element.accountName}</Typography></TableCell>
                            <TableCell ><Typography color="textPrimary">{element.currencyCode}</Typography></TableCell>
                            <TableCell ><Typography color="textPrimary">{element.amount}</Typography></TableCell>
                            <TableCell><Typography color="textPrimary">{element.transactionType}</Typography></TableCell>
                        </TableRow>
                    )
                }
            })
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography color="textPrimary" variant="body2">ACCOUNT NO.</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary" variant="body2">ACCOUNT NAME</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary" variant="body2">CURRENCY</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary" variant="body2">AMOUNT</Typography></TableCell>
                                <TableCell ><Typography color="textPrimary" variant="body2">TRANSACTION TYPE</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </Paper>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ..._.pick(state.ResultPage, ['details', 'filters'])
    }
}
export default connect(mapStateToProps, null)(withStyles(STYLES)(Results))