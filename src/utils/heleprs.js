export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const scrollToTop = () => {
  return window.scroll({
    top: 0,
    left: 0,
  });
};

export const toAbsolute = (pathName) => {
  return process.env.PUBLIC_URL + pathName
}
