import java.util.Arrays;

public class Mumbling {

  public String mumble(String letters) {
    if (letters.length() == 0) {
      return letters;
    }
    String output = "";
    String[] lettersArray = letters.split("");
    for (int i = 0; i < lettersArray.length; i++) {
      output += convertChar(lettersArray[i].toLowerCase(), i);
    }
    return output;
  }

  public String convertChar(String letter, int index) {
    if (index == 0) {
      return letter.toUpperCase();
    }
    String returnStr = "";
    for (int i = 0; i < index + 1; i++) {
      if (i == 0) {
        returnStr += "-" + letter.toUpperCase();
      } else {
        returnStr += letter;
      }
    }
    return returnStr;
  }
}
