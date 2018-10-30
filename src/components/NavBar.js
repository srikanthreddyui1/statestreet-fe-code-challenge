import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const STYLES = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 10
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center'
    },
    appbar: {
        //backgroundColor: theme.palette.primary.main
    },
    primaryText: {
        color: theme.palette.text.primary
    },
    secondaryText: {
        color: theme.palette.text.secondary
    }
});

class NavBar extends Component {
    render() {
        //console.log(this.props)
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="fixed" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.secondaryText} variant="title">
                            My Transactions
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(STYLES)(NavBar);