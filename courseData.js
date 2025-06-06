const coursesData = [
  // UW Courses
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "154",
    "courseTitle": "Web Programming",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "190",
    "courseTitle": "Direct-Admit Seminar",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "HSTAA",
    "courseNumber": "231",
    "courseTitle": "Race and American History",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "MATH",
    "courseNumber": "126",
    "courseTitle": "Calculus III",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "311",
    "courseTitle": "Foundations of Computing I (Discrete Math)",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "331",
    "courseTitle": "Software Design & Implementation",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "390",
    "courseTitle": "Research Seminar",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "PSYCH",
    "courseNumber": "208",
    "courseTitle": "Happiness",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "312",
    "courseTitle": "Foundations of Computing II (Probability)",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "332",
    "courseTitle": "Data Structures and Parallelism",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "492",
    "courseTitle": "Career Seminar",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "INFO",
    "courseNumber": "200",
    "courseTitle": "Intellectual Foundations of Informatics",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "351",
    "courseTitle": "The Hardware/Software Interface",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "391",
    "courseTitle": "Software Tools",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "490",
    "courseTitle": "Philosophy of AI",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "492",
    "courseTitle": "Alumni Career Experience Seminar",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "333",
    "courseTitle": "Systems Programming",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "369",
    "courseTitle": "Introduction to Digital Logic",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "440",
    "courseTitle": "Introduction to Human-Computer Interaction",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "492",
    "courseTitle": "Equitable and Inclusive CS Pedagogy",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "FIN",
    "courseNumber": "205",
    "courseTitle": "Personal Financial Literature",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "455",
    "courseTitle": "Computer Vision",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "PSYCH",
    "courseNumber": "210",
    "courseTitle": "The Diversity of Human Sexuality",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "STAT",
    "courseNumber": "391",
    "courseTitle": "Quantitative Introductory Statistics for Data Science",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "344",
    "courseTitle": "Introduction to Data Management",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "442",
    "courseTitle": "Data Visualization",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "473",
    "courseTitle": "Introduction to Artificial Intelligence",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "493",
    "courseTitle": "Accessibility",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "452",
    "courseTitle": "Distributed Systems",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "484",
    "courseTitle": "Computer Security",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "E E",
    "courseNumber": "205",
    "courseTitle": "Introduction to Signal Conditioning",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "MATH",
    "courseNumber": "208",
    "courseTitle": "Matrix Algebra with Applications",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "BIOL",
    "courseNumber": "180",
    "courseTitle": "Introductory Biology",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "390",
    "courseTitle": "Video Game Development",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "493",
    "courseTitle": "Prototyping Interactive Systems with AI",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "PHIL",
    "courseNumber": "118",
    "courseTitle": "Ethics of Persuasion",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "421",
    "courseTitle": "Introduction to Algorithms",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "GWSS",
    "courseNumber": "200",
    "courseTitle": "Introduction to Gender, Women, and Sexuality Studies",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "451",
    "courseTitle": "Introduction to Operating Systems",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "482",
    "courseTitle": "Accessibility Capstone Software Design to Empower Underserved Populations",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "492",
    "courseTitle": "Project Management Fundamentals for Software Developers",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "371",
    "courseTitle": "Digital Design",
    "takeaway": ""
  },
  {
    "institution": "UW",
    "courseSubject": "CSE",
    "courseNumber": "461",
    "courseTitle": "Introduction to Computer Communication Networks",
    "takeaway": ""
  },
  // TCC Courses
  {
    "institution": "TCC",
    "courseSubject": "ENGL&",
    "courseNumber": "101",
    "courseTitle": "English Comp I",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "ENGR&",
    "courseNumber": "104",
    "courseTitle": "Intro To Engr And Design",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "PSYC&",
    "courseNumber": "100",
    "courseTitle": "General Psychology",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "ART&",
    "courseNumber": "100",
    "courseTitle": "Art Appreciation",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "CS",
    "courseNumber": "120",
    "courseTitle": "Computer Science Principles",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "HIST&",
    "courseNumber": "147",
    "courseTitle": "Us History II",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH",
    "courseNumber": "147",
    "courseTitle": "Coll Alg/Bus & Econ",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "ENGR&",
    "courseNumber": "114",
    "courseTitle": "Engineering Graphics",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "HIST&",
    "courseNumber": "148",
    "courseTitle": "Us History III",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH&",
    "courseNumber": "141",
    "courseTitle": "Precalculus I",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "POLS&",
    "courseNumber": "101",
    "courseTitle": "Intro to Pol Science",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH&",
    "courseNumber": "142",
    "courseTitle": "Precalculus II",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "POLS&",
    "courseNumber": "202",
    "courseTitle": "American Government",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "CHEM&",
    "courseNumber": "161",
    "courseTitle": "General Chemistry W/Lab I",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "CS",
    "courseNumber": "142",
    "courseTitle": "Java Programming I",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "ENGL&",
    "courseNumber": "235",
    "courseTitle": "Technical Writing",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH&",
    "courseNumber": "151",
    "courseTitle": "Calculus I",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "CS",
    "courseNumber": "143",
    "courseTitle": "Java Programming II",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH&",
    "courseNumber": "152",
    "courseTitle": "Calculus II",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "PHYS&",
    "courseNumber": "221",
    "courseTitle": "Engineering Physics-Mechanics",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "ART",
    "courseNumber": "102",
    "courseTitle": "Two-Dimensional Design",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "MATH&",
    "courseNumber": "153",
    "courseTitle": "Calculus III",
    "takeaway": ""
  },
  {
    "institution": "TCC",
    "courseSubject": "PHYS&",
    "courseNumber": "222",
    "courseTitle": "Engineering Physics-Elect&Magn",
    "takeaway": ""
  }
]