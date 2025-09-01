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
  {
    key: "courses",
    label: "Courses",
    children: [
      {
        href: "/faculty/mba",
        key: "mba",
        label: "MBA-Master in Business Administration",
      },
      {
        href: "/faculty/bhm",
        key: "bhm",
        label: "BHM-Bachelor in Hotel Management",
      },
      {
        href: "/faculty/babm",
        key: "babm",
        label: "BABM-Bachelor in Airlines Business Management",
      },
      {
        href: "/faculty/bamm",
        key: "bamm",
        label: "BAMM-Bachelor in MICE (Event) Management",
      },
      {
        href: "/faculty/bttm",
        key: "bttm",
        label: "Bachelor in Tourism & MICE Management",
      },
      {
        href: "/faculty/bca",
        key: "bca",
        label: "BCA-Bachelor in Computer Application",
      },
      // { href: "/faculty/all", key: "all", label: "All" },
    ],
  },
  {
    key: "media",
    label: "Media",
    children: [
      {
        href: "/media/photos",
        key: "photos",
        label: "Photos",
      },
      {
        href: "/media/videos",
        key: "videos",
        label: "Videos",
      },
      {
        href: "/faculty/events",
        key: "events",
        label: "Upcoming Events",
      },
    ],
  },

  { href: "/", key: "contact", label: "Contact" },
  { href: "/", key: "blogs", label: "Blogs" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
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

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
