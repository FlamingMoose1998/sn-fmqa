(function executeRule(current, previous /*null when async*/) {
	if (gs.isInteractive()){
		g_scratchpad.number = new NumberGenerator().getNextQuizNumber();
	}
})(current, previous);