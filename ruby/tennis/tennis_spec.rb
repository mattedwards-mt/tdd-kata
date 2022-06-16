require 'rspec/autorun'
require_relative 'tennis.rb'

describe Game do

  let(:game) { Game.new }

  def set_score(a, b)
    game.score=({"a" => a, "b" => b})
  end

  context "The class" do
    it "can be instantiated" do
      expect(game.class).to be(Game)
    end

    it "has a score property initially set to 0-0" do
      expect(game.score["a"]).to be(0)
      expect(game.score["b"]).to be(0)
    end
  end

  describe ".score_point" do
    context "where A scores" do
      it "increases A's score and not B's" do
        game.score_point("a")
        expect(game.score["a"]).to be(1)
        game.score_point("a")
        expect(game.score["a"]).to be(2)
        expect(game.score["b"]).to be(0)
      end
    end

    context "where B scores" do
      it "increases B's score and not A's" do
        game.score_point("b")
        expect(game.score["b"]).to be(1)
        game.score_point("b")
        expect(game.score["b"]).to be(2)
        expect(game.score["a"]).to be(0)
      end
    end
  end

  describe ".is_winner" do
    context "given there is a winner" do
      context "where score is 4-0" do
        it "returns 'a'" do
          set_score(4,0)
          expect(game.is_winner).to eq("a")
        end
      end
      context "where score is 5-3" do
        it "returns 'a'" do
          set_score(5,3)
          expect(game.is_winner).to eq("a")
        end
      end
      context "where score is 0-4" do
        it "returns 'b'" do
          set_score(0,4)
          expect(game.is_winner).to eq("b")
        end
      end
      context "where score is 3-5" do
        it "returns 'b'" do
          set_score(3,5)
          expect(game.is_winner).to eq("b")
        end
      end
    end
    
    context "given there is no winner" do
      context "eg. where score is 0-3, 4-3 or 7-6" do
        it "returns false" do
          set_score(0,3)
          expect(game.is_winner).to eq(false)
          set_score(4,3)
          expect(game.is_winner).to eq(false)
          set_score(7,6)
          expect(game.is_winner).to eq(false)
        end
      end
    end
  end

  describe ".is_deuce" do
    context "given scores are equal" do
      context "and each score >= 3" do
        it "returns true" do
          set_score(3,3)
          expect(game.is_deuce).to eq(true)
          set_score(4,4)
          expect(game.is_deuce).to eq(true)
          set_score(5,5)
          expect(game.is_deuce).to eq(true)
          set_score(6,6)
          expect(game.is_deuce).to eq(true)
          set_score(12,12)
          expect(game.is_deuce).to eq(true)
        end
      end
      context "and each score < 3" do
        it "returns false" do
          expect(game.is_deuce).to eq(false)
          set_score(1,1)
          expect(game.is_deuce).to eq(false)
          set_score(2,2)
          expect(game.is_deuce).to eq(false)
        end
      end
    end
  end

  describe ".is_all" do
    context "given scores are equal" do
      context "and each score < 3" do
        it "returns true" do
          expect(game.is_all).to eq(true)
          set_score(1,1)
          expect(game.is_all).to eq(true)
          set_score(2,2)
          expect(game.is_all).to eq(true)
        end
      end
    end
  end

  it "recognises advantage at 4-3, 7-8 & 13-12" do
    4.times { game.score_point("a") }
    3.times { game.score_point("b") }
    expect(game.is_advantage).to eq("a")
    3.times { game.score_point("a") }
    5.times { game.score_point("b") }
    expect(game.is_advantage).to eq("b")
    6.times { game.score_point("a") }
    4.times { game.score_point("b") }
    expect(game.is_advantage).to eq("a")
  end

  it "recognises no advantage at 1-2, 3-2 & 4-4" do
    game.score_point("a")
    2.times { game.score_point("b") }
    expect(game.is_advantage).to eq(false)
    2.times { game.score_point("a") }
    expect(game.is_advantage).to eq(false)
    game.score_point("a")
    .times { game.score_point("b") }
    expect(game.is_advantage).to eq(false)
  end
end
