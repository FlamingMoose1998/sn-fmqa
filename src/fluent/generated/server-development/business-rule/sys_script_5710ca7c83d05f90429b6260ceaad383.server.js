(function executeRule(current, previous /*null when async*/) {
	g_scratchpad.number = new NumberGenerator().getNextQuizNumber();
})(current, previous);