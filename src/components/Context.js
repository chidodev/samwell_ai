import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({
    candidates: [],
    applications: [],
    questions: [],
  })

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${process.env.baseUrl}candidates`)
      const candidates = res.data
      res = await axios.get(`${process.env.baseUrl}applications`)
      const applications = res.data
      res = await axios.get(`${process.env.baseUrl}questions`)
      const questions = res.data

      setState({
        candidates: candidates,
        applications: applications,
        questions: questions,
      })
    }

    fetchData()
  }, [])

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Provider
export const Consumer = Context.Consumer
