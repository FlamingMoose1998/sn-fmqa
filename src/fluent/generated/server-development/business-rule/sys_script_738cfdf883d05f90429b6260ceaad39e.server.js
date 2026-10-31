(function executeRule(current, previous /*null when async*/) {
	const number = new NumberGenerator().getNextQuizNumber();
	current.setValue(number);
})(current, previous);