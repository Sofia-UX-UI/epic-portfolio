import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sofía",
  lastName: "Orellano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      design handoff and user experience.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sofia-UX-UI",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sofiaorellano/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sofia.orellano@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Designing for complexity, clarity, and care ${person.role}`,
  headline: <> Designing for complexity, clarity, and care </>,
  subline: (
    <>
      I'm Sofía Orellano, a product designer with 8+ years of experience designing for scale, accessibility, and impact. My work spans fintech, civic tech, and generative AI — focused on crafting meaningful user experiences through research, strategy, and systems thinking.</>

  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from `,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/sofia-orellano-/1-1-sofia-orellano",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <br/>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Product Designer (UX/UI)",
        timeframe: "Dic 2022 - Present",
        role: " ",
        achievements: [ <>Designing and delivering user-centred digital solutions across fintech, civic tech, and AI platforms. Collaborated with cross-functional teams to define UX strategies, lead research, and create responsive, accessible interfaces.</>,

          <>
            Astropay: Designed a multilingual onboarding experience for Latin American and African users, boosting task completion by 25%. Conducted user testing with over 350 participants across 3 regions.
          </>,
          <>
            OICD: Led user research and wireframing for a GenAI conflict-resolution tool. Informed feature roadmap, UX strategy, and freemium model.
          </>,
          <>MA Research: Developed a UX framework for LLM-based applications through a 6-step iterative process with 45 professionals.
</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: " ",
            alt: "",
            width: ,
            height: ,
          },
        ],
      },
      {
        company: "www.urbanmento.com",
        timeframe: "Jul 2015 - 2022",
        role: "Founder & Lead Designer",
        achievements: [ 
          <>
          Founded and led a design practice focused on sustainable urban design, public space systems, and modular architecture.
          </>,
          <>
            Designed and delivered modular public furniture systems across Uruguay.
          </>,
          <>
            Represented Kompan in Uruguay; managed client relationships and local adaptation.
          </>,
          <>
          Secured $250,000+ in innovation funding; received multiple awards for design impact.
          </>
        ],
        images: [],
      },
      {
        company: "Universidad de la Empresa",
        timeframe: "2017 - 2020",
        role: "Lecturer",
        achievements: [ 
        <>
        Delivered undergraduate modules in UX Design, Lean methodologies, and visual communication.
        </>,
          <>
            Created a 45-hour online training course. 
          </>,
          <>
            Mentored 20+ students on UX coursework.
          </>,
          <>
          Integrated digital tools, improving student satisfaction by 35%.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "April 2023 - April 2025 - MA User Experience Design. Falmouth University, UK",
        description: <> </>,
      },
      {
        name: "Mar 2017 – Jun 2017 - Postgraduate Certificate – GFRC – Engineering University, Uruguay",
        description: <> </>,
      },
      {
        name: "Mar 2009 – Dec 2013 - BA in Industrial Design – Universidad de la Empresa, Uruguay",
        description: <> </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Key skills",
    skills: [
      {
        title: "Key skills",
        description: <>UX Research, Data Interpretation & Usability Testing; Design Systems; Interaction Design; Accessibility (WCAG 2.1); Product Strategy; Agile Collaboration; Design Thinking; Lean UX; Academic Research; Mixed Methods; AI Interface Design.
</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: " ",
            alt: "Project image",
            width: 48,
            height: 11,
          },
        ],
      },
      {
        title: "Tools",
        description: <>Figma, FigJam, Notion, Miro, Jira, Maze, Hotjar, Amplitude, Google Analytics, GitHub, HTML/CSS, Adobe Creative Suite, Framer, Webflow (basic) </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: " ",
            alt: "Project image",
            width: 48,
            height: 8,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Portfolio Gallery',
  title: 'Portfolio gallery',
  description: `A selection of wireframes by ${person.name}`,
  // Images from https://pexels.com
  images: [
      {
          src: '/images/projects/project-01/Image-15.jpg',
          alt: 'image',
          orientation: 'vertical'
      },
      {
        src: '/images/projects/project-01/Image-40.png',
        alt: 'image',
        orientation: 'horizontal'
    },
      {
          src: '/images/projects/project-01/Image-16.jpg',
          alt: 'image',
          orientation: 'horizontal'
      },
      {
          src: '/images/projects/project-01/Image-17.jpg',
          alt: 'image',
          orientation: 'vertical'
      },
      {
          src: '/images/projects/project-01/Image-18.jpg',
          alt: 'image',
          orientation: 'vertical'
      },
      {
          src: '/images/projects/project-01/Image-19.jpg',
          alt: 'image',
          orientation: 'horizontal'
      },
      {
          src: '/images/projects/project-01/Image-20.jpg',
          alt: 'image',
          orientation: 'vertical'
      },
      {
          src: '/images/projects/project-01/Image-21.jpg',
          alt: 'image',
          orientation: 'horizontal'
      },
      {
          src: '/images/projects/project-01/Image-22.jpg',
          alt: 'image',
          orientation: 'vertical'
      },
      {
          src: '/images/projects/project-01/Image-23.jpg',
          alt: 'image',
          orientation: 'horizontal'
      },
      {
          src: '/images/projects/project-01/Image-24.jpg',
          alt: 'image',
          orientation: 'horizontal'
      },
      {
        src: '/images/projects/project-01/Image-27.webp',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/project-01/Image-26.svg',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/project-01/Image-25.webp',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/project-01/Image-28.webp',
        alt: 'image',
        orientation: 'horizontal'
    },

     
  ]
}


export { person, social, newsletter, home, about, blog, work, gallery };