import { useState, useEffect } from 'react'

import './App.css'

import LaunchContainer from './components/launches-container'

function App() {
  const [pastApi, setPastApi] = useState(null)
  const [nextApi, setNextApi] = useState(null)
  const [myLaunches, setMyLaunches] = useState(null)

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v5/launches/past'
    const fetchHandler = async () => {
      await fetch(url)
        .then((data) => data.json())
        .then((data2) => setPastApi(data2))
    }
    fetchHandler()
  }, [])

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v5/launches/upcoming'
    const fetchHandler = async () => {
      await fetch(url)
        .then((data) => data.json())
        .then((data2) => setNextApi(data2))
    }
    fetchHandler()
  }, [])

  return (
    <div className="App">
      <LaunchContainer />
      <LaunchContainer />
      <LaunchContainer />
      <button
        onClick={() => {
          console.log(pastApi, nextApi)
        }}
      >
        dwadww
      </button>
    </div>
  )
}

export default App
