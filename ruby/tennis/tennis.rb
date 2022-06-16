class Game
  attr_accessor :score

  def initialize()
    @score = {"a" => 0, "b" => 0}
  end

  def score_point(player)
    @score[player] += 1
  end

  def is_winner()
    return "a" if @score["a"] > 3 and (@score["a"] - @score["b"]) > 1
    return "b" if @score["b"] > 3 and (@score["b"] - @score["a"]) > 1
    return false
  end

  def is_deuce()
    return true if @score["a"] == @score["b"] and @score["a"] > 2
    return false
  end

  def is_all()
    return true if @score["a"] == @score["b"] and (@score["a"] == 1 or @score["a"] == 2)
    return false
  end

  def is_advantage()
    return "a" if @score["a"] - @score["b"] == 1 and @score["a"] > 3
    return "b" if @score["b"] - @score["a"] == 1 and @score["b"] > 3
    return false
  end
end