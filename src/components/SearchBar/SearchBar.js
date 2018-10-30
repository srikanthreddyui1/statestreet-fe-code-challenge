import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux';
import { searchPressed } from '../../actions/index'
import { COLORS } from '../../resources/theme';
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Grid } from '@material-ui/core'


const STYLE = theme => ({
    searchBarAlign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom: 40
    },
    searchBar: {
        width: 200,
        '& label': {
            color: COLORS.black
        }
    },
    buttonSection: {
        marginLeft: 10,
        marginTop: 10
    },
    formLabel: {
        color: theme.palette.text.primary
    },
    checkbox: {
        color: theme.palette.text.tertiary
    }
})

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            pin: "",
            filter: false,
            searchButton: true,
            saving: false,
            checking: false,
            auto: false,
            creditCard: false,
            investment: false,
            personal: false,
            money: false,
            home: false,
            deposit: false,
            withdrawal: false,
            invoice: false,
            payment: false
        }
    }

    // handlePriceCheck = event => {
    //     this.setState({ priceCheck: !this.state.priceCheck })
    // }

    handlePriceCheck = (name, event) => {
        console.log('Inside handlepricecheck')
        this.setState({ [name]: event.target.checked }, () => {
            console.log(this.state)
        });
    };

    submit = () => {
        let filters = [this.state.saving, this.state.checking, this.state.auto, this.state.creditCard, this.state.investment, this.state.personal, this.state.money, this.state.home, this.state.deposit, this.state.withdrawal, this.state.invoice, this.state.payment]
        console.log('filters in submit:', filters)
        this.props.searchPressed(filters)
    }

    render() {
        const { classes } = this.props
        const inputProps = { maxLength: 6 }
        return (
            <div>
                <div className={classes.searchBarAlign}>
                    <div className={classes.buttonSection}>
                        <Button color="primary" variant="raised" onClick={() => this.submit()}>Search</Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginLeft: 20 }}>
                    {/*No filters available right now.
                        */}
                    <FormControl component="fieldset">


                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <FormLabel className={classes.formLabel} component="legend">Account Name</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.saving} onClick={(event) => this.handlePriceCheck('saving', event)} value="1" />
                                        }
                                        label="Saving Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.checking} onChange={(event) => this.handlePriceCheck('checking', event)} value="2" />
                                        }
                                        label="Checking Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.auto}
                                                onChange={(event) => this.handlePriceCheck('auto', event)}
                                                value="3"
                                                color="primary"
                                            />
                                        }
                                        label="Auto Loan Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.creditCard}
                                                onChange={(event) => this.handlePriceCheck('creditCard', event)}
                                                value="4"
                                                color="primary"
                                            />
                                        }
                                        label="Credit Card Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.investment}
                                                onChange={(event) => this.handlePriceCheck('investment', event)}
                                                value="5"
                                                color="primary"
                                            />
                                        }
                                        label="Investment Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.personal}
                                                onChange={(event) => this.handlePriceCheck('personal', event)}
                                                value="6"
                                                color="primary"
                                            />
                                        }
                                        label="Personal Loan Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.money}
                                                onChange={(event) => this.handlePriceCheck('money', event)}
                                                value="7"
                                                color="primary"
                                            />
                                        }
                                        label="Money Market Account"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className={classes.checkbox}
                                                checked={this.state.home}
                                                onChange={(event) => this.handlePriceCheck('home', event)}
                                                value="8"
                                                color="primary"
                                            />
                                        }
                                        label="Home Loan Account"
                                    />
                                </FormGroup>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormLabel className={classes.formLabel} component="legend">Transaction Time</FormLabel>

                                <FormGroup>

                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.deposit} onClick={(event) => this.handlePriceCheck('deposit', event)} value="9" />
                                        }
                                        label="Deposit"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.withdrawal} onClick={(event) => this.handlePriceCheck('withdrawal', event)} value="10" />
                                        }
                                        label="Withdrawal"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.invoice} onClick={(event) => this.handlePriceCheck('invoice', event)} value="11" />
                                        }
                                        label="Invoice"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox className={classes.checkbox} color="primary" checked={this.state.payment} onClick={(event) => this.handlePriceCheck('payment', event)} value="12" />
                                        }
                                        label="Payment"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPressed: (filters) => dispatch(searchPressed(filters))
    }
}
export default connect(null, mapDispatchToProps)(withStyles(STYLE)(SearchBar))