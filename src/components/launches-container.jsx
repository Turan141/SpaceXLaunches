import LauncherCard from './launches-card'

const LaunchContainer = () => {
  return (
    <div>
      <h2>PAST LAUNCHES</h2>
      <div className="launcher-container">
        <LauncherCard />
        <LauncherCard />
        <LauncherCard />
      </div>
    </div>
  )
}

export default LaunchContainer
