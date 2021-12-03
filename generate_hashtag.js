function generateHashtag (str) {
  
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
