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
    context "given there is no winner" do
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
    context "given there is already a winner" do
      it "leaves score untouched and returns message" do
        set_score(5,3)
        expect(game.score_point("a")).to eq("We already have a winner. Reset to play again.")
        expect(game.score["b"]).to be(3)
        expect(game.score["a"]).to be(5)
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

  describe ".is_advantage" do
    context "given scores differ by just 1 point" do
      context "where lower score > 2" do
        it "returns 'a' for scores of 4-3, 5-4, 6-5, 13-12" do
          set_score(4,3)
          expect(game.is_advantage).to eq("a")
          set_score(5,4)
          expect(game.is_advantage).to eq("a")
          set_score(6,5)
          expect(game.is_advantage).to eq("a")
          set_score(13,12)
          expect(game.is_advantage).to eq("a")
        end
        it "returns 'b' for scores of 3-4, 4-5, 5-6, 12-13" do
          set_score(3,4)
          expect(game.is_advantage).to eq("b")
          set_score(4,5)
          expect(game.is_advantage).to eq("b")
          set_score(5,6)
          expect(game.is_advantage).to eq("b")
          set_score(12,13)
          expect(game.is_advantage).to eq("b")
        end
      end
      context "where lower score < 3" do
        it "returns false" do
          set_score(1,0)
          expect(game.is_advantage).to eq(false)
          set_score(2,1)
          expect(game.is_advantage).to eq(false)
          set_score(3,2)
          expect(game.is_advantage).to eq(false)
          set_score(0,1)
          expect(game.is_advantage).to eq(false)
          set_score(1,2)
          expect(game.is_advantage).to eq(false)
          set_score(2,3)
          expect(game.is_advantage).to eq(false)
        end
      end
    end
    context "given scores don't differ by just 1 point" do
      it "returns false" do
        expect(game.is_advantage).to eq(false)
        set_score(2,0)
        expect(game.is_advantage).to eq(false)
        set_score(5,7)
        expect(game.is_advantage).to eq(false)
        set_score(17,15)
        expect(game.is_advantage).to eq(false)
      end
    end
  end

  describe ".convert_score" do
    context "given score is less than 4" do
      it "returns 'LOVE' for score of 0" do
        expect(game.convert_score(0)).to eq("LOVE")
      end
      it "returns 'FIFTEEN' for score of 1" do
        expect(game.convert_score(1)).to eq("FIFTEEN")
      end
      it "returns 'THIRTY' for score of 2" do
        expect(game.convert_score(2)).to eq("THIRTY")
      end
      it "returns 'FORTY' for score of 3" do
        expect(game.convert_score(3)).to eq("FORTY")
      end
    end
    context "given score is greater than 3" do
      it "returns 'nil'" do
        expect(game.convert_score(4)).to be(nil)
        expect(game.convert_score(5)).to be(nil)
        expect(game.convert_score(6)).to be(nil)
        expect(game.convert_score(20)).to be(nil)
      end
    end
  end

  describe ".get_score" do
    context "given no winner or 'special' score format" do
      it "returns 'FIFTEEN : LOVE' for 1-0" do
        set_score(1,0)
        expect(game.get_score).to eq("FIFTEEN : LOVE")
      end
      it "returns 'LOVE : FORTY' for 0-3" do
        set_score(0,3)
        expect(game.get_score).to eq("LOVE : FORTY")
      end
    end
    context "given we have a winner" do
      it "returns 'PLAYER A WINS! for 4-0" do
        set_score(4,0)
        expect(game.get_score).to eq("PLAYER A WINS!")
      end
      it "returns 'PLAYER B WINS! for 0-4" do
        set_score(0,4)
        expect(game.get_score).to eq("PLAYER B WINS!")
      end
      it "returns 'PLAYER B WINS! for 7-5" do
        set_score(7,5)
        expect(game.get_score).to eq("PLAYER A WINS!")
      end
    end
    context "given it's an 'all' score" do
      it "returns 'FIFTEEN ALL' for 1-1" do
        set_score(1,1)
        expect(game.get_score).to eq("FIFTEEN ALL")
      end
    end
    context "given it's a 'deuce' score" do
      it "returns 'DEUCE' for 3-3" do
        set_score(3,3)
        expect(game.get_score).to eq("DEUCE")
      end
      it "returns 'DEUCE' for 7-7" do
        set_score(7,7)
        expect(game.get_score).to eq("DEUCE")
      end
    end
    context "given it's an 'advantage' score" do
      it "returns 'ADVANTAGE A' for 4-3" do
        set_score(4,3)
        expect(game.get_score).to eq("ADVANTAGE A")
      end
      it "returns 'ADVANTAGE B' for 6-7" do
        set_score(6,7)
        expect(game.get_score).to eq("ADVANTAGE B")
      end
    end
  end
end
