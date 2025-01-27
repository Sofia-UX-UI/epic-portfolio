import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sofía",
  lastName: "Orellano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer (UI/X)",
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
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Designer (UX/UI)</>,
  subline: (
    <>
      I'm Sofía, a Product Designer at <InlineCode>OICD</InlineCode>, where I thrive on transforming complex workflows<br/> into user-friendly, leading <br/> digital solutions.</>

  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        I'm a curious Product Designer with 10+ years of experience focused on creating intuitive, user-centered solutions, transitioning from industrial to UX/UI product design, specializing in mobile and web platforms. My work revolves around understanding users, analyzing both qualitative and quantitative data, and translating these insights into actionable recommendations that drive design improvements, delivering end-to-end end-to-end product experiences. Whether it's improving user engagement, refining product roadmaps, creating a design system from the scratch or introducing innovative solutions, I always strive to align user needs with business objectives.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "OICD",
        timeframe: "2023 - Present",
        role: "Product Designer",
        achievements: [
          <>
            Redesigned the UI/UX for the OICD platform, resulting in a 20% increase in user engagement and 30% faster load times.
          </>,
          <>
            Led discovery research, prototyping, and user testing for a new Pro Identity Mapping Tool, aligning user needs with business objectives. Contributed to client segmentation which aims to further develop into pricing options through iterative testing, ensuring the tool addressed diverse user requirements and market demands. The tool integrated conflict resolution techniques with Generative AI text processing for sensitive information and was optimized for seamless functionality across three device types.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Image-1-OICD.svg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "www.urbanmento.com",
        timeframe: "2019 - 2023",
        role: "Founder & Lead Designer of Kompan Uruguay",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
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
        name: "Falmouth University - Master in User Experience Design (2023-2025)",
        description: <>Studied User Experience Design with a major project focused on exploring Design Frameworks for Generative AI.</>,
      },
      {
        name: "Encode Club - Generative AI Bootcamp (2024)",
        description: <>Recently completed the Generative AI bootcamp, where I gained hands-on experience in leveraging AI technologies to enhance user experiences. The program covered machine learning, neural networks, and AI-driven tools, with a focus on creating innovative solutions that bridge the gap between design and AI.</>,
      },
      {
        name: "Ironhack Academy - UX/UI Bootcamp (2021)",
        description: <>Completed an intensive UX/UI bootcamp that focused on both the theoretical and practical aspects of designing for digital platforms. The program covered user research, wireframing, prototyping, and user testing, while also diving deep into creating visually compelling and intuitive user interfaces for mobile and web platforms.</>,
      },
      {
        name: "Universidad de la Empresa - BA in Industrial Design",
        description: <>Earned a Bachelor's degree in Industrial Design, where I developed a strong foundation in design principles, problem-solving, and prototyping. The program emphasized user-centric design in physical products, providing valuable insights that I now apply to digital product design.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Highly proficient in Figma, able to create interactive prototypes and design systems with exceptional speed and precision. Extensive experience in collaborative design, version control, and building responsive layouts for both web and mobile platforms.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Image-2.svg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Image-3.svg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Image-4.svg",
            alt: "Project image",
            width: 16,
            height: 9,
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
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
