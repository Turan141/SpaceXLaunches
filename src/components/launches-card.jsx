const Card = ({ rocketName }) => {
  return (
    <div draggable="true" className="launches-card">
      <h2>{rocketName}</h2>
    </div>
  )
}

export default Card
