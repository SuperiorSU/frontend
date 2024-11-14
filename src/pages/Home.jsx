import Container from "../components/global/Container";
import { CiCalendarDate } from "react-icons/ci";
import { TfiMapAlt } from "react-icons/tfi";
import Typewriter from "typewriter-effect";
import ContactCard from "../components/home/ContactCard";
import GrayContainer from "../components/global/GrayContainer";
import CategoryItem from "../components/home/CategoryItem";
import { categories } from "../utils/stats";
import { eventData } from "../utils/stats";
import PastEvent from "../components/home/PastEvent";
import EventInfo from "../components/home/EventInfo";
import CountdownTimer from "../components/home/CountdownTimer";
import TechStack from "../components/home/TechStack";
import InfoCard from "../components/home/InfoCard";

const Home = () => {
  return (
    <div>
      <Container>
        <main className=" w-full p-4 rounded-xl">
          <div className="grid lg:grid-cols-2 h-full lg:gap-0 gap-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 my-auto">
            <div className="lg:col-span-1 col-span-2 place-self-center relative z-[0]">
              <p className="">
                <span className="font-primaryRegular text-2xl">Welcome to</span>
                <br />
                <span className="font-primaryBold lg:text-5xl md:text-5xl text-4xl">
                  DevFest
                </span>
              </p>
              <h1 className="font-primaryBold lg:text-5xl md:text-5xl text-4xl">
                <Typewriter
                  options={{
                    strings: ["Chandigarh 2024"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <br />
              <p className="font-primaryRegular text-sm lg:w-3/4 md:w-3/4 w-full">
                DevFest is a global community-driven tech conference, hosted by
                the Google Developer Groups (GDG) community. Each DevFest event
                is crafted by its GDG organizers to fit the learning needs and
                interests of their local developer community, with a strong
                focus on knowledge exchange, networking, and learning about
                Google developer technologies.
              </p>
              <br />
              <div className="flex space-x-4 items-center">
                <div>
                  <CiCalendarDate size={24} className="me-1 inline-block" />
                  <span className="text-primaryRegular">
                    30th November, 2024
                  </span>
                </div>
                <div>
                  <TfiMapAlt size={22} className="me-1 inline-block" />
                  <span className="text-primaryRegular">
                    <a
                      className="underline"
                      href="https://maps.app.goo.gl/XppGtCKWAJBXUDVP9"
                    >
                      Chandigarh, India
                    </a>
                  </span>
                </div>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full font-medium border-black border mt-4 text-primaryRegular">
                Register Now
              </button>
            </div>
            <div className="lg:col-span-1 col-span-2 place-self-center">
              <img
                src="https://utfs.io/f/BCPfHUjwOM0EHKYnXGx1aXywMKQd2e8GcPUBSmfzHbjW9tA7"
                alt=""
              />
            </div>
          </div>
        </main>
      </Container>
      <div className="py-7"></div>
      <Container>
        <GrayContainer>
          <div>
            <CountdownTimer targetDate={new Date("2024-11-30T00:00:00")} />
          </div>
        </GrayContainer>
      </Container>
      <div className="py-7"></div>
      <Container>
        <div className="grid grid-cols-10 lg:gap-10 md:gap-7 gap-5 ">
          <div className="lg:col-span-1 place-self-center lg:block hidden">
            <img
              src="https://utfs.io/f/BCPfHUjwOM0EVuFgltVBQIsJjdDliaXKbT7r0E9CvzPmO3p4"
              alt=""
            />
          </div>
          {eventData.map((item, index) => (
            <EventInfo
              key={index}
              count={item.count}
              label={item.label}
              imageUrl={item.imageUrl}
            />
          ))}
          <div className="lg:col-span-1 place-self-center lg:block hidden">
            <img
              src="https://utfs.io/f/BCPfHUjwOM0EhYnPHoWRRikCy6cu9HNP2SY4E7IqT830OZsD"
              alt=""
            />
          </div>
        </div>
      </Container>
      <div className="py-7"></div>
      <Container>
        <div className="p-3">
          <h3 className="text-4xl font-primaryBold">What To Expect</h3>
          <div className="my-7 grid gap-3 lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                name={category.name}
                bgColor={category.bgColor}
                rounded={category.rounded}
              />
            ))}
          </div>
          <p className="text-base font-primaryRegular">
            An annual event hosted by the Google Developers Group across the
            world to bring the technology closer to the developers. It is an all
            day developer conference where we aim to focus on multiple
            technologies through lightning talks, sessions, workshops, etc.
          </p>
        </div>
        <div className="py-5"></div>
        <InfoCard/>
        <div className="py-5"></div>
        <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-5 grid-cols-1">
          <div className="lg:col-span-4 md:col-span-3 col-span-1 ">
            <GrayContainer>
              <TechStack />
            </GrayContainer>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1 h-full place-content-center">
            <GrayContainer>
                <div className="relative mx-auto">
                    <img src="https://devfest.gdgpune.in/_nuxt/logo-text.C9TOSKYd.svg" className="w-full h-full object-contain" alt="" />
                    <div className="lg:absolute md:absolute mx-auto w-max lg:left-[55px] md:left-[70px] sm:left-[76px] left-[80px] px-2 py-1 lg:text-xs md:text-xs text-lg font-primaryMedium border rounded-full border-black bg-white">Chandigarh</div>
                </div>
            </GrayContainer>
            <div className="mt-5">
                <img className="w-full h-full object-center" src="https://utfs.io/f/BCPfHUjwOM0EbRlNmuS2hBVZGt69NWYCqy83KaPgQJI0ODsp" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <div className="py-7"></div>
      <Container>
        <div>
          <PastEvent />
        </div>
      </Container>
      <div className="py-7"></div>
      <Container>
        <ContactCard />
      </Container>
      <div className="py-7"></div>
    </div>
  );
};

export default Home;
