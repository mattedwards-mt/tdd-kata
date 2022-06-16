import unittest
from unittest.mock import MagicMock
from tennis import Game

class Test_Game_Object(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_object_can_be_instantiated(self):
    self.assertIsInstance(self.game, Game)

  def test_object_has_score_property_set_to_nil_nil(self):
    self.assertEqual(self.game.score, {"a": 0, "b": 0})


class Test_Score_Point_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_score_point_for_A_increases_A_score(self):
    self.game.score_point("a");
    self.assertEqual(self.game.score["a"], 1)

  def test_score_point_for_B_increases_B_score(self):
    self.game.score_point("b")
    self.game.score_point("b")
    self.assertEqual(self.game.score["b"], 2)


class Test_Is_Winner_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_is_winner_recognises_victory_at_4_0(self):
    self.game.score = {"a": 4, "b": 0}
    self.assertEqual(self.game.is_winner(), "a")

  def test_is_winner_recognises_victory_at_0_4(self):
    self.game.score = {"a": 0, "b": 4}
    self.assertEqual(self.game.is_winner(), "b")

  def test_is_winner_recognises_victory_at_5_3(self):
    self.game.score = {"a": 5, "b": 3}
    self.assertEqual(self.game.is_winner(), "a")

  def test_is_winner_false_at_3_4(self):
    self.game.score = {"a": 3, "b": 4}
    self.assertFalse(self.game.is_winner())


class Test_Is_Deuce_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_is_deuce_returns_false_at_1_1(self):
    self.game.score = {"a": 1, "b": 1}
    self.assertFalse(self.game.is_deuce())

  def test_is_deuce_returns_true_at_3_3(self):
    self.game.score = {"a": 3, "b": 3}
    self.assertTrue(self.game.is_deuce())


  def test_is_deuce_returns_true_at_higher_ties(self):
    self.game.score = {"a": 6, "b": 6}
    self.assertTrue(self.game.is_deuce())
    self.game.score = {"a": 8, "b": 6}
    self.assertFalse(self.game.is_deuce())


class Test_Is_Advantage_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_is_advantage_true_at_4_3(self):
    self.game.score = {"a": 4, "b": 3}
    self.assertEqual(self.game.is_advantage(), "a")

  def test_is_advantage_true_at_11_10(self):
    self.game.score = {"a": 11, "b": 10}
    self.assertEqual(self.game.is_advantage(), "a")

  def test_is_advantage_false_at_3_2(self):
    self.game.score = {"a": 2, "b": 3}
    self.assertFalse(self.game.is_advantage())


class Test_Is_All_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_returns_0_at_0_0(self):
    self.assertEqual(self.game.is_all(), 0)

  def test_returns_false_at_1_0(self):
    self.game.score = {"a": 1, "b": 0}
    self.assertFalse(self.game.is_all())

  def test_returns_false_where_scores_above_deuce(self):
    self.game.score = {"a": 6, "b": 6}
    self.assertFalse(self.game.is_all())


class Test_Translate_Score_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_translate_mainstream_scores(self):
    self.assertEqual(self.game.translate_score(0), "LOVE")
    self.assertEqual(self.game.translate_score(1), "FIFTEEN")
    self.assertEqual(self.game.translate_score(2), "THIRTY")
    self.assertEqual(self.game.translate_score(3), "FORTY")
    
  
class Test_Current_Score_Method(unittest.TestCase):

  def setUp(self):
    self.game = Game()

  def test_returns_deuce_when_deuce(self):
    self.game.is_deuce = MagicMock(return_value=True)
    self.assertEqual(self.game.current_score(), "DEUCE")

  def test_returns_advantage_a_when_advantage_a(self):
    self.game.is_advantage = MagicMock(return_value="a")
    self.assertEqual(self.game.current_score(), "ADVANTAGE A")

  def test_returns_player_a_wins_when_player_a_wins(self):
    self.game.is_winner = MagicMock(return_value="a")
    self.assertEqual(self.game.current_score(), "PLAYER A WINS!")

  def test_returns_all_when_low_scoring_draw(self):
    self.game.is_all = MagicMock(return_value=2)
    self.assertEqual(self.game.current_score(), "THIRTY ALL")

  def test_returns_correct_standard_scores(self):
    self.game.score = {"a": 2, "b": 0}
    self.assertEqual(self.game.current_score(), "THIRTY : LOVE")
    self.game.score = {"a": 0, "b": 3}
    self.assertEqual(self.game.current_score(), "LOVE : FORTY")


if __name__ == '__main__':
  unittest.main()