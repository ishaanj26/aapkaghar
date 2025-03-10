import BuyHomeImage from "./assests/services/service2.avif"
import RentHomeImage from "./assests/services/service1.avif"
import SellHomeImage from "./assests/services/service3.avif"

import CheckListIcon from './assests/icons/checklist-svgrepo-com.svg';
import PartnerShipIcon from './assests/icons/partnership.svg';
import CustomizationIcon from './assests/icons/customized.svg';
import MarketIcon from './assests/icons/market.svg';
import SmilingFaceIcon from './assests/icons/customer.svg';

import Person1 from './assests/persons/person1.avif';
import Person2 from './assests/persons/person2.avif';
import Person4 from './assests/persons/person3.jpg';
import Person3 from './assests/persons/person4.avif';


import House1 from './assests/houses/img1.jpg'
import House2 from './assests/houses/img2.jpg'
import House3 from './assests/houses/img3.jpg'
import House4 from './assests/houses/img4.jpg'
import House5 from './assests/houses/img5.jpg'
import House6 from './assests/houses/img6.jpeg'
import House7 from './assests/houses/img7.jpg'
import House8 from './assests/houses/img8.jpeg'
import House9 from './assests/houses/img9.jpeg'

import Blog1 from './assests/blogs/blog1.avif'
import Blog2 from './assests/blogs/blog2.avif'
import Blog3 from './assests/blogs/blog3.avif'


import { GiFirstAidKit, GiSpikedFence, GiSittingDog, GiPoliceOfficerHead, GiFireplace, GiHomeGarage } from 'react-icons/gi';
import { TbAlarmSmoke, TbAirConditioning, TbWindow } from 'react-icons/tb';
import { IoBedOutline, } from 'react-icons/io5';
import { LuHeater, LuLampCeiling } from 'react-icons/lu';
import { MdSmokeFree, MdOutlinePool, MdConnectedTv, MdElevator } from 'react-icons/md';
import { FaCouch, FaSatelliteDish, FaParking, FaWifi } from 'react-icons/fa';
import { SiRenovate } from 'react-icons/si';

export const LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Listing",
    url: "/listing",
  },
  {
    name: "Properties",
    subLinks: [
      {
        name: "Property 1",
        url: "/",
      },
      {
        name: "Property 2",
        url: "/",
      },
      {
        name: "Property 3",
        url: "/",
      },
      {
        name: "Property 4",
        url: "/",
      },
    ],
    url: "/properties",
  },
  {
    name: "Pages",
    subLinks: [
      {
        name: "About Us",
        url: "/about-us",
      },
      {
        name: "FAQs",
        url: "/FAQs",
      },
      {
        name: "Our Services",
        url: "/our-services",
      },
      {
        name: "Pricing Plans",
        url: "/pricing-plans",
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        name: "Agents",
        url: "/agents",
      }
    ],
    url: "/pages",
  },
  {
    name: "Blog",
    subLinks: [
      {
        name: "Blog List",
        url: "/",
      },
      {
        name: "Blog Deatils",
        url: "/",
      },
    ],
    url: "/blog",
  },
  {
    name: "Contacts",
    url: "/contacts",
  },
];


export const houses = [
  {
    id: 1,
    title: "House in LA",
    city: "Los Angeles",
    district: "Silver Lake",
    street: "456 Sunset Boulevard",
    price: 850000,
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: [
      House1,
    ],
    description:
      "Modern California bungalow with stunning views of the Silver Lake Reservoir. Features an open concept living space, updated kitchen with premium appliances, and a spacious backyard perfect for entertaining. Master suite includes a walk-in closet and spa-like bathroom.",
    garage: 2,
    parkingSpace: true,
    pool: true,
    security: true,
    yearBuilt: 1985,
    status: "For Sale",
    amenities: ["Garage", "Pool", "Security System", "Smart Home", "Garden"],
    mapCoordinates: "34.0522° N, 118.2437° W",
    contactNumber: "+1 323 555 0123",
    email: "silverlake@realestate.com",
    agentId: "LA001",
    listingDate: "2024-12-15",
    floor: "2",
    heatingType: "Central",
    AC: true,
    furnished: false,
    petFriendly: true,
    renovation: "Renovated 2022",
  },
  {
    id: 2,
    title: "House in Miami",
    city: "Miami",
    district: "Brickell",
    street: "789 Bay View Drive",
    price: 1200000,
    type: "House",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 150,
    image: [
      House2
    ],
    description:
      "Luxury waterfront condo in the heart of Brickell. Floor-to-ceiling windows offer breathtaking views of Biscayne Bay. High-end finishes throughout, featuring Italian marble floors and designer kitchen with Sub-Zero appliances.",
    garage: 1,
    parkingSpace: true,
    pool: true,
    security: true,
    yearBuilt: 2019,
    status: "For Sale",
    amenities: ["Swimming Pool", "Gym", "Valet Parking", "24/7 Security", "Spa"],
    mapCoordinates: "25.7617° N, 80.1918° W",
    contactNumber: "+1 305 555 0456",
    email: "brickell@realestate.com",
    agentId: "MIA002",
    listingDate: "2024-11-30",
    floor: "15",
    heatingType: "Heat Pump",
    AC: true,
    furnished: true,
    petFriendly: false,
    renovation: "New Construction",
  },
  {
    id: 3,
    title: "House in Chicago",
    city: "Chicago",
    district: "Lincoln Park",
    street: "321 Willow Street",
    price: 675000,
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 185,
    image: [
      House3],
    description:
      "Charming brick townhouse in historic Lincoln Park. Features original hardwood floors, exposed brick walls, and a newly renovated kitchen. Private rooftop deck offers stunning skyline views. Steps from parks, shops, and restaurants.",
    garage: 1,
    parkingSpace: true,
    pool: false,
    security: true,
    yearBuilt: 1920,
    status: "For Sale",
    amenities: ["WiFi", "Rooftop Deck", "Fireplace", "Wine Cellar"],
    mapCoordinates: "41.9250° N, 87.6353° W",
    contactNumber: "+1 312 555 0789",
    email: "lincolnpark@realestate.com",
    agentId: "CHI003",
    listingDate: "2024-12-01",
    floor: "3",
    heatingType: "Forced Air",
    AC: true,
    furnished: false,
    petFriendly: true,
    renovation: "Kitchen remodeled 2023",
  },
  {
    id: 4,
    title: "House in Seattle",
    city: "Seattle",
    district: "Queen Anne",
    street: "567 Highland Drive",
    price: 925000,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: [
      House4],
    description:
      "Craftsman-style home with panoramic views of Puget Sound and the Olympic Mountains. Featuring a gourmet kitchen, formal dining room, and master suite with private balcony. Finished basement includes home theater and wine cellar.",
    garage: 2,
    parkingSpace: true,
    pool: false,
    security: true,
    yearBuilt: 1925,
    status: "For Sale",
    amenities: ["Air Condition", "Wine Cellar", "Garden", "Smart Home"],
    mapCoordinates: "47.6205° N, 122.3509° W",
    contactNumber: "+1 206 555 0321",
    email: "queenanne@realestate.com",
    agentId: "SEA004",
    listingDate: "2024-12-10",
    floor: "2",
    heatingType: "Radiant",
    AC: false,
    furnished: false,
    petFriendly: true,
    renovation: "Fully restored 2021",
  },
  {
    id: 5,
    title: "House in Austin",
    city: "Austin",
    district: "South Congress",
    street: "890 Music Lane",
    price: 550000,
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    image: [
      House5],
    description:
      "Trendy modern home in vibrant SoCo district. Open floor plan with polished concrete floors, exposed ductwork, and walls of windows. Chef's kitchen features custom cabinetry and high-end appliances. Spacious deck perfect for outdoor living.",
    garage: 1,
    parkingSpace: true,
    pool: false,
    security: true,
    yearBuilt: 2018,
    status: "For Sale",
    amenities: ["Garage", "Smart Home", "Solar Panels", "EV Charging"],
    mapCoordinates: "30.2672° N, 97.7431° W",
    contactNumber: "+1 512 555 0654",
    email: "soco@realestate.com",
    agentId: "AUS005",
    listingDate: "2024-12-05",
    floor: "2",
    heatingType: "Heat Pump",
    AC: true,
    furnished: false,
    petFriendly: true,
    renovation: "New Construction",
  },
];


export const CITYS = [
  {
    img: 'bg-delhi',
    title: 'Delhi',
  },
  {
    img: 'bg-agra',
    title: 'Agra',
  },
  {
    img: 'bg-hyderabad',
    title: 'Hyderabad',
  },
  {
    img: 'bg-chennai',
    title: 'Chennai',
  },
  {
    img: 'bg-mumbai',
    title: 'Mumbai',
  },
  {
    img: 'bg-kashmir',
    title: 'Kashmir',
  },
  {
    img: 'bg-punjab',
    title: 'Punjab',
  },
]



export const OUR_SERVICES = [
  {
    img: BuyHomeImage,
    title: 'Buy A New Home',
    description: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience."
  },
  {
    img: SellHomeImage,
    title: 'Sell A Home',
    description: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale."
  },
  {
    img: RentHomeImage,
    title: 'Rent A Home',
    description: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs."
  },
]



export const BENEFIT_BOXES = [
  {
    icon: CheckListIcon,
    title: 'Proven Expertise',
    description: 'Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.'
  },
  {
    icon: CustomizationIcon,
    title: 'Customized Solutions',
    description: 'We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.'
  },
  {
    icon: PartnerShipIcon,
    title: 'Transparent Partnerships',
    description: 'Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.'
  },
  {
    icon: MarketIcon,
    title: 'Local Market Knowledge',
    description: 'Our team has extensive knowledge of the local market, allowing us to provide expert guidance and tailored advice to help our clients achieve their real estate goals.'
  },
  {
    icon: SmilingFaceIcon,
    title: 'Exceptional Customer Service',
    description: 'We prioritize our clients satisfaction, offering personalized support and dedicated service to ensure a smooth and stress- free real estate experience.'
  }]

export const OUR_TEAM = [
  {
    id: "1",
    name: "Emily Chen",
    position: "Software Engineer",
    url: Person1,
    socials: {
      insta: "instagram.com",
      linkedIn: "linkedin.com",
      x: "x.com",
      facebook: "facebook.com"
    },
    contact: {
      phoneNumber: "123-456-7890",
      gmail: "emilychen@gmail.com"
    }


  },
  {
    id: "2",
    name: "John Doe",
    position: "Broker",
    url: Person2,
    socials: {
      insta: "instagram.com",
      linkedIn: "linkedin.com",
      x: "x.com",
      facebook: "facebook.com"
    },
    contact: {
      phoneNumber: "987-654-3210",
      gmail: "johndoe@gmail.com"
    }
  },
  {
    id: "3",
    name: "Michael Brown",
    position: "Data Analyst",
    url: Person3,
    socials: {
      insta: "instagram.com",
      linkedIn: "linkedin.com",
      x: "x.com",
      facebook: "facebook.com"
    },
    contact: {
      phoneNumber: "555-123-4567",
      gmail: "michaelbrown@gmail.com"
    }
  },
  {
    id: "4",
    name: "Sarah Taylor",
    position: "Web Developer",
    url: Person4,
    socials: {
      insta: "instagram.com",
      linkedIn: "linkedin.com",
      x: "x.com",
      facebook: "facebook.com"
    },
    contact: {
      phoneNumber: "111-222-3333",
      gmail: "sarahtaylor@gmail.com"
    }
  }
]

export const BLOG_DATA = [
  {
    image: Blog1, // Replace with appropriate image import
    title: "Top 5 Tips for First-Time Home Buyers",
    description: "Buying your first home can be overwhelming. Here are five essential tips to help you navigate the process with confidence and make the best decision for your future.",
    date: "2024-01-15"
  },
  {
    image: Blog2, // Replace with appropriate image import
    title: "How to Stage Your Home for a Quick Sale",
    description: "Staging your home effectively can significantly impact how quickly it sells. Learn the best practices to showcase your property and attract potential buyers.",
    date: "2024-02-10"
  },
  {
    image: Blog3, // Replace with appropriate image import
    title: "The Benefits of Renting vs. Buying in 2024",
    description: "Deciding whether to rent or buy? Explore the pros and cons of each option in today's real estate market to determine what's best for your lifestyle and financial goals.",
    date: "2024-03-05"
  }
];

export const FAQs = [
  {
    "title": "General Questions",
    "questions": [
      {
        "question": "Why Should I Use Your Services?",
        "answer": "Our company provides expert real estate solutions tailored to meet your unique needs and preferences."
      },
      {
        "question": "How Do I Get Started With Your Services?",
        "answer": "To begin, simply register on our website and explore the various options available to you."
      },
      {
        "question": "How Secure Are Your Services?",
        "answer": "We utilize advanced encryption and robust security measures to protect your sensitive data and ensure a safe user experience."
      },
      {
        "question": "Is There Customer Support Available?",
        "answer": "Yes, our dedicated customer support team is available to assist you with any questions or concerns you may have."
      },
      {
        "question": "How Can I Update My Account Information?",
        "answer": "To update your account information, please log in to your account and navigate to the 'Account Settings' section."
      },
      {
        "question": "What Are Your Business Hours?",
        "answer": "Our business hours are Monday through Friday, 9:00 AM to 5:00 PM (EST)."
      },
      {
        "question": "How Do I Contact Your Customer Support Team?",
        "answer": "You can contact our customer support team by phone, email, or through our website's contact form."
      }
    ]
  },
  {
    "title": "Cost And Payments",
    "questions": [
      {
        "question": "How Do You Calculate Fees?",
        "answer": "Our fees are calculated based on the specific services you require and the complexity of the task."
      },
      {
        "question": "How Do I Pay My Invoices?",
        "answer": "You can pay your invoices online through our secure payment portal or by mail."
      },
      {
        "question": "Are There Opportunities For Discounts Or Promotions?",
        "answer": "Yes, we occasionally offer discounts and promotions for our services. Please check our website for current offers."
      },
      {
        "question": "Are There Any Hidden Fees Not Displayed In The Pricing Table?",
        "answer": "No, we are transparent about our fees and do not charge any hidden fees."
      },
      {
        "question": "What Is The Refund Procedure?",
        "answer": "If you are not satisfied with our services, you may be eligible for a refund. Please contact our customer support team to initiate the refund process."
      },
      {
        "question": "Is There Financial Or Accounting Support?",
        "answer": "Yes, our team includes experienced financial and accounting professionals who can assist you with your financial needs."
      },
      {
        "question": "Do You Offer Payment Plans?",
        "answer": "Yes, we offer flexible payment plans to help you manage your expenses."
      },
      {
        "question": "What Forms Of Payment Do You Accept?",
        "answer": "We accept all major credit cards, checks, and bank transfers."
      }
    ]
  },
  {
    "title": "Safety and Security",
    "questions": [
      {
        "question": "What Languages Does Your Service Support?",
        "answer": "Our service supports multiple languages, including English, Spanish, French, and more."
      },
      {
        "question": "How Do I Integrate Your Service Into My System?",
        "answer": "Our team can assist you with integrating our service into your system. Please contact us for more information."
      },
      {
        "question": "What Are The Safety Features Of Your System?",
        "answer": "Our system includes advanced security features, such as encryption, firewalls, and access controls, to protect your data."
      },
      {
        "question": "How Can I Request New Features?",
        "answer": "You can request new features by contacting our customer support team or submitting a feature request through our website."
      },
      {
        "question": "Is My Data Protected?",
        "answer": "Yes, we take data protection seriously and have implemented robust measures to safeguard your sensitive information."
      },
      {
        "question": "How Do I Report A Technical Issue?",
        "answer": "If you encounter a technical issue, please contact our customer support team immediately so we can assist you in resolving the problem."
      },
      {
        "question": "Do You Have A Disaster Recovery Plan?",
        "answer": "Yes, we have a comprehensive disaster recovery plan in place to ensure business continuity in the event of an unexpected disruption."
      },
      {
        "question": "How Do You Handle Data Breaches?",
        "answer": "In the unlikely event of a data breach, we have a incident response plan in place to quickly respond and minimize any potential damage."
      }
    ]
  }
]


const features = {
  basic: {
    name: 'Basic',
    features: [
      '1GB of cloud storage',
      '1 user account',
      'Limited support',
    ],
  },
  standard: {
    name: 'Standard',
    features: [
      '10GB of cloud storage',
      '5 user accounts',
      'Priority support',
      'Basic analytics',
    ],
  },
  advanced: {
    name: 'Advanced',
    features: [
      '100GB of cloud storage',
      '10 user accounts',
      'Dedicated support',
      'Advanced analytics',
      'Customizable dashboard',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    features: [
      '1TB of cloud storage',
      'Unlimited user accounts',
      '24/7 Dedicated support',
      'Advanced analytics',
      'Customizable dashboard',
      'Single sign-on (SSO)',
      'Advanced security features',
    ],
  },
};

export const pricingPlans = [
  {
    name: 'Intro',
    price: '$20/month',
    features: features.basic.features,
    popular: false,
    description: 'Perfect for individuals or small teams',
  },
  {
    name: 'Base',
    price: '$99/month',
    features: features.standard.features,
    popular: false,
    description: 'Ideal for growing teams or small businesses',
  },
  {
    name: 'Pro',
    price: '$150/month',
    features: features.advanced.features,
    popular: true,
    description: 'Best for established businesses or large teams',
  },
  {
    name: 'Enterprise',
    price: '$200/month',
    features: features.enterprise.features,
    popular: false,
    description: 'Custom solutions for large enterprises',
  },
];

export const privacyPolicies = [
  {
    label: '1. Terms',
    value: 'Terms',
    content: "At AapkaGhar, we are committed to protecting your personal information and ensuring the security of our services. We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us. These measures include encryption, firewalls, and secure server environments. However, it is essential to understand that no security system is infallible, and we cannot guarantee absolute security.Our policy also encompasses the use of cookies to enhance your browsing experience on our site. By using our services, you agree to the collection and use of your information as outlined in this policy. We advise you to review our terms periodically as they are subject to updates. Your continued use of our services after any changes signifies your acceptance of the modified terms.We are committed to providing a transparent and user-friendly experience. We appreciate your understanding and cooperation in maintaining the security and integrity of our services. If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats. If you have any concerns or need assistance, please do not hesitate to contact us. Our team is dedicated to providing you with the best possible experience, and we are always available to help.In addition to our security measures, we also take steps to ensure that our site is accessible and user-friendly. We strive to provide accurate and up-to-date information, but we cannot guarantee that our site will be free from errors. We may correct any errors or update the content at any time without prior notice.Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes. We are committed to providing a transparent and user-friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously. We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us. These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats. We recommend that you take proactive steps to secure your own devices and protect your personal information. By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user-friendly experience. We appreciate your understanding and cooperation in maintaining the security and integrity of our services. If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats. If you have any concerns or need assistance, please do not hesitate to contact us. Our team is dedicated to providing you with the best possible experience, and we are always available to help.In conclusion, we want to assure you that we take the protection of your personal information seriously. We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us. We continuously monitor and update our security protocols to stay ahead of potential threats. We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures. We are committed to providing a transparent and user-friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats. If you have any concerns or need assistance, please do not hesitate to contact us. Our team is dedicated to providing you with the best possible experience, and we are always available to help."
  },
  {
    label: '2. Limitations',
    value: 'Limitations',
    content:
      " It is also essential to be aware of phishing scams and other fraudulent activities that could compromise your personal information.By using our services, you acknowledge and accept these limitations and the associated risks.We encourage you to contact us immediately if you suspect any unauthorized access to your information.We are committed to providing a transparent and user- friendly experience.We appreciate your understanding and cooperation in maintaining the security and integrity of our services.If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help.In addition to our security measures, we also take steps to ensure that our site is accessible and user - friendly.We strive to provide accurate and up - to - date information, but we cannot guarantee that our site will be free from errors.We may correct any errors or update the content at any time without prior notice.Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes.We are committed to providing a transparent and user - friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously.We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us.These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats.We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user - friendly experience.We appreciate your understanding and cooperation in maintaining the security and integrity of our services.If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help.In conclusion, we want to assure you that we take the protection of your personal information seriously.We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us.We continuously monitor and update our security protocols to stay ahead of potential threats.We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user - friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help."
  },
  {
    label: '3. Revisions and Errata',
    value: 'Revisions and Errata',
    content:
      "We reserve the right to update or modify this privacy policy at any time to reflect changes in our practices, legal requirements, or industry standards. We will notify you of any significant changes by posting the updated policy on our website and, if necessary, by other means.It is your responsibility to review the policy periodically to stay informed about our privacy practices. In addition, there may be instances where the information on our site contains typographical errors, inaccuracies, or omissions. We strive to ensure the accuracy and completeness of the information we provide, but we cannot guarantee that our site will be free from errors.We may correct any errors or update the content at any time without prior notice. Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes. We are committed to providing a transparent and user-friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously. We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us. These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats. We recommend that you take proactive steps to secure your own devices and protect your personal information. By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user-friendly experience. We appreciate your understanding and cooperation in maintaining the security and integrity of our services. If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats. If you have any concerns or need assistance, please do not hesitate to contact us. Our team is dedicated to providing you with the best possible experience, and we are always available to help.In addition to our security measures, we also take steps to ensure that our site is accessible and user-friendly. We strive to provide accurate and up-to-date information, but we cannot guarantee that our site will be free from errors. We may correct any errors or update the content at any time without prior notice.Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes. We are committed to providing a transparent and user-friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously. We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us. These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats. We recommend that you take proactive steps to secure your own devices and protect your personal information. By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user-friendly experience. We appreciate your understanding and cooperation in maintaining the security and integrity of our services. If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats. If you have any concerns or need assistance, please do not hesitate to contact us. Our team is dedicated to providing you with the best possible experience, and we are always available to help."
  },
  {
    label: '4. Site Terms of Use Modifications',
    value: 'Modifications',
    content:
      "We reserve the right to modify the terms of use for our site at any time without prior notice. These modifications may include changes to the services we offer, updates to our policies, or adjustments to the terms and conditions governing your use of our site.By accessing and using our site, you agree to be bound by the modified terms.We recommend that you review the terms of use regularly to stay informed about any changes.If you do not agree with the modified terms, you should discontinue your use of our site and services immediately.Your continued use of our site following the posting of any modifications constitutes your acceptance of the changes.We are committed to providing a transparent and user - friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously.We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us.These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats.We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user - friendly experience.We appreciate your understanding and cooperation in maintaining the security and integrity of our services.If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help.In addition to our security measures, we also take steps to ensure that our site is accessible and user - friendly.We strive to provide accurate and up - to - date information, but we cannot guarantee that our site will be free from errors.We may correct any errors or update the content at any time without prior notice.Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes.We are committed to providing a transparent and user - friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously.We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us.These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats.We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user - friendly experience.We appreciate your understanding and cooperation in maintaining the security and integrity of our services.If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help."
  },
  {
    label: '5. Risks',
    value: 'Risks',
    content:
      "Using our site and services involves certain risks, including the potential for unauthorized access to your personal information. Despite our efforts to implement robust security measures, no system is completely immune to cyber threats.It is essential to understand the risks associated with online activities and take proactive steps to protect your information.These steps include using strong passwords, enabling two-factor authentication, and being vigilant about suspicious emails or links.Additionally, there may be risks related to the real estate transactions facilitated through our platform.We strive to provide accurate and up - to - date information, but we cannot guarantee the completeness or accuracy of all property listings or market data.It is essential to conduct your own research and seek professional advice when making real estate decisions.By using our site and services, you acknowledge and accept these risks.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help.In addition to our security measures, we also take steps to ensure that our site is accessible and user - friendly.We strive to provide accurate and up - to - date information, but we cannot guarantee that our site will be free from errors.We may correct any errors or update the content at any time without prior notice.Your continued use of our site and services following the posting of any revisions or corrections signifies your acceptance of the changes.We are committed to providing a transparent and user - friendly experience, and we appreciate your understanding and cooperation in maintaining the security and integrity of our services.We also want to assure you that we take the protection of your personal information seriously.We implement robust security measures to protect the confidentiality and integrity of the data you entrust to us.These measures include encryption, firewalls, and secure server environments.We continuously monitor and update our security protocols to stay ahead of potential threats.We recommend that you take proactive steps to secure your own devices and protect your personal information.By using our services, you acknowledge and accept the risks associated with online activities and the limitations of our security measures.We are committed to providing a transparent and user - friendly experience.We appreciate your understanding and cooperation in maintaining the security and integrity of our services.If you have any questions or concerns about our privacy policy or the accuracy of the information on our site, please contact us for clarification.We are committed to supporting you and providing a secure and reliable platform, but we cannot eliminate all potential threats.If you have any concerns or need assistance, please do not hesitate to contact us.Our team is dedicated to providing you with the best possible experience, and we are always available to help."
  },
];

// 

export const getRandomColor = () => {
  const colors = ['#FF69B4', '#33CC33', '#6666CC', '#CC3333', '#CCCC33'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const TOTAL_AMENITIES = [
  { value: "air_condition", label: "Air Condition" },
  { value: "cable_tv", label: "Cable TV" },
  { value: "ceiling_height", label: "Ceiling Height" },
  { value: "fireplace", label: "Fireplace" },
  { value: "elevator", label: "Elevator" },
  { value: "fence", label: "Fence" },
  { value: "garden", label: "Garden" },
  { value: "floor", label: "Floor" },
  { value: "furnishing", label: "Furnishing" },
  { value: "garage", label: "Garage" },
  { value: "pet_friendly", label: "Pet Friendly" },
  { value: "heating", label: "Heating" },
  { value: "intercom", label: "Intercom" },
  { value: "parking", label: "Parking" },
  { value: "wifi", label: "WiFi" },
  { value: "renovation", label: "Renovation" },
  { value: "security", label: "Security" },
  { value: "swimming_pool", label: "Swimming Pool" },
  { value: "window_type", label: "Window Type" },
  { value: "smoke_alarm", label: "Smoke Alarm" },
  { value: "carbon_alarm", label: "Carbon Alarm" },
  { value: "first_aid_kit", label: "First Aid Kit" },
];


export const propertyOptions = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "villa", label: "Villa" },
  { value: "duplex", label: "Duplex" },
  { value: "loft", label: "Loft" },
  { value: "builder_floor", label: "Builder Floor" }
];


export const neighborhoods = [
  {
    name: "North Delhi",
    mapCoordinates: "28.7041° N, 77.1025° E"
  },
  {
    name: "South Delhi",
    mapCoordinates: "28.5201° N, 77.2201° E"
  },
  {
    name: "East Delhi",
    mapCoordinates: "28.6500° N, 77.3000° E"
  },
  {
    name: "West Delhi",
    mapCoordinates: "28.6500° N, 77.1000° E"
  },
  {
    name: "Central Delhi",
    mapCoordinates: "28.6301° N, 77.2201° E"
  },
  {
    name: "Dwarka",
    mapCoordinates: "28.5901° N, 77.0501° E"
  },
  {
    name: "Rohini",
    mapCoordinates: "28.7400° N, 77.0700° E"
  },
  {
    name: "Pitampura",
    mapCoordinates: "28.6800° N, 77.1300° E"
  },
  {
    name: "Shalimar Bagh",
    mapCoordinates: "28.7200° N, 77.1400° E"
  },
  {
    name: "Model Town",
    mapCoordinates: "28.6800° N, 77.2100° E"
  },
  {
    name: "Kamla Nagar",
    mapCoordinates: "28.6700° N, 77.2000° E"
  },
  {
    name: "Karol Bagh",
    mapCoordinates: "28.6500° N, 77.1900° E"
  },
  {
    name: "Paharganj",
    mapCoordinates: "28.6302° N, 77.2202° E"
  },
  {
    name: "Connaught Place",
    mapCoordinates: "28.6300° N, 77.2200° E"
  },
  {
    name: "Saket",
    mapCoordinates: "28.5200° N, 77.2200° E"
  },
  {
    name: "Hauz Khas",
    mapCoordinates: "28.5501° N, 77.2601° E"
  },
  {
    name: "Green Park",
    mapCoordinates: "28.5600° N, 77.2100° E"
  },
  {
    name: "Defence Colony",
    mapCoordinates: "28.5800° N, 77.2400° E"
  },
  {
    name: "Lajpat Nagar",
    mapCoordinates: "28.5900° N, 77.2600° E"
  },
  {
    name: "Kalkaji",
    mapCoordinates: "28.5300° N, 77.2700° E"
  },
  {
    name: "Nehru Place",
    mapCoordinates: "28.5500° N, 77.2600° E"
  },
  {
    name: "Chandni Chowk",
    mapCoordinates: "28.6600° N, 77.2400° E"
  },
  {
    name: "Sadar Bazaar",
    mapCoordinates: "28.6700° N, 77.2300° E"
  },
  {
    name: "Kashmere Gate",
    mapCoordinates: "28.6800° N, 77.2400° E"
  },
  {
    name: "Civil Lines",
    mapCoordinates: "28.6900° N, 77.2500° E"
  },
  {
    name: "Mayur Vihar",
    mapCoordinates: "28.6100° N, 77.2900° E"
  },
  {
    name: "Patparganj",
    mapCoordinates: "28.6200° N, 77.3000° E"
  },
  {
    name: "Laxmi Nagar",
    mapCoordinates: "28.6300° N, 77.3100° E"
  },
  {
    name: "Preet Vihar",
    mapCoordinates: "28.6400° N, 77.3200° E"
  },
  {
    name: "Vivek Vihar",
    mapCoordinates: "28.6500° N, 77.3300° E"
  },
  {
    name: "Shahdara",
    mapCoordinates: "28.6600° N, 77.3400° E"
  },
  {
    name: "Seelampur",
    mapCoordinates: "28.6700° N, 77.3500° E"
  },
  {
    name: "Yamuna Vihar",
    mapCoordinates: "28.6800° N, 77.3600° E"
  },
  {
    name: "Janakpuri",
    mapCoordinates: "28.6200° N, 77.0800° E"
  },
  {
    name: "Tilak Nagar",
    mapCoordinates: "28.6301° N, 77.0901° E"
  },
  {
    name: "Rajouri Garden",
    mapCoordinates: "28.6401° N, 77.1001° E"
  },
  {
    name: "Tagore Garden",
    mapCoordinates: "28.6501° N, 77.1101° E"
  },
  {
    name: "Subhash Nagar",
    mapCoordinates: "28.6600° N, 77.1200° E"
  },
  {
    name: "Kirti Nagar",
    mapCoordinates: "28.6701° N, 77.1301° E"
  },
  {
    name: "Moti Nagar",
    mapCoordinates: "28.6800° N, 77.1400° E"
  },
  {
    name: "Ramesh Nagar",
    mapCoordinates: "28.6900° N, 77.1500° E"
  },
  {
    name: "Dwarka Sector 1",
    mapCoordinates: "28.5900° N, 77.0500° E"
  },
  {
    name: "Dwarka Sector 2",
    mapCoordinates: "28.6000° N, 77.0600° E"
  },
  {
    name: "Dwarka Sector 3",
    mapCoordinates: "28.6100° N, 77.0700° E"
  },
  {
    name: "Dwarka Sector 4",
    mapCoordinates: "28.6201° N, 77.0801° E"
  },
  {
    name: "Dwarka Sector 5",
    mapCoordinates: "28.6300° N, 77.0900° E"
  },
  {
    name: "Dwarka Sector 6",
    mapCoordinates: "28.6400° N, 77.1000° E"
  },
  {
    name: "Dwarka Sector 7",
    mapCoordinates: "28.6500° N, 77.1100° E"
  },
  {
    name: "Dwarka Sector 8",
    mapCoordinates: "28.6601° N, 77.1201° E"
  },
  {
    name: "Dwarka Sector 9",
    mapCoordinates: "28.6700° N, 77.1300° E"
  },
  {
    name: "Dwarka Sector 10",
    mapCoordinates: "28.6801° N, 77.1401° E"
  },
  {
    name: "Noida Sector 1",
    mapCoordinates: "28.5400° N, 77.3200° E"
  },
  {
    name: "Noida Sector 2",
    mapCoordinates: "28.5500° N, 77.3300° E"
  },
  {
    name: "Noida Sector 3",
    mapCoordinates: "28.5600° N, 77.3400° E"
  },
  {
    name: "Noida Sector 4",
    mapCoordinates: "28.5700° N, 77.3500° E"
  },
  {
    name: "Noida Sector 5",
    mapCoordinates: "28.5800° N, 77.3600° E"
  },
  {
    name: "Noida Sector 6",
    mapCoordinates: "28.5900° N, 77.3700° E"
  },
  {
    name: "Noida Sector 7",
    mapCoordinates: "28.6000° N, 77.3800° E"
  },
  {
    name: "Noida Sector 8",
    mapCoordinates: "28.6100° N, 77.3900° E"
  },
  {
    name: "Noida Sector 9",
    mapCoordinates: "28.6200° N, 77.4000° E"
  },
  {
    name: "Noida Sector 10",
    mapCoordinates: "28.6300° N, 77.4100° E"
  },
  {
    name: "Gurgaon Sector 1",
    mapCoordinates: "28.4600° N, 77.0300° E"
  },
  {
    name: "Gurgaon Sector 2",
    mapCoordinates: "28.4700° N, 77.0400° E"
  },
  {
    name: "Gurgaon Sector 3",
    mapCoordinates: "28.4800° N, 77.0500° E"
  },
  {
    name: "Gurgaon Sector 4",
    mapCoordinates: "28.4900° N, 77.0600° E"
  },
  {
    name: "Gurgaon Sector 5",
    mapCoordinates: "28.5000° N, 77.0700° E"
  },
  {
    name: "Gurgaon Sector 6",
    mapCoordinates: "28.5100° N, 77.0800° E"
  },
  {
    name: "Gurgaon Sector 7",
    mapCoordinates: "28.5200° N, 77.0900° E"
  },
  {
    name: "Gurgaon Sector 8",
    mapCoordinates: "28.5300° N, 77.1000° E"
  },
  {
    name: "Gurgaon Sector 9",
    mapCoordinates: "28.5400° N, 77.1100° E"
  },
  {
    name: "Gurgaon Sector 10",
    mapCoordinates: "28.5500° N, 77.1200° E"
  }
]



export const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case "Air Condition":
      return <TbAirConditioning className="w-5 h-5 text-blue-500" />;
    case "Cable TV":
      return <MdConnectedTv className="w-5 h-5 text-blue-500" />;
    case "Ceiling Height":
      return <LuLampCeiling className="w-5 h-5 text-blue-500" />;
    case "Fireplace":
      return <GiFireplace className="w-5 h-5 text-blue-500" />;
    case "Elevator":
      return <MdElevator className="w-5 h-5 text-blue-500" />;
    case "Fence":
      return <GiSpikedFence className="w-5 h-5 text-blue-500" />;
    case "Furnishing":
      return <FaCouch className="w-5 h-5 text-blue-500" />;
    case "Garage":
      return <GiHomeGarage className="w-5 h-5 text-blue-500" />;
    case "Pet Friendly":
      return <GiSittingDog className="w-5 h-5 text-blue-500" />;
    case "Heating":
      return <LuHeater className="w-5 h-5 text-blue-500" />;
    case "Intercom":
      return <FaSatelliteDish className="w-5 h-5 text-blue-500" />;
    case "Parking":
      return <FaParking className="w-5 h-5 text-blue-500" />;
      return <FaParking className="w-5 h-5 text-blue-500" />;
    case "WiFi":
      return <FaWifi className="w-5 h-5 text-blue-500" />;
    case "Renovation":
      return <SiRenovate className="w-5 h-5 text-blue-500" />;
    case "Security":
      return <GiPoliceOfficerHead className="w-5 h-5 text-blue-500" />;
    case "Swimming Pool":
      return <MdOutlinePool className="w-5 h-5 text-blue-500" />;
    case "Window Type":
      return <TbWindow className="w-5 h-5 text-blue-500" />;
    case "First Aid Kit":
      return <GiFirstAidKit className="w-5 h-5 text-blue-500" />;
    case "Garden":
      return <IoBedOutline className="w-5 h-5 text-blue-500" />;
    case "Smoke Alarm":
      return <TbAlarmSmoke className="w-5 h-5 text-blue-500" />;
    case "Carbon Alarm":
      return <MdSmokeFree className="w-5 h-5 text-blue-500" />
    default:
      return null;
  }
};