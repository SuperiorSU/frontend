import { pastData } from "../../utils/stats";


const PastEvent = () => {
  return (
    <section className="bg-white my-5">
      <h3 className="text-center text-4xl font-primaryBold">Last Year at DevFest</h3>
      <p className="my-3 text-center p-1">DevFest 2023 was an unforgettable experience, uniting 1,000+ passionate participants and 35+ expert speakers for a day filled with inspiration and learning. Attendees engaged in 25+ dynamic sessions, featuring lightning talks, workshops, and discussions on cutting-edge technologies. The event showcased the power of community, collaboration, and knowledge exchange, with participants gaining insights into the latest trends and tools in tech.</p>
      <div className="my-5">
        <img className="rounded-xl mx-auto object-cover w-full h-96" src="https://blogger.googleusercontent.com/img/a/AVvXsEgm6JhnAjRDhX_TJ7XpTBmMEs84VQa1dlKnI4KHxI7KengLd0uRHjmbSObEZhLfjDqVcNl3xVJcf_J4GJz1FV5A2bu1vhe8kC8gZ-vke03nJ0a1zeo2Sr8YH7LJARfKingNtvomCBvDn-QAWjMvlSH1gRBYt3Nc1y5XLTVJSUr6z6MGZglR1XNr9drGqaw" alt="" />
      </div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
        <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          
        </div>
        <div className="">
          <div className="grid gap-3 space-x-4 space-y-4 my-3 lg:grid-cols-2 md:grid-cols-2 w-full h-full grid-rows-2 grid-cols-2">
            {pastData.map((item, index) => (

              <div
              className="lg:col-span-1 p-6 row-span-1 md:col-span-1 min-h-full w-full h-full place-self-center col-span-1 bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <h3 className="font-primaryMedium lg:text-3xl md:text-2xl text-2xl text-center">{item.count}</h3>
              <p className="font-primaryRegular text-center">{item.label}</p>
            </div>
            ))}
          </div>
          
          
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default PastEvent;
