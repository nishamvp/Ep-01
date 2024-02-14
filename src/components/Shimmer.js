const Shimmer = () => {
  let shimmerCards = 10
  let shimmerElements = []

  for (let i = 0; i < shimmerCards; i++) {
    shimmerElements.push(<div key={i} className="shimmer-res-card"></div>)
  }
  return (
    <>
      <div className="shimmer-res-container">{shimmerElements}</div>
    </>
  )
}
export default Shimmer
