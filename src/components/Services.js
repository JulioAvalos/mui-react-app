import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './UI/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyle = makeStyles(theme => ({
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
}));

const Service = props => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column">{/*-----Services Block (iOS/Android)-----*/}
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : 'flex-end'}
                className={classes.serviceContainer}
            >
                <Grid
                    item
                    style={{
                        textAlign: matchesSM ? 'center' : undefined
                    }}
                >
                    <Typography variant="h4">
                        iOS/Android Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Extend Functionality. Extend Access. Increase Engagemenet.
                    </Typography>
                    <Typography variant="subtitle1">
                        Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform
                    </Typography>
                    <Button 
                        component={Link} 
                        to="/mobileapps"
                        variant="outlined" 
                        className={classes.learnButton}    
                        onCLick={() => {props.setValue(1); props.setSelectedIndex(2);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                    <img
                        className={classes.icon}
                        alt="mobile apps icon"
                        src={mobileAppsIcon}
                    />
                </Grid>
            </Grid>
            {" "}
            {/*-----Services Block (Custom Software)-----*/}
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : undefined}
                className={classes.serviceContainer}
            >
                <Grid
                    item
                    style={{
                        marginLeft: matchesSM ? 0 : '5em',
                        textAlign: matchesSM ? 'center' : undefined
                    }}
                >
                    <Typography variant="h4">
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Save Energy. Save Time. Save Money
                    </Typography>
                    <Typography variant="subtitle1">
                        Complete digital solutions, from investigation to {" "}
                        <span className={classes.specialText}>celebration</span>
                    </Typography>
                    <Button 
                        component={Link} 
                        to="/customsoftware"
                        variant="outlined" 
                        className={classes.learnButton}
                        onCLick={() => {props.setValue(1); props.setSelectedIndex(1);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item>
                    <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                </Grid>
            </Grid>
            {" "}
            {/*-----Services Block (Website)-----*/}
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : 'flex-end'}
                className={classes.serviceContainer}
            >
                <Grid
                    item
                    style={{
                        textAlign: matchesSM ? 'center' : undefined
                    }}
                >
                    <Typography variant="h4">
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant="subtitle1">
                        Optimized for Search Engines, built for speed.
                    </Typography>
                    <Button
                        component={Link} 
                        to="/websites"
                        variant="outlined" 
                        className={classes.learnButton}
                        onCLick={() => {props.setValue(1); props.setSelectedIndex(3);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
                    <img
                        className={classes.icon}
                        alt="website icon"
                        src={websitesIcon}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Service;