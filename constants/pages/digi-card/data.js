const baseFolder = "/digi-card";
const giveImagePath = (image) => `${baseFolder}${image}`;
export const userBehaviourCard = [
  {
    src: giveImagePath("/user/image_1.svg"),
    description: `Directly Visiting users place, Taking visiting card & pamphlets to their customers`,
  },
  {
    src: giveImagePath("/observe/image_2.svg"),
    description: `Marketing  about your  products &  services to the users Trying to Explaining about your products `,
  },
  {
    src: giveImagePath("/observe/image_3.svg"),
    description: `Taking Brouchers & pamphlets to their customers to their places`,
  },
  {
    src: giveImagePath("/observe/image_4.svg"),
    description: `Showing demos to their users`,
  },
  {
    src: giveImagePath("/observe/image_5.svg"),
    description: `Customers calling the product owners for their orders`,
  },
  {
    src: giveImagePath("/observe/image_6.svg"),
    description: `After somedays Customers searching users brouchers, Visiting cards for their orders`,
  },
  {
    src: giveImagePath("/observe/image_7.svg"),
    description: `Users delivering their products`,
  },
];

export const conceptCard = [
  {
    src: giveImagePath("/conceptual/image_1.svg"),
    description: `Signing with seemyid`,
  },
  {
    src: giveImagePath("/conceptual/image_2.svg"),
    description: "Installing app as PWA With easy process selecting themes ",
  },
  {
    src: giveImagePath("/conceptual/image_3.svg"),
    description: `Entering Whatsapp number Photos, videos & details of the product`,
  },
  {
    src: giveImagePath("/conceptual/image_4.svg"),
    description: `Enquiry about the user Product`,
  },
  {
    src: giveImagePath("/conceptual/image_5.svg"),
    description: `User sharing seemyid digital card to Their customers`,
  },
  {
    src: giveImagePath("/conceptual/image_6.svg"),
    description: `Users view the products With single tap direct message to their WhatsApp number`,
  },
  {
    src: giveImagePath("/conceptual/image_7.svg"),
    description: `Customers can also Share the digital card to anyone`,
  },
];

export const conceptCard2 = [
  {
    src: giveImagePath("/conceptual/image_8.svg"),
    description: `User can search anything they need in seemyid without Middleman Interupption`,
  },
  {
    src: giveImagePath("/conceptual/image_9.svg"),
    description: `Results will be from who all signed with seemyid Eg:- Local plumbers,Electrician, Hotels, cabs, restaurants`,
  },
];

export const salesPersonCard = [
  {
    src: giveImagePath("/sales/image_1.svg"),
    description: `College Students`,
  },
  {
    src: giveImagePath("/sales/image_2.svg"),
    description: `Local market money collectors`,
  },
  {
    src: giveImagePath("/sales/image_3.svg"),
    description: `Anyone who has good contact in whole sale market`,
  },
];

export const paperSketchImgs = Array.from([1, 2, 3, 4, 5, 6], (x) =>
  giveImagePath(`/sketch/image_${x}.webp`)
);

export const wireframeImgs = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) =>
  giveImagePath(`/wireframes/image_${x}.webp`)
);
