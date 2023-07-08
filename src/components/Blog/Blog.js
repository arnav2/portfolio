import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';
import { Box, Button, Typography } from '@mui/material';


function Blog() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        blog: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            padding: '2rem',
            overflowX: 'hidden',
            backgroundColor: theme.secondary
        },
        blogHeaderDiv: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            margin: '1rem'
        },
        blogHeader: {
            marginBottom: '40px',
            fontSize: '3.5rem',
            fontFamily: 'var(--primaryFont)'
        },
        blogBody: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        blogBodyContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '4.5rem'
        },
        blogViewAll: {
            width: '100%',
            marginTop: '1rem',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        viewAllLink: {
            outline: 'none',
            border: 'none',
            width: '150px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'inherit',
            borderRadius: '45px',
            fontSize: '1.05rem',
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            paddingLeft: '1.5rem',
            cursor: 'pointer',
        },
        viewAllButton : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            outline: 'none',
            border: 'none',
            width: '150px',
            height: '48px',
            display: 'flex',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'inherit',
            borderRadius: '45px',
            fontSize: '1.05rem',
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            paddingLeft: '1.5rem',
            cursor: 'pointer',
            gap: '5px',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles(theme);

    return (
        <>
            {blogData.length > 0 && (
                <Box className={classes.blog} id="blog">
                    <Box className={classes.blogHeaderDiv}>
                        <Typography variant='h1' className={classes.blogHeader} style={{color: theme.primary}}>Blog</Typography>
                    </Box>
                    <Box className={classes.blogBody}>
                        <Box className={classes.blogBodyContainer}>
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </Box>

                        {blogData.length > 3 && (
                            <Box className={classes.blogViewAll}>
                                <Link to="/blog" underline="none" className={classes.viewAllLink} >
                                    <Button className={classes.viewAllButton}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </Box>
                </Box>
            )}

        </>
    )
}

export default Blog
