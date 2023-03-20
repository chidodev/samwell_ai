import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Comments from './Comments'
import { Context } from './Context'

const Video = (props) => {
  const { questions } = React.useContext(Context)

  const { question } = questions.find((q) => q.id === props.question)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader sx={{ height: 80 }} title={question} />
      <CardContent>
        <ReactPlayer width="100%" height="auto" url={props.src} controls />
      </CardContent>
      <CardActions>
        <Comments appId={props.appId} questionId={props.question} />
      </CardActions>
    </Card>
  )
}

export default Video
