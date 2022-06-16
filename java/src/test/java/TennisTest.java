import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TennisTest {

  Tennis tennis;

  void scorePoints(String sequence) {
    for (int i = 0; i < sequence.length(); i++) {
      tennis.scorePoint(String.valueOf(sequence.charAt(i)));
    }
  }

  @BeforeEach
  void setUp() {
    tennis = new Tennis();
  }

  @Test
  void classCanBeInstantiated() {
    assertTrue(tennis instanceof Tennis);
  }

  @Test
  void initialScoreShouldBeLoveLove() {
    assertEquals("Love:Love", tennis.getScore());
  }

  @Test
  void firstPointScoredByPlayerAShouldIncrementScoreAToFifteen() {
    tennis.scorePoint("a");
    assertEquals("Fifteen:Love", tennis.getScore());
  }

  @Test
  void secondPointByPlayerAShouldIncrementScoreAToThirty() {
    scorePoints("aa");
    assertEquals("Thirty:Love", tennis.getScore());
  }

  @Test
  void thirdPointByPlayerAShouldIncrementScoreAToForty() {
    scorePoints("aaa");
    assertEquals("Forty:Love", tennis.getScore());
  }

  @Test
  void onePointEachShouldResultInFifteenAll() {
    scorePoints("ab");
    assertEquals("Fifteen:Fifteen", tennis.getScore());
  }

  @Test
  void fortyPointsEachShouldBeCalledDeuce() {
    scorePoints("ababab");
    assertEquals("Deuce", tennis.getScore());
  }

  @Test
  void playerAScoringAtFortyLoveShouldResultInAWinForPlayerA() {
    scorePoints("aaa");
    tennis.scorePoint("a");
    assertEquals("Player A Wins!", tennis.getScore());
  }

  @Test
  void playerBScoringAtFortyLoveShouldResultInAWinForPlayerB() {
    scorePoints("bbbb");
    assertEquals("Player B Wins!", tennis.getScore());
  }

  @Test
  void playerAScoringAtDeuceShouldResultInAdvantageA() {
    scorePoints("abababa");
    assertEquals("Advantage Player A", tennis.getScore());
  }

  @Test
  void playerBScoringAtDeuceShouldResultInAdvantageB() {
    scorePoints("abababb");
    assertEquals("Advantage Player B", tennis.getScore());
  }

  @Test
  void playerAScoringAtAdvantageAShouldResultInAWinForPlayerA() {
    scorePoints("aaabbba");
    tennis.scorePoint("a");
    assertEquals("Player A Wins!", tennis.getScore());
  }

  @Test
  void playerBScoringAtAdvantageAShouldResultInDeuce() {
    scorePoints("aaabbba");
    tennis.scorePoint("b");
    assertEquals("Deuce", tennis.getScore());
  }

  @Test
  void playerAScoringAtAdvantageBShouldResultInDeuce() {
    scorePoints("aaabbbb");
    tennis.scorePoint("a");
    assertEquals("Deuce", tennis.getScore());
  }

  @Test
  void fullGameWithAdvantagesOnBothSides() {
    tennis.scorePoint("a");
    assertEquals("Fifteen:Love", tennis.getScore());
    tennis.scorePoint("a");
    assertEquals("Thirty:Love", tennis.getScore());
    tennis.scorePoint("b");
    assertEquals("Thirty:Fifteen", tennis.getScore());
    tennis.scorePoint("a");
    assertEquals("Forty:Fifteen", tennis.getScore());
    tennis.scorePoint("b");
    assertEquals("Forty:Thirty", tennis.getScore());
    tennis.scorePoint("b");
    assertEquals("Deuce", tennis.getScore());
    tennis.scorePoint("b");
    assertEquals("Advantage Player B", tennis.getScore());
    tennis.scorePoint("a");
    assertEquals("Deuce", tennis.getScore());
    tennis.scorePoint("a");
    assertEquals("Advantage Player A", tennis.getScore());
    tennis.scorePoint("a");
    assertEquals("Player A Wins!", tennis.getScore());
  }

}