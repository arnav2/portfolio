import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import SingleBlog from '../components/Blog/SingleBlog/SingleBlog';
import { ThemeContext } from '../contexts/ThemeContext';
import { blogData } from '../data/blogData'
import { headerData } from '../data/headerData'
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const BlogPage = () => {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })


    const useStyles = makeStyles((t) => ({
        blogPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            backgroundColor: theme.secondary
        },
        blogPageHeaderDiv: {
            height: '35vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        },
        blogPageHeader: {
            fontSize: '4rem',
            fontFamily: 'var(--primaryFont)'
        },
        blogPageContainer: {
            padding: '3rem 2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        blogSearch: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        blogInput: {
            width: '30%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.25rem 1rem'
        },
        blogsContainer: {
            marginTop: '5rem',
            width: '100%'
        },
        blogGrid: {
            display: 'flex',
            gap: '4rem'
        },
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <Box className={classes.blogPage}>
            <Helmet>
                <title>{headerData.name} | Blog</title>
            </Helmet>
            <Box className={classes.blogPageHeaderDiv} style={{backgroundColor: theme.primary}}>
                <Link to="/">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <Typography variant='h1' className={classes.blogPageHeader} style={{color: theme.secondary}}>Blogs</Typography>
            </Box>
            <Box className={classes.blogPageContainer}>
                <Box className={classes.blogSearch}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." className={classes.search}/>
                </Box>
                <Box className={classes.blogsContainer}>
                    <Grid className={classes.blogGrid} container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.reverse().map(blog => (
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
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default BlogPage
