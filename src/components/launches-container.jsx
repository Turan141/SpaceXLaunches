import { useState } from 'react'
import Alert from '@mui/material/Alert'

import Card from './launches-card'

const LaunchContainer = ({
  isDragabble,
  id,
  launchType,
  apidata,
  setCardOpened,
  setData,
}) => {
  const [isDeployed, setDeployed] = useState(false)
  const [isCanceled, setCanceled] = useState(false)

  function dragStart(e) {
    e.dataTransfer.setData('Text', e.target.id)
  }

  const CardStack = apidata.slice(0, 3).map((elem) => {
    return (
      <div
        key={elem.date_unix}
        onDragStart={(e) => dragStart(e)}
        draggable={isDragabble}
        id={elem.date_unix}
        className="CardStack"
      >
        <Card
          rocketName={elem.name}
          setCardOpened={setCardOpened}
          draggable="true"
          data={elem}
          setData={setData}
        />
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
      let answer = ''
      let confirm = () => {
        return (answer = prompt('Are you sure?!  Answer only - YES or NO'))
      }
      confirm()
      if (answer === 'yes' || answer === 'YES') {
        e.target.appendChild(document.getElementById(data))
        setCanceled(true)
        setTimeout(() => {
          setCanceled(false)
        }, 1000)
      }
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
