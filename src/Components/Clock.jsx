function Clock(props) {
  return (
    <div className='container'>
      <div className='brace'></div>
      <div className='clock'>
        <h1>{props.time}</h1>
        <h2>{props.date}</h2>
      </div>
      <div className='brace'></div>
    </div>
  )
}

export default Clock;