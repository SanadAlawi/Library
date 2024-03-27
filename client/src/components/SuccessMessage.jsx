
const SuccessMessage = ({ message, color }) => {
    return (
      <h1 className={`bg-${color}-500 p-4 text-${color}-100 absolute bottom-0 right-0`}>
          {message}
      </h1>
    )
  }
  

export default SuccessMessage