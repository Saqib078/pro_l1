

const Withoutusecall = (props) => {
    console.log("children without callback component render...")
  return (
    <div onClick={props.handle}>
        {props.button}
    </div>
  )
}

export default Withoutusecall