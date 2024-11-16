const TruncateText = (text, length = 20) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };
  export default TruncateText;
  