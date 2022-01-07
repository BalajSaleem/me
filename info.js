let info = {
  name: "Balaj Saleem",
  logo_name: "balaj",
  flat_picture: require("./src/assets/Balaj_Avatar.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Balaj Here, I am a focused and result oriented Computer Science graduate from Bilkent University (Ankara, Turkey) working as a Machine Learning Engineer. I am captivated by technology that makes an impact and changes the world for the better. Deeply interested in Entrepreneurship and AI for good, open to all opportunities that allow me to learn, grow and step into unchartered territories. For the past few years, I have been tinkering around machine learning; Systems to detect and segment objects, model's that evolve with data and agents that learn through reinforcement have all peeked my interest<br><br> I have worked with various technologies and organizations in fields ranging from Full Stack Development to Machine Learning Engineering, and have deeply enjoyed solving interesting and challenging problems.",
  links: {
    linkedin: "https://www.linkedin.com/in/balajsaleem/",
    github: "https://github.com/BalajSaleem",
    resume:
      "https://github.com/BalajSaleem/me/tree/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Bilkent University",
      place: "Ankara, Turkey",
      date: "Sept, 2017 - June, 2021",
      degree: "Bachelors in Computer Science",
      gpa: "",
      description:
        "Graduated with Honors from Bachelors of Computer Science at Bilkent University, with a focus on Computer Vision, AI and Machine Learning. Awards: Dean's High Honor List and a Full-ride scholarship",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Algorithms",
        "Object Oriented Programming",
        "Data Structures",
        "Computer Vision",
        "Databases",
        "Softwared Development Lifecycle",
        "OS"
      ]
    },
  ],
  experience: [
    {
      name: "Ango AI",
      place: "Ankara, Turkey",
      date: "Nov, 2020 - Present",
      position: "Machine Learning Engineer",
      description:
        "Worked as a machine learning engineer, working on key projects and developing Full-Stack AI assisted data labeling tools reducing manual annotation times and observing upto 800% increase in efficiency, while adhering to high data quality standards, giving the company an unparalleled edge in the annotation market allowing faster throughput, and enticing promising funding from global investors.",
      skills: ["Deep Learning", "Machine Learning", "Computer Vision", "Full-Stack Development", "Python", "React", "AWS", "GCP"]
    },
    {
      name: "Appoint",
      place: "Berlin, Germany",
      date: "Sept, 2020 - Nov, 2020",
      position: "Flutter Developer",
      description:
        "Worked as the sole Cross Platfrom Mobile (Flutter) developer for a Start-Up aiming to create an appointment / reservation management system for to tap the lucrative market of Barber Shops and Parlors in Turkey. Developed a cross platform application that barbers / owners would use to manage and create reservations, manage customers, analyse trends and update services and business specifications.",
      skills: ["Mobile Development", "Dart", "Flutter", "CI/CD", "BLOC Design Pattern", "Rest APIs", "Object Oriented Design", "Firebase"]
    },
    {
      name: "TÜBİTAK - Science and Technology Research Council of Turkey",
      place: "Ankara, Turkey",
      date: "May, 2019 - July, 2019",
      position: "Full Stack Web Developer",
      description:
        "Worked as a summer intern in Turkish government's prime R&D institute on a full stack development project aimed at developing an event management (registration, scheduling and visualization) app using React, Spring and Flutter.",
      skills: ["Mobile Development", "Full-Stack Development", "Flutter", "Dart", "Java", "Spring Framework", "PostgreSQL", "ReactJS"]
    },
    {
      name: "InfoDif",
      place: "Ankara, Turkey",
      date: "Feb, 2020 - July, 2020",
      position: "Software Engineer",
      description:
        "Worked during semester as a software engineer in the core engineering team of InfoDif to expand functionality and add features to the company's trademark video management software for the defense industry.",
      skills: ["C++", "QT Framework", "CI/CD", "UI/UX Design"]
    },
    {
      name: "Ascend Technologies",
      place: "Islamabad, Pakistan",
      date: "July, 2019 - Oct, 2019",
      position: "Android Developer",
      description:
        "Developed and published a robust Android application for digital management of multiple branches of Ascend International School to assist the management in decision making and identify improvement factors; included key data visualizations for stakeholders along with a role based access and authentication, for different actors.",
      skills: ["Android Development", "Java", "Kotlin", "Firebase","UI/UX Development", "Software Requirements Management", "Software Architecture Design" ,"Database Management"]
    },
    {
      name: "Sigun Infromation Technologies and Consultancy",
      place: "Ankara, Turkey",
      date: "May, 2019 - July, 2019",
      position: "Game Developer",
      description:
        "Worked on a project assigned by Turkish Science and Technology Research Council to develop a platform that trains and rehabilitates stroke patients through games by stimulating motor function development. Developed 15 Minigames on Unity and integrated them with a custom hardware device using BLE 4.0.",
      skills: ["Game Development", "Unity", "C#", "BLE 4.0","Object Oriented Programing"]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "Java",
        "Dart",
        "C",
        "C#",
        "C++",
        "SQL"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks and Libraries",
      info: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "QT",
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow",
        "MaterialUI",
        "BLOC",
        "GetX",
        "Express",
        "Google Maps API",
        "SockJS",
        "Axios",
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web Technologies",
      info: ["Vue.js", "React.js", "Node", "Flask", "Django", "Spring", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Mobile Development",
      info: ["Cross Platform Development", "Android Native Development", "Flutter"],
      icon: "fas fa-mobile"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      icon: "fa fa-database"
    },
    {
      title: "Misclaneous Technologies",
      info: [
        "Linux",
        "Unity",
        "Docker",
        "Azure",
        "AWS",
        "JIRA",
        "GCP - (Cloud Storage, AutoML, CloudSDK, FireStore)",
        "AWS - (EC2, Sagemaker, Lambda, GroundTruth, S3)",
        "Selenium",

      ],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [
    {
      name: "Foodster",
      pictures: [
        {
          img: require("./src/assets/portfolio/foodster/Foodster_Phone.png")
        },
        {
          img: require("./src/assets/portfolio/foodster/login.jpeg")
        },
        {
          img: require("./src/assets/portfolio/foodster/meal-page.jpeg")
        },
        {
          img: require("./src/assets/portfolio/foodster/settings.jpeg")
        }
      ],
      technologies: ["Dart", "Flutter", "Node.js", "Heroku", "MongoDB", "Machine Learning", "AI", "Recomendation Systems"],
      category: "",
      date: "",
      github:
        "https://github.com/BalajSaleem/Foodster-Flutter",
      visit: "https://github.com/BalajSaleem/Foodster-Flutter",
      description:
        "A cross-platform mobile application for generating personalized meal plans, cost estimates, time estimates using a recomender system based on user's nutritional preferences, with a massive recipe database. Providing an extremely time and cost efficient solution to one's nutritional needs."
    },
    {
      name: "Eventicle",
      pictures: [
        {
          img: require("./src/assets/portfolio/eventicle/eventicle_phone.png")
        },
        {
          img: require("./src/assets/portfolio/eventicle/1.jpeg")
        },
        {
          img: require("./src/assets/portfolio/eventicle/6.jpeg")
        },
        {
          img: require("./src/assets/portfolio/eventicle/9.jpeg")
        },
        {
          img: require("./src/assets/portfolio/eventicle/10.jpeg")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "",
      date: "",
      github: "https://github.com/BalajSaleem/Eventicle",
      visit: "https://github.com/BalajSaleem/Eventicle",
      description:
        "The Project was aimed to develop a simple yet extremely effective event management portal for agencies that handle multitudes of events and functions. This is an event management / registration system with portals for attendees and makers(officers). This allows event goes and makers a high amount of freedom in attending and managing their apps with functionality ranging from creating events to using QR codes to enter a venue."
    },
    {
      name: "Apollo Stars",
      pictures: [
        {
          img: require("./src/assets/portfolio/apollo/appollo_laptop.png")
        },
        {
          img: require("./src/assets/portfolio/apollo/image4.png")
        },
        {
          img: require("./src/assets/portfolio/apollo/image1.png")
        },
        {
          img: require("./src/assets/portfolio/apollo/image5.png")
        }
      ],
      technologies: ["Vue.js", "Node.js", "Express", "PostgreSQL", "Heroku", "Vuetify"],
      category: "",
      date: "",
      github: "https://github.com/BalajSaleem/Apollo-stars",
      visit: "https://github.com/BalajSaleem/Apollo-stars",
      description:
        "The app was designed to facilitate university students in various academic activities. The fluid interface and solid functionality was key here, ensuring that the students Have the best possible experience while using this app. Included authentication, course registration, scheduling, job applications, grading, reporting. "
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    }
  ]
};

export default info;
