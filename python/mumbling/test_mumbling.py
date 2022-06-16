import unittest
from mumbling import Mumbling

class TestMumblingObject(unittest.TestCase):
  """Mumbling class"""

  def setUp(self):
    self.mumbling = Mumbling()

  def test_object_can_be_instantiated(self):
    self.assertIsInstance(self.mumbling, Mumbling)

class TestMumbleMethod(unittest.TestCase):

  def setUp(self):
    self.mumbling = Mumbling()

  def test_mumble_returns_string(self):
    self.assertIsInstance(self.mumbling.mumble("a"), str)

  def test_mumble_returns_an_empty_string_unchanged(self):
    self.assertEqual(self.mumbling.mumble(""), "")

  def test_single_char_returned_as_uppercase(self):
    self.assertEqual(self.mumbling.mumble("a"), "A")


class TestConvertCharMethod(unittest.TestCase):

  def setUp(self):
    self.mumbling = Mumbling()

  def test_index_two_returns_two_chars_with_one_upper(self):
    self.assertEqual(self.mumbling.convert_char("b", 2), "Bb")

  def test_index_five_returns_five_chars_with_one_upper(self):
    self.assertEqual(self.mumbling.convert_char("F", 5), "Fffff")


class TestMumbleMethodIncorporatingConvertChar(unittest.TestCase):

  def setUp(self):
    self.mumbling = Mumbling()

  def test_aBc_returns_ABbCcc_with_dashes(self):
    self.assertEqual(self.mumbling.mumble("aBc"), "A-Bb-Ccc")

  def test_QWERTY_returns_QWwEeeRrrrTttttYyyyyy_with_dashes(self):
    self.assertEqual(self.mumbling.mumble("QWERTY"), "Q-Ww-Eee-Rrrr-Ttttt-Yyyyyy")


if __name__ == '__main__':
  unittest.main()