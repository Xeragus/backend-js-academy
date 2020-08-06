import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function Home() {
  const classes = useStyles()
  const [posts, setPosts] = useState([])

  useEffect(function() {
    axios.get('http://localhost:3001/posts')
    .then(res => {
     setPosts(res.data.posts)
    })
    .catch(err => {
     console.log(err)
    })
  }, []);

  const deletePost = (postId) => {
    axios.delete('http://localhost:3001/posts/' + postId)
         .then(res => {
          setPosts(res.data.posts)
         })
         .catch(err => {
          console.log('error occurred: ' + err)
         })
  }

  return (
    <TableContainer component={Paper} style={{width:1000, margin:"auto"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:900, margin:"auto"}}>
        <TableHead>
          <TableRow>
            <TableCell>#ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Posted at</TableCell>
            <TableCell align="right">Posted by</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => {
            return <TableRow key={post._id}>
                    <TableCell component="th" scope="row">
                      {post._id}
                    </TableCell>
                    <TableCell align="right">{post.title}</TableCell>
                    <TableCell align="right">{post.content}</TableCell>
                    <TableCell align="right">{post.author}</TableCell>
                    <TableCell align="right"><Button onClick={() => { deletePost(post._id) }}>Delete</Button></TableCell>
                  </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}