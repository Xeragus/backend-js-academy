import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default function Create() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const createBlog = () => {
    axios.post('http://localhost:3001/create', {
      title,
      content,
      author: 'Boban Sugareski'
    })
    .then((res) => {
      console.log('WUHUUU PRVATA KOMPLETNA APLIKACIJA')
      console.log(res)
    })
    .catch((err) => {
      console.log('SE SLUCI GRESKA :(')
      console.log(err)
    })
  }
  return (
    <div>
      <h1>Write new blog post</h1>
    <div style={{border:"1px solid #E8E6E6", background:"white", width:550, height:500, margin:"auto",}}>
      <form noValidate autoComplete="off">
        <TextField
          style={{width:400, marginTop:25}}
          label="Title"
          onChange={(e) => setTitle(e.target.value)}  />
        <br></br>
        <TextField
          style={{width:400, marginTop:30, marginBottom:30, border:"1px solid #E8E6E6", height:300, padding:20}}
          label="Message"
          onChange={(e) => setContent(e.target.value)}
          multiline
          // rowsMax={4}
          // variant="outlined"
        />  
        <br></br>
        <Button
        style={{width:400}}
        variant="contained"
        color="primary"
        onClick={createBlog}>
          Create
        </Button>
      </form>
    </div>
    </div>
  )
}