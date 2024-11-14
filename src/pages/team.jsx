import React from "react";
import Card from "../components/home/Card";
import { motion } from "framer-motion";
import Background from "../components/home/Background";
const GDG_Chandigarh = [

    {
        name: "Yatin Nayyar",
        role: "Project Engineer",
        image: "https://gdgchandigarh.in/assets/organizers/yatin.webp",
        description: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/hifiveyatin/",
        },
    },
    {
        name: "Harneet Singh",
        role: "Associate Consultant",
        image: "https://gdgchandigarh.in/assets/organizers/harneet.webp",
        description: "By profession I'm working as Associate Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/iharneetsingh/",
        },
    },
    {
        name: "Cherish Santoshi",
        role: "Advisory Board Member",
        image: "https://gdgchandigarh.in/assets/organizers/Cherish.jpeg",
        description: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
        },
    },
    {
        name: "Aashi",
        role: "Co-Founder",
        image: "https://gdgchandigarh.in/assets/organizers/Aashi.jpeg",
        description: "Aashi is the lead organizer for TensorFlow UserGroup Chandigarh and a 2X Kaggle expert. She is a ML enthusiast who loves to work on real world problems.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/aashi-dutt/",
        },
    },
    {
        name: "Ayush Kumar Tiwari",
        role: "Software Engineer", 
        image: "https://gdgchandigarh.in/assets/organizers/ayush.webp",
        description: "Ayush is a Software Engineer at NIWIAI. He loves learning new technologies and applying them in his work. He also enjoys helping others by sharing knowledge and experiences in the tech field",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/itsayu/",
        },
    },
    
];

const GDG_cloud_chandigarh = [
    {
        name: "Cherish Santoshi",
        role: "Organizer",
        image: "https://gdgchandigarh.in/assets/organizers/Cherish.jpeg",
        description: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
        },
    },
    {
        name: "Riya Singh",
        role: "Asst. Co-Organizer",
        image: "https://gdgccdchd.vercel.app/static/media/team2.a20b72c00c9af0b61fbb.png",
        description: "The Asst Co-Organizer of Google Developers Group Cloud Chandigarh. A professional web developer. Currently interning in Machine Learning @NCUE in Taiwan. Passionate about coding and creating a world of her own vision.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/riyasinghs/",
        },
    },
    {
        name: "Sai Kumar Swarnpudi",
        role: "Team Lead",
        image: "https://gdgccdchd.vercel.app/static/media/team3.96021573bce0fbcc54f6.jpg",
        description: "The team lead of Google Developers Group Cloud Chandigarh. Providing stability and playing a pivotal role by handling the crew for the community.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/saikumarswarnapudi/",
        },
    },
    {
        name: "Avneet Kaur",
        role: "Co-Team Lead",
        image: "https://gdgccdchd.vercel.app/static/media/team4.b161b2deb1e2b07c8ca3.jpg",
        description: "Co Team Lead of Google Developers Group Cloud Chandigarh. A passionate team member bringing with a vivid shine.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/avneet-kaur-13845b260/",
        },
    },
    {
        name: "Tushar Shah",
        role: "Graphics Lead",
        image: "https://gdgccdchd.vercel.app/static/media/team5.c2a13a0b3ad99a9f9d51.jpg",
        description: "Graphics Lead of Google Developers Group Cloud Chandigarh. His name reflects graphics itself.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/tushar21shah/",
        },
    },
    {
        name: "Ashis Raj",
        role: "Team Member",
        image: "https://gdgccdchd.vercel.app/static/media/team9.3d549189053871d348f5.jpg",
        description: "Team Member of Google Develoeprs Group Cloud Chandigarh.",
        
    },
    {
        name: "Vedant Nawlakhe",
        role: "Team Member",
        image: "https://gdgccdchd.vercel.app/static/media/team6.85175d6d60371e9ecaa7.jpg",
        description: "Team Member of Google Develoeprs Group Cloud Chandigarh.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vedantnawlakhea/",
        },
    },
];

const GDG_on_campus_leads = [
    {
        name: "Udayan Sharma",
        role: "GDG On Campus Chitkara Community Lead",
        image: "https://i.ibb.co/BG4GWBN/1723979900199.jpg",
        description: "As the GDG On Campus Chitkara Community Lead, I am dedicated to  build and expand our growing community on campus. Through events and mentorship, I connect students with Google’s resources and community.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/udayanmoudgil/",
        },
    },
    
];

const GDG_on_campus_volunteers = [
    {
        name: "Vedant Handa",
        role: "GDG On Campus Chitkara Web-Dev Lead",
        image: "https://i.ibb.co/0GNFyqD/linkdin-profile.jpg",
        description: "As the web dev lead at GDG, my friend brings innovation and precision to every project, making sure the web experiences we create are as smooth as they are impactful. With a passion for design and development, they turn challenges into opportunities and always push the boundaries of what's possible.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vedant-handa-58209a30b/",
        },
    },
    {
        name: "Gursimran Singh",
        role: "GDG On Campus Chitkara Web Developer",
        image: "https://avatars.githubusercontent.com/u/135122793?v=4",
        description: "Building seamless web experiences with a focus on intuitive design and clean, efficient code. As a web developer, I turn coffee into code and bugs into features (sometimes unintentionally).",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/gursimrxnsingh",
        },
    },
    {
        name: "Ghanshyam Agrawal",
        role: "GDG On Campus Chitkara Web Developer",
        image: "https://i.ibb.co/zsBX0Cb/Whats-App-Image-2024-11-13-at-21-50-14-cf1ad0e3.jpg",
        description: "Web developer with a knack for sleek designs and clean code, fusing creativity with precision to bring digital ideas to life and crafting experiences that leave a mark.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/ghanshyam-agrawal-56419b28a/",
        },
    },
    {
        name: "Varsha Singh",
        role: "GDG SLIET Web-Dev Lead",
        image: "https://i.ibb.co/qd8wbkc/Whats-App-Image-2024-11-14-at-12-46-41-c2e60d1e.jpg",
        description: "I am Varsha Kumari, a 3rd yr B.E. student. I am a web developer and currently practising DSA.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/varsha-kumari-038ba1248/",
        },
    },
    {
        name: "Kumar Sujal",
        role: "GDG on Campus SVIET Tech Lead",
        image: "https://i.ibb.co/v4J0DhB/myphoto-copy.jpg",
        description: "Tech Lead @GDG on Campus SVIET | Fullstack DeveloperMy curiosity drives me to push boundaries and seek innovative solutions in the ever-evolving tech world.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/kumar-sujal/",
        },
    },
    {
        name: "Nischaya Garg",
        role: "GDG Chandigarh Web-Dev Lead",
        image: "https://i.ibb.co/3F9gHRX/NG.jpg",
        description: "Web-Dev Lead at Chandigarh University B.E CSE-H (AI&ML) (IBM).",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/nischaya008/ ",
        },
    },
];

const TeamSection = ({ title, members }) => (
    <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {members.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: index * 0.1
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card
                        name={member.name}
                        designation={member.role}
                        imageSrc={member.image}
                        description={member.description}
                        links={member.socialLinks || {}}
                    />
                </motion.div>
            ))}
        </div>
    </div>
);

const TeamPage = () => (
    <div className="p-4 relative flex flex-col items-center sm:p-8 w-full max-w-7xl mx-auto">
        <h1 className="text-left text-2xl sm:text-3xl font-primaryBold mb-4">GDG Chandigarh</h1>
        <p className="text-left font-primaryRegular mb-6 sm:mb-8 text-sm sm:text-base">
            Meet the dedicated team behind GDG who make everything possible.
        </p>
        <TeamSection title="GDG Chandigarh" members={GDG_Chandigarh} />
        <TeamSection title="GDG Cloud Chandigarh" members={GDG_cloud_chandigarh} />
        <TeamSection title="GDG On Campus Leads" members={GDG_on_campus_leads} />
        <TeamSection title="GDG On Campus Volunteers" members={GDG_on_campus_volunteers} />
        <Background />
    </div>
);

export default TeamPage;