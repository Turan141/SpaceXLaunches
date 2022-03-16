import { useEffect } from 'react'

import Card from './launches-card'

const LaunchContainer = ({ launchType, apidata, setMyLaunches }) => {
  useEffect(() => {
    console.log(apidata)
  }, [])

  const CardStack = apidata.slice(0, 3).map((elem) => {
    return (
      <div className="CardStack" key={elem.name}>
        <Card rocketName={elem.name} />
      </div>
    )
  })

  return (
    <div className="main-launches-div">
      <div className="time-name">
        <h2>{launchType}</h2>
      </div>
      <div className="launchcard">{CardStack}</div>
    </div>
  )
}

export default LaunchContainer
