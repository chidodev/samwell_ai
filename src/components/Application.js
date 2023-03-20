import { Grid } from '@mui/material'
import React from 'react'
import { Context } from './Context'
import Video from './Video'

const Application = (props) => {
  const { applications } = React.useContext(Context)
  const app = applications.find((a) => a.id === props.appId)
  const { videos } = app

  return (
    <Grid container spacing={3}>
      {videos.map((v, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Video
            key={index}
            appId={app.id}
            src={v.src}
            question={v.questionId}
            comment={v.comments}
          />
        </Grid>
      ))}
    </Grid>
  )
}
export default Application
