const EventInfo = ({ count, label, imageUrl }) => {
    return (
      <div
        className="lg:col-span-2 w-full h-full place-self-center md:col-span-5 min-h-64 col-span-5 bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3 className="font-primaryMedium lg:text-5xl md:text-3xl text-3xl text-center">{count}</h3>
        <p className="font-primaryRegular text-center">{label}</p>
      </div>
    );
  };
  export default EventInfo;