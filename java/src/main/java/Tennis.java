import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Tennis {

  private final Map<String, String> score;
  private final Map<String, String> scoreMapper;

  public Tennis() {
    this.score = new HashMap<>();
    this.score.put("a", "Love");
    this.score.put("b", "Love");

    this.scoreMapper = new HashMap<>();
    this.scoreMapper.put("Love", "Fifteen");
    this.scoreMapper.put("Fifteen", "Thirty");
    this.scoreMapper.put("Thirty", "Forty");
  }

  public void scorePoint(String player) {
    String otherPlayer = defineOtherPlayer(player);
    String playerScore = scoreForPlayer(player);
    String updatedScore = this.scoreMapper.get(playerScore);

    if (isMatchPoint(player)) updatedScore = "victory";
    if (isDeuce()) updatedScore = "advantage";
    if (isAdvantage(player)) updatedScore = "victory";
    if (isAdvantage(otherPlayer)) {
      player = otherPlayer;
      updatedScore = "Forty";
    }

    this.score.put(player, updatedScore);
  }

  public String getScore() {
    if (isVictory("a")) return "Player A Wins!";
    if (isVictory("b")) return "Player B Wins!";
    if (isAdvantage("a")) return "Advantage Player A";
    if (isAdvantage("b")) return "Advantage Player B";
    if (isDeuce()) return "Deuce";
    return scoreForPlayer("a") + ":" + scoreForPlayer("b");
  }

  private Boolean isDeuce() {
    return Objects.equals(scoreForPlayer("a"), "Forty") && Objects.equals(scoreForPlayer("b"), "Forty");
  }

  private Boolean isAdvantage(String player) {
    return Objects.equals(scoreForPlayer(player), "advantage");
  }

  private Boolean isMatchPoint(String player) {
    String otherPlayer = defineOtherPlayer(player);
    if (Objects.equals(this.score.get(player), "Forty")) {
      return !Objects.equals(this.score.get(otherPlayer), "Forty") && !Objects.equals(this.score.get(otherPlayer), "advantage");
    }
    return false;
  }

  private Boolean isVictory(String player) {
    return Objects.equals(scoreForPlayer(player), "victory");
  }

  private String defineOtherPlayer(String player) {
    if (Objects.equals(player, "a")) {
      return "b";
    }
    return "a";
  }

  private String scoreForPlayer(String player) {
    return this.score.get(player);
  }
}
