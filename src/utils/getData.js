export default function getData(index) {
  const randomTime = Math.floor(Math.random() * 6) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data of request ${index + 1}`);
    }, randomTime * 1000);
  });
}
