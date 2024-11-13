
const Container = ({children}) => {
  return (
    <div className='my-6'>
      <div className='lg:w-[80%] md:w-[90%] sm:w-[95%] w-[95%] mx-auto'>
          {children}
      </div>
    </div>
  )
}

export default Container