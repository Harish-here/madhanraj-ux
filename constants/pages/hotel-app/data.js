const baseFolder = "/hotel-app";
const giveImagePath = (image) => `${baseFolder}${image}`;
export const wireframeImgs = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9], (x) =>
  giveImagePath(`/wireframe/image_${x}.webp`)
);
