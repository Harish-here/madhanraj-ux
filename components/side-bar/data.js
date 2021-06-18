const menuData = [
  {
    label: "Digital Card",
    path: "/digi-card",
    subMenus: [
      { label: "Problem statement", path: "/digi-card#problemStatement" },
      { label: "Observing User behaviour", path: "/digi-card#userBehaviour" },
      { label: "Root Cause Analysis - 5 why’s", path: "/digi-card#rootCause" },
      { label: "Conceptual Model", path: "/digi-card#conceptualModel" },
      { label: "Marketing Technique", path: "/digi-card#marketingTechnique" },
      { label: "Paper Sketch", path: "/digi-card#paperSketch" },
      { label: "Wireframe", path: "/digi-card#wireframe" },
    ],
  },
  { label: "Chat Product", path: "/chat-product" },
  { label: "Ellie Chat bot", path: "/ellie-chat-bot" },
  { label: "Visual Designs", path: "/visual-designs" },
  { label: "Crazy Ideas", path: "/crazy-ideas" },
];
const profileDescription = `
It’s my mission to create intuitive designs from concept to
implementation across multiple platforms. I believe that digital
experiences should be fluid and flexible.`;

const data = { menuData, profileDescription };
export default data;
