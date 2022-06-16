class Game:
  score = {
    "a": 0,
    "b": 0
  }

  def __init__(self):
    self.reset()

  def reset(self):
    self.score["a"] = 0
    self.score["b"] = 0

  def score_point(self, player):
    self.score[player] += 1

  def is_winner(self):
    if self.score["a"] > 3 and (self.score["a"] - self.score["b"]) > 1: return "a"
    if self.score["b"] > 3 and (self.score["b"] - self.score["a"]) > 1: return "b"
    return False

  def is_deuce(self):
    return self.score["a"] > 2 and self.score["b"] > 2 and (self.score["a"] == self.score["b"])

  def is_advantage(self):
    if self.score["a"] > 3 and (self.score["a"] - self.score["b"]) == 1: return "a"
    if self.score["b"] > 3 and (self.score["b"] - self.score["a"]) == 1: return "b"
    return False

  def is_all(self):
    if self.score["a"] == self.score["b"] and self.score["a"] < 3: return self.score["a"]
    return False

  def translate_score(self, score):
    if score == 0: return "LOVE"
    if score == 1: return "FIFTEEN"
    if score == 2: return "THIRTY"
    if score == 3: return "FORTY"

  def current_score(self):
    if self.is_winner(): return f"PLAYER {self.is_winner().upper()} WINS!"
    if self.is_deuce(): return "DEUCE"
    if self.is_advantage(): return f"ADVANTAGE {self.is_advantage().upper()}"
    if type(self.is_all()) == int: return f"{self.translate_score(self.is_all())} ALL"
    return f"{self.translate_score(self.score['a'])} : {self.translate_score(self.score['b'])}"

  def play(self):
    self.reset()
    while not self.is_winner():
      player = input("Winner of the point: ")
      while player not in self.score:
        player = input("Winner of the point (a or b): ")
      self.score_point(player)
      print("Score: ", self.current_score())
    again = input("Play again? (y/n) ")
    if again == "y": self.play()
