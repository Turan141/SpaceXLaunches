import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import Card from './launches-card'

const LaunchContainer = ({
  isDragabble,
  id,
  launchType,
  apidata,
  setMyLaunches,
}) => {
  const [isDeployed, setDeployed] = useState(false)
  const [isCanceled, setCanceled] = useState(false)
  useEffect(() => {
    console.log(apidata)
  }, [])

  function dragStart(e) {
    e.dataTransfer.setData('Text', e.target.id)
  }

  const CardStack = apidata.slice(0, 3).map((elem) => {
    return (
      <div
        onDragStart={(e) => dragStart(e)}
        draggable={isDragabble}
        id={elem.date_unix}
        className="CardStack"
      >
        <Card rocketName={elem.name} draggable="true" />
      </div>
    )
  })

  function allowDrop(e) {
    e.preventDefault()
  }

  function onDropFn(e) {
    let data = e.dataTransfer.getData('Text')
    if (
      e.target.className === 'launchcard' &&
      e.target.id !== '1' &&
      e.target.id === '3'
    ) {
      e.target.appendChild(document.getElementById(data))
      setDeployed(true)
      setTimeout(() => {
        setDeployed(false)
      }, 1000)
    }

    if (
      e.target.className === 'launchcard' &&
      e.target.id !== '1' &&
      e.target.id === '2'
    ) {
      e.target.appendChild(document.getElementById(data))
      setCanceled(true)
      setTimeout(() => {
        setCanceled(false)
      }, 1000)
    }
    e.preventDefault()
  }

  return (
    <div className="main-launches-div">
      <div className="time-name">
        <h2>{launchType}</h2>
      </div>
      <div
        id={id}
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => onDropFn(e)}
        className="launchcard"
      >
        {CardStack}
        {isDeployed ? (
          <Alert severity="success">
            Successfully added order to you list!
          </Alert>
        ) : null}
        {isCanceled ? (
          <Alert severity="warning">You canceled your order!</Alert>
        ) : null}
      </div>
    </div>
  )
}

export default LaunchContainer
