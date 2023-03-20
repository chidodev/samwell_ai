import React, { useContext, useState } from 'react'
import { Context } from './Context'
import axios from 'axios'
import { Box, Button, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Comments = (props) => {
  const [comment, setComment] = useState({
    comment: '',
    applcation: {},
  })

  const onChange = (e) =>
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    })

  const value = useContext(Context)
  const { applications } = value
  const application = applications.find((a) => a.id === props.appId)

  const onSubmit = (e) => {
    e.preventDefault()

    const { videos } = application
    //Updating the Comments field
    videos.filter((v) =>
      v.questionId === props.questionId ? (v.comments = comment.comment) : null
    )

    axios
      .put(`${process.env.baseUrl}applications/${props.appId}`, application)
      .then((res) => console.log(res))

    setComment({ ...comment, comment: '' })
  }

  return (
    <Box padding={1} width="100%">
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <TextField
          size="small"
          id="outlined-basic"
          name="comment"
          label="Comment"
          variant="outlined"
          value={comment.comment}
          onChange={onChange}
        />

        <Button size="large" type="submit" width="auto" variant="outlined">
          <ArrowForwardIcon />
        </Button>
      </form>
    </Box>
  )
}

export default Comments
