export const getImageUrl = (id) => {
  return `https://s3-eu-west-1.amazonaws.com/dutchblockchain-hackathon/Item${id}.jpg`;
};

export const getOwner = () => {
  // eslint-disable-next-line
  return '0x' + (new Array(38).fill(1).map(() => (Math.floor(Math.random() * 16)).toString(16))).join('');
};
