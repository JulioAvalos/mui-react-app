import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative' // need to be put explicity
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    }
}));

const Footer = props => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}/>
        </footer>
    );
}

export default Footer;