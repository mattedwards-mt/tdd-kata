class Turnstile

  attr_accessor :locked

  def initialize
    @locked = true
  end

  def coin
    if @locked
      @locked = false
    else
      print "Why thank you!"
    end
  end

  def push
    if @locked
      print "ALARM!"
    else
      @locked = true
    end
  end

end