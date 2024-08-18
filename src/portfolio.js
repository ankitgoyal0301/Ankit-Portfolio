/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ankit's Portfolio",
  // TODO
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ankit Goyal Portfolio",
    type: "website",
    // TODO
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ankit Goyal",
  logo_name: "Ankit Goyal",
  nickname: "Software Development Engineer",
  // TODO
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1DUaGsveiVjDJpYuvKomF5OsEUrCvcBlk/view?usp=sharing",
  // TODO
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ankitgoyal0301",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "Github",
    link: "https://github.com/ankitgoyal0301",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ankitgoyal0301/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:goyalankit3129@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100026461058569",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Quora",
    link: "https://www.quora.com/profile/Ankit-Goyal-233",
    fontAwesomeIcon: "fa-quora", // Reference https://fontawesome.com/icons/quora?style=brands
    backgroundColor: "#B92B27", // Reference https://simpleicons.org/?q=quora
  },
];

// Full Stack Development, AI and deep learning, Blockchain
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Efficiently developing cross-platform mobile applications with React Native",
        "⚡ Building robust application backends with Spring Boot & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#78ac54",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            color: "#000",
          },
        },
      ],
    },
    {
      title: "AI and Deep learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable, production-ready models for deep learning and statistical applications",
        "⚡ Expertise in Computer Vision, utilizing Convolutional Neural Networks (CNNs) for image recognition and analysis",
        "⚡ Proficient in Natural Language Processing (NLP), applying RNNs for text analysis and language models",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Blockchain Development",
      fileName: "BlockchainDevImg",
      skills: [
        "⚡ Developing and deploying smart contracts on the Ethereum network, creating decentralized applications (DApps)",
        "⚡ Proficiency in Solidity smart contract development, leveraging MetaMask and Infura for seamless blockchain interactions",
        "⚡ Enabled interoperability between blockchains and executed cross-chain atomic swaps across Ethereum test networks (Ropsten, Rinkeby, Goerli, Kovan)."
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
          style: {
            color: "#343434",
          },
        },
        {
          skillName: "Blockchain",
          fontAwesomeClassname: "icon-park-outline:blockchain",
          style: {
            color: "#14adc0",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ankit_0301/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ankit_0301",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ankit_0301",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/ankit_0301",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ankit_0301",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab Engineering College(Deemed to be University), Chandigarh",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "pec_logo.png",
      alt_name: "PEC Chandigarh",
      duration: "2018 - 2022",
      result: "CGPA: 9.7/10",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, various Programming Languages and Full Stack Development.",
        "⚡ I was awarded the Silver Medal for Overall Academic Performance and Best Major Project in Computer Science and Engineering, 2022.",
        "⚡ I served as the President and Competitive Programming Lead at Codechef PEC Chapter, as well as the Secretary and Executive Body Member at PEC ACM Student Chapter.",
      ],
      website_link: "https://pec.ac.in/",
    },
    {
      title: "Sri Guru Gobind Singh Senior Secondary School, Chandigarh",
      subtitle: "Grade 12 - Science, Non-Medical",
      logo_path: "sggs_chd_logo.png",
      alt_name: "Sri Guru Gobind Singh School",
      duration: "2016 - 2018",
      result: "Percentage: 92.8%",
      descriptions: [
        "⚡ I studied core subjects like Physics, Chemistry, and Mathematics (PCM).",
        "⚡ I secured an All India Rank (AIR) of 4582 in JEE Mains 2018, amidst intense competition from over one million candidates, achieving a percentile of over 99.5.",
        "⚡ Successfully qualified for the prestigious AY2017 SIA (Singapore Airlines) Youth Scholarship Selection Test, offering scholarships for a 2-year pre-university course in Singapore.",
      ],
      website_link: "https://www.sggs35school.com/",
    },
    {
      title: "Chandigarh Baptist Senior Secondary School, Chandigarh",
      subtitle: "Grade 10 - High school",
      logo_path: "chd-baptist-logo.png",
      alt_name: "Chandigarh Baptist School",
      duration: "2003 - 2016",
      result: "CGPA: 10/10",
      descriptions: [
        "⚡ During high school, I focused on building a strong foundation through diverse subjects and activities, honing skills across various disciplines.",
        "⚡ As Head Boy, I led the school and organized diverse events and functions, ensuring discipline and decorum. Additionally, as House Vice-Captain, I contributed to creating a dynamic and inclusive school environment.",
        "⚡ Earned top ranks in renowned international Olympiads: State Rank 13 in Mathematics and Zonal Ranks 3 & 6 in Unified International English Olympiads.",
      ],
      website_link: "http://www.chdbaptist.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/4D6T7ABNV592",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Architecting on AWS",
      subtitle: "- Disha Babla",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ja-phhCGX2uKojfpjx9nZ6cV-CPeYu1l/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#E5E5E5",
    },
    {
      title: "Blockchain Basics",
      subtitle: "- University at Buffalo, Coursera",
      logo_path: "blockchain_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QE8Q72J9XVD7",
      alt_name: "Blockchain basics",
      color_code: "#aaa7cc",
    },
    {
      title: "ICPC Amritapuri Regionalist, 2020",
      subtitle: "- ACM ICPC",
      logo_path: "icpc_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "ACM ICPC",
      color_code: "#ADD8E6",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/WJGGUXZJFBHU",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Smart Contracts",
      subtitle: "- University at Buffalo, Coursera",
      logo_path: "smart_contracts_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/7CCXFUVA539T",
      alt_name: "Smart Contracts",
      color_code: "#1F70C199",
    },
    {
      title: "Ethereum Developer Masterclass",
      subtitle: "- Thomas Wiesner, Udemy",
      logo_path: "ethereum_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DpNPC8pF-I5qHcvTupezXqNWEmpUPlpI/view?usp=sharing",
      alt_name: "Ethereum",
      color_code: "#D3D3D3",
    },
    {
      title: "CodeDecode - Top 20 finalists, India",
      subtitle: "- Techfest, IIT Bombay",
      logo_path: "techfest_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18wAxtLDZstl_GfLd6m17eLFZZhwBXZo5/view?usp=sharing",
      alt_name: "CodeDecode",
      color_code: "#C6E2FF",
    },
    {
      title: "Certificate of Appreciation",
      subtitle: "- Punjab Engineering College, Chandigarh",
      logo_path: "Pec_coa_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aoAawOqFOu3Xs6OAA7BsoP3j0zN2NtAI/view?usp=sharing",
      alt_name: "COA",
      color_code: "#dedfdf",
    },
    {
      title: "President, Codechef PEC Chapter",
      subtitle: "- Codechef",
      logo_path: "codechef_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HWubk6Rt2T3lZXRwqm4uTbgEyIKJLACU/view?usp=sharing",
      alt_name: "President, Codechef PEC Chapter",
      color_code: "#EEE8CD",
    },
    {
      title: "Business Analysis Foundations: Business Process Modeling",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1511lLFCy7HClAFxpTcUzEjbtYFUhoR5Z/view?usp=sharing",
      alt_name: "Business Analysis Foundations",
      color_code: "#0173b1",
    },
    {
      title: "Learning How to learn",
      subtitle: "- Deep Teaching Solutions, Coursera",
      logo_path: "learning_how_to_learn_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YW7E8M6YPDHT",
      alt_name: "Learning How to learn",
      color_code: "#EEEEE0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have led cross-functional teams and developed advanced software solutions as a Software Development Engineer with some well established companies like Apple and Goldman Sachs. Delivering clean code and seamless user experiences, I love to 'Craft code that powers the future'.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Google",
          company_url: "https://www.google.com/",
          logo_path: "google_logo.webp",
          duration: "July 2024 - Present",
          location: "Bengaluru, Karnataka, India",
          description:
            "I am contributing to the development and enhancement of the Google SecOps platform, which ingests and analyzes security telemetry at a petabyte scale to help organizations detect, investigate, and respond to cyberthreats across diverse environments. My focus has been on backend API development, enhancing user experiences within the platform. Leveraging Golang and Google's internal tools, I am also involved in initiatives to increase the reliability and robustness of the platform, ensuring seamless and secure user interactions.",
          color: "#000000",
        },
        {
          title: "Software Development Engineer",
          company: "Apple Inc.",
          company_url: "https://www.apple.com/",
          logo_path: "apple_logo.jpeg",
          duration: "July 2022 - June 2024",
          location: "Hyderabad, Telangana, India",
          description:
            "Led a cross-functional team to develop a multi-tenant Learning Management System (LMS) for over 230,000 users, saving Apple $250K annually in licensing costs. Managed the transition of a Content Management System (CMS) to React, enhancing features and application integrations. Contributed to a mobile-responsive LMS for AppleTV, resulting in a 9% increase in user engagement. Implemented in-video question authoring to improve learning experiences. Utilized React, Spring Boot, SQL, TypeScript, and JavaScript throughout these projects.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technology Summer Analyst",
          company: "Goldman Sachs Group, Inc.",
          company_url: "https://www.goldmansachs.com/",
          logo_path: "gs_logo.png",
          duration: "Jan 2021 - July 2021",
          location: "Bengaluru, Karnataka, India",
          description:
            "Contributed to revamping Goldman Sachs' Profit and Loss (P&L) calculation system, enhancing exception handling and data quality. Designed and implemented an exception handling system for balance/attribute values, including modeling, orchestration services, and a Kibana dashboard. Upgraded Node.js and UI toolkit versions, and updated unit testing frameworks for three React dashboards. Migrated a legacy dashboard to the new GS dashboard by creating GraphQL queries, data sources, and visual elements. Utilized Java, React, GS Proprietary Language, and SQL throughout these projects.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "President",
          company: "Codechef PEC Chapter - Codechef",
          company_url: "https://www.codechef.com/",
          logo_path: "codechef_logo.jpeg",
          duration: "August 2021 - June 2022",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "Building on my contributions, I was elected President of the Codechef PEC Chapter, the driving force behind our college's competitive programming scene.  Overseeing all chapter activities, I continued to foster student growth through initiatives like Fortnightly Code Battles, introductory tech sessions, and speaker events.  Similar to my PEC ACM experience, this leadership role was about more than just managing events; it was about empowering students on their coding journeys.",
          color: "#4285F4",
        },
        {
          title: "PEC ACM Secretary",
          company: "PEC ACM Student Chapter - Association for Computing Machinery",
          company_url: "https://www.acm.org/",
          logo_path: "acm_logo.png",
          duration: "July 2021 - June 2022",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "After actively contributing to the PEC ACM student chapter for several years, I was incredibly honored to be selected as its Secretary. My dedication and past contributions were recognized, and I was entrusted with the responsibility of planning, managing, and leading all the society's activities. Elevated to PEC ACM Secretary, I leveraged my experience to spearhead initiatives that ignited a passion for computer science. From fortnightly coding battles to industry leader talks, I cultivated a thriving community of learners by introducing diverse technological topics, competitive events, and freshman support programs. This leadership role wasn't just about managing activities; it was about empowering students on their CS journeys..",
          color: "#000000",
        },
        {
          title: "Competitive Programming(CP) Lead",
          company: "Codechef PEC Chapter - Codechef",
          company_url: "https://www.codechef.com/",
          logo_path: "codechef_logo.jpeg",
          duration: "July 2020 - August 2021",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "In December 2019, I co-founded the PEC Codechef Chapter, igniting a competitive coding fire within our college.  As Competitive Programming Lead, I spearheaded on-campus coding contests and fostered a culture of algorithmic problem-solving among students.",
          color: "#4285F4",
        },
        {
          title: "Technical Organizing Committe Member",
          company: "Punjab Engineering College",
          company_url: "https://github.com/",
          logo_path: "pec_logo.png",
          duration: "June 2020 - July 2021",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "I leveraged my experience as an active Executive body member of the PEC ACM Student Chapter to become the chapter's representative on the Technical Organizing Committee. In this role, I collaborated with various college societies and administration to implement initiatives that significantly enhanced the technological culture within the institute. This experience honed my leadership and communication skills, allowing me to effectively bridge the gap between student organizations and college authorities.",
          color: "#181717",
        },
        {
          title: "Executive Body(EB) Member",
          company: "PEC ACM Student Chapter - Association for Computing Machinery",
          company_url: "https://www.acm.org/",
          logo_path: "acm_logo.png",
          duration: "Jan 2020 - July 2021",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "PEC ACM Student chapter has been my launching pad since first year of my College. My dedication as an Implementation Body member was recognized, and I was thrilled to be promoted to the Executive Body. This elevated role allowed me to leverage my growing skills to spearhead initiatives that would propel the society forward and empower my fellow students. These included bi-weekly Code Battles college-wide, engaging events like Andhadhun and Code Coro-na, and securing guest sessions with industry leaders. Leading these projects wasn't just about the society's growth – it honed my communication and organizational skills while fostering a vibrant learning environment for everyone, myself included.",
          color: "#000000",
        },
        {
          title: "Implementation Body(IB) Member",
          company: "PEC ACM Student Chapter - Association for Computing Machinery",
          company_url: "https://www.acm.org/",
          logo_path: "acm_logo.png",
          duration: "Aug 2019 - Dec 2019",
          location: "Punjab Engineering College, Chandigarh",
          description:
            "My dedication to PEC ACM Student chapter since my first year led me to the rewarding role of Implementation Body member. This experience allowed me to contribute to the organization's growth while fostering my own development. I actively participated in organizing events like Code Battles (targeting first-year students), Andhadhun, Code Coro-na, and guest sessions with industry leaders. These initiatives not only enhanced the society's reach but also honed my technical and communication skills, empowering me to effectively collaborate and contribute to a larger vision.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I combine my passion for cutting-edge technologies, for instance Deep Learning, Blockchain and full-stack development, to create innovative projects across various domains. This allows me to tackle complex challenges with intelligent solutions and deliver user-friendly interfaces that bring my ideas to life.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "indian-currency-recognition",
      name: "Indian Currency Recognition: A Lightweight Transfer Learning Approach for Visually Impaired",
      createdAt: "November, 2022T00:00:00Z",
      description: "Research Paper published in IEEE - 2022 Seventh International Conference on Parallel, Distributed and Grid Computing (PDGC)",
      url: "https://ieeexplore.ieee.org/document/10053304",
    },
    {
      id: "atomic-cross-chain-asset-exchange",
      name: "Atomic Cross-Chain Asset Exchange for Ethereum Public Chains",
      createdAt: "January, 2021T00:00:00Z",
      description: "Research Paper published in IEEE - 2021 International Conference on Computer Communication and Informatics (ICCCI)",
      url: "https://ieeexplore.ieee.org/document/9402343",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "normal_ankit.png",
    description_start:
      "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL!",
    description_end: "I am available on the following social media. You can message me, I will reply as soon as possible. Let's solve problems together and turn ideas into reality 😉"
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document and share some of my life experiences, professional journey, and technical knowledge through writing.",
    link: "https://www.quora.com/profile/Ankit-Goyal-233",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hyderabad, Telangana, India, 500032.",
    locality: "Gachibowli, Nanakramguda",
    country: "India",
    region: "Telangana",
    postalCode: "500032",
    streetAddress: "Financial District",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ScJZNvTU6BZDroXu7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
