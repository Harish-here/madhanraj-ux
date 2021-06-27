const menuData = [
  { label: "Home", path: "/" },
  {
    label: "Digital Card",
    path: "/digi-card",
    subMenus: [
      { label: "Problem statement", path: "#problemStatement" },
      { label: "Observing User behaviour", path: "#userBehaviour" },
      { label: "Persona", path: "#persona" },
      { label: "Root Cause Analysis - 5 why’s", path: "#rootCause" },
      { label: "Conceptual Model", path: "#conceptualModel" },
      { label: "Marketing Technique", path: "#marketingTechnique" },
      { label: "Paper Sketch", path: "#paperSketch" },
      { label: "Wireframe", path: "#wireframe" },
    ],
  },
  { label: "Mobile Stamp", path: "/mobile-stamp" },
  { label: "Hotel Booking App", path: "/hotel-app" },
  { label: "Toucan", path: "/toucan" },
  { label: "Ellie Chat bot", path: "/ellie-chat-bot" },
  { label: "Old Brain Working", path: "/old-brain" },
  { label: "Expense App", path: "/visual-designs" },
];
const profileDescription = `An user cenetered designer with concerns for user problems.`;

const data = { menuData, profileDescription };
export default data;
