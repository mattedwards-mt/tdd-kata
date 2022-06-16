import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MumblingTest {

  static Mumbling mumbling;

  @BeforeAll
  static void init() {
    mumbling = new Mumbling();
  }

  @Test
  void classCanBeInstantiated() {
    assertTrue(mumbling instanceof Mumbling);
  }

  @Test
  void mumbleMethodReturnsAString() {
    String mumble = mumbling.mumble("a");
    assertTrue(mumble instanceof String);
  }

  @Test
  void anEmptyStringShouldBeReturnedUnchanged() {
    assertEquals("", mumbling.mumble(""));
  }

  @Test
  void singleLetterShouldReturnSameLetterCapitalised() {
    assertEquals("A", mumbling.mumble("a"));
    assertEquals("Z", mumbling.mumble("z"));
  }

  @Test
  void bAsSecondCharShouldBecomeHyphenBb() {
    assertEquals("-Bb", mumbling.convertChar("b", 1));
  }

  @Test
  void tAsSixthCharShouldReturnHyphenTttttt() {
    assertEquals("-Tttttt", mumbling.convertChar("t", 5));
  }

  @Test
  void shouldReturnCorrectlyFormattedStrings() {
    assertEquals("A-Bb-Ccc", mumbling.mumble("abC"));
    assertEquals("A-Bb-Ccc-Dddd", mumbling.mumble("aBCd"));
    assertEquals("Q-Ww-Eee-Rrrr-Ttttt-Yyyyyy", mumbling.mumble("QWERTY"));
  }

}