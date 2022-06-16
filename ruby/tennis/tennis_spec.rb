require 'rspec/autorun'
require_relative 'tennis.rb'

describe Game do

  let(:game) { Game.new }

  it "can be instantiated" do
    expect(game.class).to be(Game)
  end

  it "has a score property initially set to 0-0" do
    expect(game.score["a"]).to be(0)
    expect(game.score["b"]).to be(0)
  end

  it "increases A's score where A scores the point" do
    game.score_point("a")
    expect(game.score["a"]).to be(1)
    expect(game.score["b"]).to be(0)
  end

  it "increases B's score where B scores the point" do
    game.score_point("b")
    expect(game.score["a"]).to be(0)
    expect(game.score["b"]).to be(1)
  end

  it "recognises a winner at 4-0" do
    4.times { game.score_point("a") }
    expect(game.is_winner).to eq("a")
  end

  it "recognises a winner at 0-4" do
    4.times { game.score_point("b") }
    expect(game.is_winner).to eq("b")
  end

  it "recognises a winner at 5-3" do
    5.times { game.score_point("a") }
    3.times { game.score_point("b") }
    expect(game.is_winner).to eq("a")
  end

  it "recognises a winner at 3-5" do
    3.times { game.score_point("a") }
    5.times { game.score_point("b") }
    expect(game.is_winner).to eq("b")
  end

  it "doesn't recognise a winner at 0-3, 4-3 or 7-6" do
    3.times { game.score_point("b") }
    expect(game.is_winner).to eq(false)
    4.times { game.score_point("a") }
    expect(game.is_winner).to eq(false)
    3.times { game.score_point("a") }
    3.times { game.score_point("b") }
    expect(game.is_winner).to eq(false)
  end

  it "recognises deuce at 3-3, 4-4 & 7-7" do
    3.times { game.score_point("a") }
    3.times { game.score_point("b") }
    expect(game.is_deuce).to eq(true)
    game.score_point("a")
    game.score_point("b")
    expect(game.is_deuce).to eq(true)
    3.times { game.score_point("a") }
    3.times { game.score_point("b") }
    expect(game.is_deuce).to eq(true)
  end

  it "doesn't recognise deuce at 0-0, 1-1 or 2-2" do
    expect(game.is_deuce).to eq(false)
    game.score_point("a")
    game.score_point("b")
    expect(game.is_deuce).to eq(false)
    game.score_point("a")
    game.score_point("b")
    expect(game.is_deuce).to eq(false)
  end

  it "recognises 'all' at 1-1 & 2-2" do
    expect(game.is_all).to eq(false)
    game.score_point("a")
    game.score_point("b")
    expect(game.is_all).to eq(true)
    game.score_point("a")
    game.score_point("b")
    expect(game.is_all).to eq(true)
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
