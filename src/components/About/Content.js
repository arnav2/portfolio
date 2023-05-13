import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {AppBar, Tabs, Tab, VisibilityIcon, FavoriteIcon, Typography, Box} from '@mui/mateial-ui';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SkillList from './SkillList'
import ExperienceList from './ExperienceList';
import EducationContent from './EducationContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box p={3}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.primary,
    },
}));

export default function Content() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Box component="header" className={classes.mainContainer}>
    <Typography variant="h4" align="center" className={classes.heading}>
      Working Experience
    </Typography>
    <Box component="div" className={classes.timeLine}>
      <Typography
        variant="h2"
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
      >
        2013
      </Typography>
      <Box component="div" className={classes.timeLineItem}>
        <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
        >
          web design
        </Typography>
        <Typography variant="body1" align="center" className={classes.body1}>
          company name where worked
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
          Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
          repudiandae, rerum necessitatibus nisi mollitia.
        </Typography>
      </Box>
      <Typography
        variant="h2"
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
      >
        2014
      </Typography>
      <Box component="div" className={classes.timeLineItem}>
        <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
        >
          html & css
        </Typography>
        <Typography variant="body1" align="center" className={classes.body1}>
          company name where worked
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
          Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
          repudiandae, rerum necessitatibus nisi mollitia.
        </Typography>
      </Box>
      <Typography
        variant="h2"
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
      >
        2015
      </Typography>
      <Box component="div" className={classes.timeLineItem}>
        <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
        >
          Fullstack Javascript
        </Typography>
        <Typography variant="body1" align="center" className={classes.body1}>
          company name where worked
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
          Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
          repudiandae, rerum necessitatibus nisi mollitia.
        </Typography>
      </Box>
      <Typography
        variant="h2"
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
      >
        2017
      </Typography>
      <Box component="div" className={classes.timeLineItem}>
        <Typography
          variant="h5"
          align="center"
          className={classes.subHeading}
        >
          Django & React
        </Typography>
        <Typography variant="body1" align="center" className={classes.body1}>
          company name where worked
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
          Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
          repudiandae, rerum necessitatibus nisi mollitia.
        </Typography>
      </Box>
    </Box>
  </Box>
        </div>
    );
}