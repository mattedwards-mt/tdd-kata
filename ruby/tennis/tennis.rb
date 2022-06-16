class Game
  attr_accessor :score

  def initialize()
    reset
  end

  def reset
    @score = {"a" => 0, "b" => 0}  
  end

  def score_point(player)
    if is_winner
      msg = "We already have a winner. Reset to play again."
      p msg
      return msg
    end
    @score[player] += 1
  end

  def is_winner
    return "a" if @score["a"] > 3 and (@score["a"] - @score["b"]) > 1
    return "b" if @score["b"] > 3 and (@score["b"] - @score["a"]) > 1
    return false
  end

  def is_deuce
    return true if @score["a"] == @score["b"] and @score["a"] > 2
    return false
  end

  def is_all
    return true if @score["a"] == @score["b"] and @score["a"] < 3
    return false
  end

  def is_advantage
    return "a" if @score["a"] - @score["b"] == 1 and @score["a"] > 3
    return "b" if @score["b"] - @score["a"] == 1 and @score["b"] > 3
    return false
  end

  def convert_score(num)
    return "LOVE" if num == 0
    return "FIFTEEN" if num == 1
    return "THIRTY" if num == 2
    return "FORTY" if num == 3
  end

  def get_score
    a, b = convert_score(@score["a"]), convert_score(@score["b"])
    return "PLAYER #{is_winner.upcase} WINS!" if is_winner
    return "DEUCE" if is_deuce
    return "#{a} ALL" if is_all
    return "ADVANTAGE #{is_advantage.upcase}" if is_advantage
    return "#{a} : #{b}"
  end
end