function searchInSentence(sentence, word) {
    if (typeof sentence !== "string" || typeof word !== "string") {
      throw Error("--Erorr-- You did not enter your text or word correctly");
    }
  
    const lowercaseWord = word.toLowerCase();
    const lowercaseSentence = sentence.toLowerCase();
    
    if (!lowercaseSentence.includes(lowercaseWord)) {
      console.log("The word [ ",word," ] does not exist in the sentence.");
      document.writeln("The word [ ",word," ] does not exist in the sentence.");
    } else {
      console.log("The word [ ",word," ] exists in the sentence.");
      document.writeln("The word [ ",word," ] exists in the sentence.");

    }
  }

  const sentence = "Hi this is Sentence Test for this project ";
  const word = prompt("Enter Ur Word : ");
  
  searchInSentence(sentence, word);