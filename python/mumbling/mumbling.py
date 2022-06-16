class Mumbling:

  def __init__(self):
    pass

  def mumble(self, str):
    if len(str) == 0: return str
    if len(str) == 1: return str.upper()
    output = str[0].upper()
    for i in range(1, len(str)):
      output += "-" + self.convert_char(str[i], i + 1)
    return output;


  def convert_char(self, letter, index):
    returnStr = letter.upper()
    letter = letter.lower()
    for i in range(index - 1):
      returnStr += letter
    return returnStr