// NAVIGATION
// export const NAV_LINKS = [
//   { href: "/", key: "home", label: "Home" },
//   { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
//   { href: "/faculty", key: "services", label: "Services" },
//   { href: "/", key: "pricing ", label: "Pricing " },
//   { href: "/", key: "contact_us", label: "Contact Us" },
// ];
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  // { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  {
    key: "about",
    label: "About",
    children: [
      {
        href: "/about/us",
        key: "aboutus",
        label: "About Us",
      },
      {
        href: "/about/spu",
        key: "aboutspu",
        label: "About SPU",
      },
      {
        href: "/about/CEO",
        key: "ceo",
        label: "Message From CEO",
      },
      {
        href: "/about/principal",
        key: "principal",
        label: "Message From Principal",
      },
      {
        href: "/about/whyus",
        key: "whyus",
        label: "Why Us",
      },
    ],
  },
  // {
  //   key: "courses",
  //   label: "Courses",
  //   children: [
  //     {
  //       href: "/faculty/mba",
  //       key: "mba",
  //       label: "MBA-Master in Business Administration",
  //     },
  //     {
  //       href: "/faculty/bhm",
  //       key: "bhm",
  //       label: "BHM-Bachelor in Hotel Management",
  //     },
  //     {
  //       href: "/faculty/babm",
  //       key: "babm",
  //       label: "BABM-Bachelor in Airlines Business Management",
  //     },
  //     {
  //       href: "/faculty/bamm",
  //       key: "bamm",
  //       label: "BAMM-Bachelor in MICE (Event) Management",
  //     },
  //     {
  //       href: "/faculty/bttm",
  //       key: "bttm",
  //       label: "Bachelor in Tourism & MICE Management",
  //     },
  //     {
  //       href: "/faculty/bca",
  //       key: "bca",
  //       label: "BCA-Bachelor in Computer Application",
  //     },
  //     // { href: "/faculty/all", key: "all", label: "All" },
  //   ],
  // },

  {
    key: "courses",
    label: "Courses",
    children: [
      {
        href: "/courses/mba",
        key: "mba",
        label: "MBA - Master in Business Administration",
      },
      {
        href: "/courses/bhm",
        key: "bhm",
        label: "BHM - Bachelor in Hotel Management",
      },
      {
        href: "/courses/babm",
        key: "babm",
        label: "BABM - Bachelor in Airlines Business Management",
      },
      {
        href: "/courses/bamm",
        key: "bamm",
        label: "BAMM - Bachelor in MICE (Event) Management",
      },
      {
        href: "/courses/bttm",
        key: "bttm",
        label: "BTTM - Bachelor in Tourism & MICE Management",
      },
      {
        href: "/courses/bca",
        key: "bca",
        label: "BCA - Bachelor in Computer Application",
      },
    ],
  },

  // {
  //   key: "media",
  //   label: "Media",
  //   children: [
  //     {
  //       href: "/media/photos",
  //       key: "photos",
  //       label: "Photos",
  //     },
  //     {
  //       href: "/media/videos",
  //       key: "videos",
  //       label: "Videos",
  //     },
  //     {
  //       href: "/faculty/events",
  //       key: "events",
  //       label: "Upcoming Events",
  //     },
  //   ],
  // },

  { href: "/", key: "contact", label: "Contact" },
  // { href: "/", key: "blogs", label: "Blogs" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

export const SPU_URL = ["/spu.png", "/spu2.png", "/spu3.png"];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Chandan Kushwaha",
    icon: "/student2.jpg",
    variant: "green",
    description:
      "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];
// Testimonials data
export const Testimonials = [
  {
    id: 1,
    title: "Chandan Kushwaha",
    batch: "2020 BCA [Batch]",
    icon: "student2.jpg",
    variant: "green",
    stars: 5,
    description:
      "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
  },
  {
    id: 2,
    title: "Dhiraj Shah",
    batch: "2020 BCA [Batch]",
    icon: "dhiraj.jpg",
    stars: 5,
    description:
      "Words convey our feelings and a “THANK YOU” conveys our gratitude and appreciation. So, I must thank YETI Int’l College (Former ICHM Lalitpur College) for striding the dream in all of us and supporting a lot in fulfilling it. YETI Int’l College supports developing a strong feeling of self-confidence among the students to win in this competitive world.",
  },
  {
    id: 3,
    title: "Rupesh Kushwaha",
    batch: "2021 BCA [Batch]",
    icon: "student1.jpg",
    stars: 5,
    description:
      "Yeti international college is the best college in Kathmandu. This College has good infrastructure and monument and vast college environment and equipment are good in condition and libraries are plenty of books and sports centers with all sports equipment and classrooms with good classrooms and infrastructure.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Outstanding Courses",
    links: [
      "MBA - Master in Business Administration",
      "BHM - Bachelor in Hotel Management",
      "BABM - Bachelor in Airlines Business Management",
      "BAMM - Bachelor in MICE (Event) Management",
      "BTTM - Bachelor in Tourism & MICE Management",
      "BCA - Bachelor in Computer Application",
    ],
  },
  {
    title: "Our Affiliation ",
    links: ["Tribhuwan University", "Sripatum University"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Office", value: "+977-14792063" },
    { label: "Email Office", value: "nfo@yeticollege.edu.np" },
  ],
};

// export const SOCIALS = {
//   title: "Social",
//   links: [
//     "/facebook.svg",
//     "/instagram.svg",
//     "/twitter.svg",
//     "/youtube.svg",
//     "/wordpress.svg",
//   ],
// };
export const SOCIALS = {
  title: "Social",
  links: [
    {
      icon: "/facebook.svg",
      url: "https://www.facebook.com/YETICollege",
    },
    {
      icon: "/instagram.svg",
      url: "https://www.instagram.com/yetiintlcollege/",
    },
    // {
    //   icon: "/twitter.svg",
    //   url: "https://twitter.com/yourpage",
    // },
    {
      icon: "/youtube.svg",
      url: "https://www.youtube.com/@YETIInternationalCollege",
    },
    // {
    //   icon: "/wordpress.svg",
    //   url: "https://yourblog.wordpress.com",
    // },
  ],
};
