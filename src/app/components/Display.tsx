
interface Props {
    value: string
}

const Display = (props:Props) => {
    const {value} = props
  return (
    <div className="text-white">
        {value}
    </div>
  )
}

export default Display