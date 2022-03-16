import { useState, useEffect } from 'react'

import './App.css'
import { Skeleton } from '@mui/material'

import LaunchContainer from './components/launches-container'

function App() {
  const [pastApi, setPastApi] = useState(null)
  const [nextApi, setNextApi] = useState(null)
  const [myLaunches, setMyLaunches] = useState([])

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v5/launches/past'
    const fetchHandler = async () => {
      await fetch(url)
        .then((data) => data.json())
        .then((data2) => setPastApi(data2))
    }
    function myFunction() {
      let timeout = setTimeout(fetchHandler, 1000)
    }
    myFunction()
  }, [])

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v5/launches/upcoming'
    const fetchHandler = async () => {
      await fetch(url)
        .then((data) => data.json())
        .then((data2) => setNextApi(data2))
    }
    function myFunction() {
      let timeout = setTimeout(fetchHandler, 2000)
    }
    myFunction()
  }, [])

  return (
    <div className="App">
      <div className="launcher-container">
        {pastApi ? (
          <LaunchContainer launchType={'Past Launches'} apidata={pastApi} />
        ) : (
          <Skeleton
            sx={{ bgcolor: 'grey.400' }}
            variant="rectangular"
            width={`100%`}
            height={400}
          />
        )}
      </div>
      <div className="launcher-container">
        {nextApi ? (
          <LaunchContainer
            launchType={'Next Launches'}
            apidata={nextApi}
            setMyLaunches={setMyLaunches}
          />
        ) : (
          <Skeleton
            sx={{ bgcolor: 'grey.400' }}
            variant="rectangular"
            width={`100%`}
            height={400}
          />
        )}
      </div>
      <div className="launcher-container">
        <LaunchContainer launchType={'My Launches'} apidata={myLaunches} />
      </div>
    </div>
  )
}

export default App
