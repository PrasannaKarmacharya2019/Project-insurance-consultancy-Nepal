import images from "./images";
import {FaUsers, FaBriefcase, FaGlobe, FaChartLine, FaUserTie, FaAward, FaEye,FaLightbulb,FaPaperPlane, FaRocket, FaShoppingCart, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaHandshake} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
   
    {
        id: 1,
        icon: <FaUserTie style = {{ fill: gradient }} />,
        title: "Values",
        text: "Our goal from the firm's establishment in 2022 has been to create an organization with a defined vision and strategy that will always look forward and operate at the forefront of Insurance Awareness and be a creative, knowledge-based corporation. Individuals and industries are at the center of our view of knowledge innovation, as the protagonists are the people who research and invent to generate solutions. Our vision evolved over the next few years. Today, Insurance Consultancy Nepal Pvt. Ltd. is a leading service provider, with unmatched competence in all of our sectors of expertise."
    },
    
     {
        id: 2,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Business goals & objectives",
        text: "Looking to the future, we are convinced that insurance Consultancy Nepal Pvt. Ltd. not only has a solid foundation and a clear vision, but also the flexibility to continue to grow and meet the challenges of the new era. Insurance Consultancy Nepal Pvt. Ltd. is forging its own way, with a well-defined future plan."
    },
    {
        id: 3, 
        icon: <FaHandshake style = {{ fill: gradient }} />,
        title: "Why Insurance Consultancy?",
        text: [ "The reasons are:",
  "- Peace of mind",
  "- Be Professional",
  "- Hassel free Claim Settlement"
]  },
    {
        id: 4, 
        icon: <FaEye style = {{ fill: gradient }} />,
        title: "Vision Statement",
        text: "The company's growth and operation are guided by the main corporate principle i.e. Quality, effectiveness, and adaptability to market and technology changes."
    },
    {
        id: 5,
        icon: <FaAward style = {{ fill: gradient }} />,
        title: "Quality Policy",
        text: "The company ensures that the services it provides are of high quality and that the projects it undertakes are carried out using cutting-edge technology."
    },
    {
        id: 6,
        icon: <FaChartLine style = {{ fill: gradient }} />,
        title: "Experience",
        text: "Insurance Consultancy Nepal Pvt. Ltd.'s involvement in Nepal projects is a strategic goal and decision. The company's intensive expertise in such operations has ensured that it has the necessary know-how to complete even the most challenging projects successfully."
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaLightbulb style = {{ fill: gradient }} />,
               text: "Our mission is to be Nepal's most successful consulting firm, guided by our four guiding principles: knowledge, effectiveness, reliability, and integrity. For us, a great reason is the use of cutting-edge technology to create ground-breaking services of high quality, as well as the capacity to adapt and evolve to each customer's specific needs. Each project we undertake is accompanied by the accomplishment of our customer's objectives, which we call effectiveness. Our corporate culture is built on the pillars of reliability and integrity. "
    },
    {
        id: 9,
        icon: <AiOutlineStar style = {{ fill: gradient }}  />,
        // title: "Prompt Strategies",
        text: "The maximization of our customers' value and performance, as well as our continual development, are at the core of our concept. assuring the company's steady advance at a national level. Our mission and vision are served and strengthened by the optimized quality of our provided services, their continuous monitoring and follow-up, the faculty of comprehension of our customers' requirements and needs, the specialization and know-how of our staff, and the constant expansion of our activities. In the consulting industry, we are among the best. We assist our clients in achieving their goals and contribute to their ongoing growth. We strive to improve ourselves on a regular basis."
    }
];

const features = [
    {
        id: 10,
   icon: <FaChartLine style={{ fill: gradient }} />,
        title: "Growth strategy",
                   text: "The organization will be able to positively respond to the challenges of current time by utilizing its collected expertise. knowledge, and the dynamics of its partnerships, allowing it to provide experts, state-of-the-art solutions that lead straight to the point of its customers' requirements."
    },
    {
        id: 11,
 icon: <FaGlobe style={{ fill: gradient }} />,
        title: "Services",
        text: "At the national and international levels, Insurance Consultancy Nepal Pvt. Ltd. provides scientifically qualitative and verified advisory services to businesses and organizations. The National Programs are separated into two categories: public and private."
    },
    {
        id: 12,
        title: "Business competitiveness",
        icon: <FaBriefcase style={{ fill: gradient }} />,
        text: ["Insurance Consultancy Nepal Pvt. Ltd. customizes its services to the needs of the customer, striving for more effective collaboration while taking into consideration the customer's environment, requirements, and structures:",
 "- Dedication to the customer",
        "- Flexibility for the ideal satisfaction of needs, Specialized personnel",
        "- Possibility of operation in international and multinational environment",
        "- Adaptability to the operation processes of the customer",
        "- Flexibility in the mode of delivery",
        "- Big experience in work of research and technology",
        "- In order to properly perform each challenge, the organization combines INFRASTRUCTURES, HUMAN RESOURCES, and INTEGRATED PROCESSES."
    ]
 },
    {
        id: 13,
         icon: <FaUsers style={{ fill: gradient }} />,
        title: "Management & Human Resources",
        text: "Mr. BK Shrestha, a Chartered Consultant with a Bachelor of Commerce and a Master of Public Administration, is the firm's Chartered Consultant. Since 1988, he has worked in the insurance industry. He has vast experience and expertise in the Non-Life Insurance market, including positions in Underwriting. Claims, Accounts, and Marketing, as well as counseling and policy development. Finally, Mr. BK Shrestha worked for an insurance company as the Deputy Chief Executive Officer. Insurance Consultancy Nepal Pvt. Ltd.'s staff is made up of high-quality technical experts with significant professional experience. A large number of external collaborators work with the firm. The firm works with a select group of external collaborators/experts who are knowledgeable and experienced in their field. The majority of the external advisers work with the firm on a long-term basis, while some are brought in on a case-by-case basis to help with unique approaches. Insurance Consultancy Nepal Pvt. Ltd. welcomes professionals with at least a bachelor's degree."

    }
];

const portfolio = [
    {
        id: 16,
         title: "Senior Surveyor Mr Lalit KC visited the Consultancy",
        text: "",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Mr  SK Tamot, former CEO of Sidhdharth Insurance and GIC Insurance visited Consultancy",
        text: "",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Mr Kumar B Khatri, former CEO and Mr Laxman Parajuli, Sr Manager, Ajod Insurance visited Consultancy",
        text: "",
        image: images.portfolio_img_3,
    },
     
];

const testimonials = [
    {
        id: 19,
        name: "Mr. Pradip Mohan Dhaubhadel",
        text: "Sr. Consultant",
        image: images.customer_img_1,
       
    },
    {
        id: 20,
        name: "Mr. BK Shrestha",
        text: "Chartered Consultant",
        image: images.customer_img_2,
       
    },
    {
        id: 21,
        name: "Ms. Sajani Bhadel",
        text: "Director-Marketing",
        image: images.customer_img_3,
        rating: 2
    },
   
    
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+977 9851027879 +977 9841200229",
        text: "Call us anytime for expert insurance advice and personalized support"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "iconktm@gmail.com",
        text: "Email us your queries or requests and our team will respond promptly."
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Subidhanagar Kathmandu Nepal",
        text: "Visit our office for a face-to-face consultation with our insurance experts"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;