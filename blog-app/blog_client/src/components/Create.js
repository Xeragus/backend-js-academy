import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Create() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const createBlog = () => {
    console.log('se kreira nov blog post')
    console.log(title)
    console.log(content)
  }

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField label="Title"
                   onChange={(e) => setTitle(e.target.value)}  />
        <br></br>
        <TextField
          label="Multiline"
          onChange={(e) => setContent(e.target.value)}
          multiline
          rowsMax={4}
          variant="outlined"
        />  
        <br></br>
        <Button variant="contained" color="primary" onClick={createBlog}>
          Create
        </Button>
      </form>
    </div>
  )
}
