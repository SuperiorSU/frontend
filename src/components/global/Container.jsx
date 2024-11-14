const Container = ({children}) => {
  return (
    <div className='flex justify-center items-center my-6'>
      <div className='lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100vw]'>
          {children}
      </div>
    </div>
  )
}

export default Container
