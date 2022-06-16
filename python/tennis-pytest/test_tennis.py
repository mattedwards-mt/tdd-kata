from tennis import Game
import pytest
from unittest.mock import MagicMock

@pytest.fixture
def game():
  return Game()


def test_object_can_be_instantiated():
  isinstance(game, Game)

def test_object_has_score_property_set_to_nil_nil(game):
  assert game.score == {"a": 0, "b": 0}

def test_score_point_for_A_increases_A_score(game):
  game.score_point("a")
  assert game.score == {"a": 1, "b": 0}

def test_score_point_for_B_increases_B_score(game):
  game.score_point("b")
  game.score_point("b")
  assert game.score == {"a": 0, "b": 2}


def test_is_winner_recognises_victory_at_4_0(game):
    game.score = {"a": 4, "b": 0}
    assert game.is_winner() == "a"

def test_is_winner_recognises_victory_at_0_4(game):
  game.score = {"a": 0, "b": 4}
  assert game.is_winner() == "b"

def test_is_winner_recognises_victory_at_5_3(game):
  game.score = {"a": 5, "b": 3}
  assert game.is_winner() == "a"

def test_is_winner_false_at_3_4(game):
  game.score = {"a": 3, "b": 4}
  assert game.is_winner() is False


def test_is_deuce_returns_false_at_1_1(game):
  game.score = {"a": 1, "b": 1}
  assert game.is_deuce() is False

def test_is_deuce_returns_true_at_3_3(game):
  game.score = {"a": 3, "b": 3}
  assert game.is_deuce() is True

def test_is_deuce_returns_true_at_higher_ties(game):
  game.score = {"a": 6, "b": 6}
  assert game.is_deuce() is True
  game.score = {"a": 8, "b": 6}
  assert game.is_deuce() is False


def test_is_advantage_true_at_4_3(game):
  game.score = {"a": 4, "b": 3}
  assert game.is_advantage() == "a"

def test_is_advantage_true_at_11_10(game):
  game.score = {"a": 11, "b": 10}
  assert game.is_advantage() == "a"

def test_is_advantage_false_at_3_2(game):
  game.score = {"a": 2, "b": 3}
  assert game.is_advantage() is False


def test_returns_0_at_0_0(game):
  assert game.is_all() == 0

def test_returns_false_at_1_0(game):
  game.score = {"a": 1, "b": 0}
  assert game.is_all() is False

def test_returns_false_where_scores_above_deuce(game):
  game.score = {"a": 6, "b": 6}
  assert game.is_all() is False


def test_translate_mainstream_scores(game):
  assert game.translate_score(0) == "LOVE"
  assert game.translate_score(1) == "FIFTEEN"
  assert game.translate_score(2) == "THIRTY"
  assert game.translate_score(3) == "FORTY"


def test_returns_deuce_when_deuce(game):
  game.is_deuce = MagicMock(return_value=True)
  assert game.current_score() == "DEUCE"

def test_returns_advantage_a_when_advantage_a(game):
  game.is_advantage = MagicMock(return_value="a")
  assert game.current_score() == "ADVANTAGE A"

def test_returns_player_a_wins_when_player_a_wins(game):
  game.is_winner = MagicMock(return_value="a")
  assert game.current_score() == "PLAYER A WINS!"

def test_returns_all_when_low_scoring_draw(game):
  game.is_all = MagicMock(return_value=2)
  assert game.current_score() == "THIRTY ALL"

def test_returns_correct_standard_scores(game):
  game.score = {"a": 2, "b": 0}
  assert game.current_score() == "THIRTY : LOVE"
  game.score = {"a": 0, "b": 3}
  assert game.current_score() == "LOVE : FORTY"