let GameWins = {
  amount() {
    return player.gameWins;
  },
  multiplier() {
    return this.amount();
  },
  restart() {
	let oldWins = player.gameWins
	Saving.resetGameWithConfirmation();
	player.gameWins = oldWins
  },
  increment() {
    player.gameWins++;
	this.restart();
  },
}