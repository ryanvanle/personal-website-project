const projectsData = [
  {
    "title": "Tactus",
    "url": "https://github.com/ryanvanle/tactile-art",
    "date": "Jan. 2025 – Mar. 2025",
    "tags": ["Accessibility", "Full-Stack", "Prototyping", "Web App"],
    "description": [
      "Co-developed a discovery-based image-search web application (JavaScript, HTML, CSS, Firebase) in a 4-person team, enhancing art experiences for Blind/Visually Impaired (BLV) tactile artists in a digital space.",
      "Designed and implemented a community-driven platform enabling users to explore artworks, art components, and art interpretations, addressing the lack of direct visual-to-tactile translation methods and promoting collaborative artistic dialogue through ”Community Suggestions” feature.",
      "Engineered key features including enriched alt-text for all non-text content, screen reader compatibility, and interactive image segmentation for compositional tagging, through interviews from BLV artists and accessibility mentors."
    ],
    "links": {
      "poster": "https://drive.google.com/file/d/18lHWnoPeZ3Lo4dIqDaEGZITEKXmpPDVt/view?usp=sharing"
    }
  },
  {
    "title": "Space Invaders (but not that one)",
    "url": "https://docs.google.com/presentation/d/1KaoloOzx4YjMhR2ccGfmwptOpvviU9AF/edit?usp=sharing&ouid=106255528480515754770&rtpof=true&sd=true",
    "date": "Apr. 2024 – June. 2024",
    "tags": ["Game Dev", "Hardware", "Prototyping", "Computer Vision"],
    "description": [
      "Developed a video game to bring awareness to Washington’s invasive species issue alongside 3 developers.",
      "Prototyped a physical wireless net controller to catch invasive species through a ESP32 micro-controller in C++, 3D-printing, and a Node.js server connected to WebSocket to capture input for a web application.",
      "Utilized ml5.js Computer vision hand gesture model as an AI controller to take informational wildlife snapshots.",
      "Won Best Game Controller and Best Game Overall awards within 8 other teams."
    ],
    "links": {
      "video": "https://drive.google.com/file/d/1B02JVSffiLZkdnrJCvB_4f7xv8DmEZ2t/view?usp=sharing",
      "github": "https://github.com/ryanvanle/cse493InvasiveSpecies"
    }
  },
  {
    "title": "SprayCon",
    "url": "https://docs.google.com/presentation/d/1Ti6FUX8vEcsf4BMil0Bj0mtHQuKZmFOn/edit?usp=sharing&ouid=106255528480515754770&rtpof=true&sd=true",
    "date": "Approx. Spring 2024",
    "tags": ["Hardware", "Prototyping", "Web App", "Art"],
    "description": [
      "Conceived and developed \"SprayCon,\" an interactive digital graffiti project featuring a custom-built, motion-controlled spray can interface.",
      "Engineered a physical spray can controller using an accelerometer for cursor movement, an arcade button for input, and an RGB LED for visual feedback.",
      "Developed a p5.js web application that interprets real-time motion data from the controller to draw on a digital canvas, establishing a reliable two-way serial communication link between the hardware and the website.",
      "Implemented intuitive gesture-based controls, allowing the user to shake the controller to switch between drawing, color selection, and brush modification modes.",
      "Created a seamless feedback loop where the website sends color data back to the controller's RGB LED, ensuring the physical device always matches the digital state.",
      "Successfully troubleshooted complex hardware and software integration issues, demonstrating a strong capability in both embedded systems and web development."
    ],
    "links": {
      "controller": "https://github.com/ryanvanle/CSE493F/tree/main/a3/Controller",
      "github": "https://github.com/ryanvanle/CSE493F/tree/main/p5",
      "video": "https://drive.google.com/file/d/1fl8vSv5SnU4RbZ8l_fep905Az2--NMGi/view?usp=drive_link"
    }
  },
  {
    "title": "Verbs",
    "url": "https://docs.google.com/presentation/d/1ZMgKbKHFmDDSVbmuexQRdmA4gmRWWrWd/edit?usp=sharing&ouid=106255528480515754770&rtpof=true&sd=true",
    "date": "Approx. Spring 2024",
    "tags": ["Game Dev", "Hardware", "Prototyping"],
    "description": [
      "Developed a WarioWare-inspired collection of rapid-fire minigames controlled by a custom-built hardware interface, drawing inspiration from Rhythm Heaven and popular memes like 'Bongo Cat'.",
      "Engineered a unique physical controller using an Arduino, photoresistor, potentiometer, and buttons to create distinct gameplay actions for each minigame, such as matching patterns, covering a light sensor, and matching tones.",
      "Implemented a physical health system using LEDs on the controller to provide immediate visual feedback to the player on their performance and remaining lives.",
      "Managed the entire design process from initial circuit diagrams and physical prototyping to final implementation and iterative debugging of hardware and software.",
      "Demonstrated resilience and advanced problem-solving by overcoming significant hardware integration challenges, including intermittent board failures and system crashes."
    ],
    "links": {
      "github": "https://github.com/ryanvanle/CSE493F/tree/main/cp2/game",
      "video": "https://drive.google.com/file/d/1AjhK5l33a0zXE63vM3rh5MSEfQxomrZ2/view?usp=sharing"
    }
  },
  {
    "title": "Social Engineering and Artificial Intelligence",
    "url": "https://www.youtube.com/watch?v=qARKdjYXHE4&ab_channel=Ryan",
    "date": "Mar. 2024",
    "tags": ["AI", "Cybersecurity", "Ethics", "Social Engineering", "Presentation"],
    "description": [
      "Co-authored and presented on how AI advancements amplify social engineering attacks through sophisticated, large-scale manipulation.",
      "Detailed attack vectors including LLMs for phishing, deepfakes for impersonation, and AI-generated media for widespread misinformation.",
      "Analyzed the role of social bots in follower manipulation, user oppression, and community radicalization, citing their use in political events like the 2016 US election and the Russia-Ukraine War.",
      "Discussed the legal and ethical landscape, noting that all social engineering attacks are illegal in a cybersecurity context, and highlighted recent government countermeasures like the executive order on safe AI.",
      "Proposed protective measures for individuals, such as using safe words for verification, being cautious of suspicious inquiries, and promoting broader public awareness of digital safety."
    ]
  },
  {
    "title": "Lite Lingo",
    "url": "https://ryanvanle.github.io/lite-lingo-website/",
    "date": "Nov. 2023 – Dec. 2023",
    "tags": ["Accessibility", "Full-Stack", "APIs", "Web Extension"],
    "description": [
      "Developed a full-stack Chrome extension with the goal of helping individuals with learning disabilities, by allowing users to select any website text, transforming it to a plain language translation, and editing it for anyone to see.",
      "Built an Express RESTful API using Node.js with an AWS PostgreSQL database to store and retrieve websites’ plain language annotations, and to generate initial translations through OpenAI ChatGPT-3.5 API.",
      "Earned the AA conformance in the W3 Web Content Accessibility Guidelines, through automated accessibility testing, and manual testing using accessibility tools such as screen readers and switch control.",
      "Presented and discussed work at a University of Washington accessibility event with over 100 attendees."
    ]
  },
  {
    "title": "Why AI is the Scariest Field in Computer Science",
    "url": "https://youtu.be/tCSmOu2vLRg",
    "date": "Dec. 2022",
    "tags": ["AI", "Computer Science", "Philosophy", "Ethics", "Video Script"],
    "description": [
      "Authored a video script defining Artificial Intelligence and tracing its history from the 1956 Dartmouth Workshop, contrasting the Symbolic (rules-based) and Sub-Symbolic (data-based) approaches.",
      "Argues that AI is the 'scariest' field by exploring its goal of replicating human intelligence and the philosophical questions this raises, using the 'Mary's Room' thought experiment to discuss consciousness.",
      "Highlights the ethical risks of AI, such as perpetuating societal biases found in its training data, and posits that AI acts as a mirror to human values and flaws.",
      "Counters the 'doomsday' narrative by emphasizing the significant technical challenges (e.g., data inefficiency) and the numerous positive applications of AI, advocating for guided development."
    ]
  },
  {
    "title": "Writer’s Block",
    "url": "https://github.com/ryanvanle/writer-block",
    "date": "Oct. 2022",
    "tags": ["Game Dev", "Full-Stack", "Hackathon", "Web App"],
    "description": [
      "Developed a React multiplayer front-end website in under 24 hours for the DubHacks 2022 Hackathon, where 4 players compete in a real-time online writing test to see who can write the fastest.",
      "Adapted Google Input Tools handwriting model through an open-source library, handwriting.js, to allow users to digitally write out their answers than typing.",
      "Utilized and learned a NoSQL database, Firebase, to store in real-time active game states and players’ writing progress, then displays that information for all players in real-time."
    ],
    "links": {
      "video": "https://youtu.be/UzNPhyaUf9Q"
    }
  },
  {
    "title": "Image To Plant",
    "url": "https://ryanvanle.github.io/ImageToPlant/",
    "date": "July 2022 – Aug. 2022",
    "tags": ["Machine Learning", "APIs", "Web App"],
    "description": [
      "Identified a plant identification issue with beginner plant hobbyists and developed a personal project front-end website using JavaScript, HTML, and CSS, that identifies a user’s plant image to the plant’s species.",
      "Integrated Azure’s Bing Web Search API to create a dataset containing 30,859 images of 250 unique plants.",
      "Remodeled and trained MobileNetV3 using Python and TensorFlow to identify plant species by transfer learning."
    ],
    "links": {
      "github": "https://github.com/ryanvanle/ImageToPlant"
    }
  },
  {
    "title": "Mind Games",
    "url": "https://ryanvanle.github.io/mind-games/",
    "date": "June 2022 – July 2022",
    "tags": ["Game Dev", "Web App"],
    "description": [
      "Developed a personal project front-end website consisting of three puzzle games: Solving mathematical questions, counting text that matches the prompt description, and counting people entering or leaving a house.",
      "Adapted Google Input Tools handwriting model through an open-source library, handwriting.js, to allow users to write out their answers than typing.",
      "Utilized CSS Animations and sound design to create a more responsive website and experience for the user."
    ]
  },
  {
    "title": "Campus Paths",
    "url": "#",
    "date": "Jan. 2022 – Mar. 2022",
    "tags": ["Full-Stack", "Data Structures & Algorithms", "Web App"],
    "description": [
      "Developed a full-stack website that finds the shortest path between two user-picked University of Washington Seattle Campus Buildings as a class project for Software Design & Implementation.",
      "Built and designed a custom graph data structure in Java and implemented Dijkstra’s Algorithm.",
      "Created multiple JUnit test suites to ensure code implementations were correct and to reduce possible errors.",
      "Deployed a Java Spark server back-end API to communicate and send path data to the React front-end website."
    ]
  },
  {
    "title": "Bear Bakerie",
    "url": "https://www.loom.com/share/eacfbdcaeb9643629a01d007b681d429",
    "date": "Nov. 2021 – Dec. 2021",
    "tags": ["Full-Stack", "E-commerce", "Web App"],
    "description": [
      "Developed a full-stack proof of concept e-commerce website that sells bakery items alongside 1 other developer.",
      "Designed and implemented the website’s UI and overall functionality through JavaScript, HTML, and CSS.",
      "Built an Express REST API using Node.js with a PostgreSQL database to retrieve information such as the store’s items, search results, account details, or purchase history."
    ]
  }
]