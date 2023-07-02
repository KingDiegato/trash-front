const RandomStringGenerator = (chars: string, length: number = 10) => {
  const helper = (len = length) => {
    if (len <= 0) {
      return '';
    }
    let res = '';
    for (let i = 0; i < len; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  };
  return helper();
};

export default RandomStringGenerator;
