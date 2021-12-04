function generateHashtag(str) {
    const sol = str
      .split(' ')
      .filter((str) => str !== ' ')
      .map((str) => capitalizeFirstLetter(str))
      .join('');
    const len = sol.length;
  
    if (len <= 0 || len >= 140) return false;
    else return '#' + sol;
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

generateHashtag("")
// false
generateHashtag("Codewars Is Nice")
// "#CodewarsIsNice", "Should remove spaces.")
generateHashtag("Codewars is nice")
// "#CodewarsIsNice", "Should capitalize first letters of words.")
generateHashtag("code" + " ".repeat(140) + "wars")
// "#CodeWars"
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
//  false, "Should return false if the final word is longer than 140 chars.")
