// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var coins = {};

    if (currency <= 0) {
      return coins;
    } else if (currency > 10000) {
      coins.error = "You are rich, my friend! We don't have so much coins for exchange";
      return coins;
	}
	if (Math.floor(currency/50) > 0) {
		coins.H = Math.floor(currency/50);
	}
	currency = currency % 50;
	if (Math.floor(currency/25)) {
		coins.Q = Math.floor(currency/25);
	}
	currency = currency % 25;
	if (Math.floor(currency/10)) {
		coins.D = Math.floor(currency/10);
	}
	currency = currency % 10;
	if (Math.floor(currency/5)) {
		coins.N = Math.floor(currency/5);
	}
	if ((currency % 5) > 0) {
		coins.P = currency % 5;
	}
	return coins;
}
