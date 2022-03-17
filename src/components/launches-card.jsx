const Card = ({ rocketName, setCardOpened, data, setData }) => {
  return (
    <div
      className="launches-card"
      onClick={() => {
        setCardOpened(true)
        setData(data)
      }}
    >
      <h2>{rocketName}</h2>
    </div>
  )
}

export default Card
