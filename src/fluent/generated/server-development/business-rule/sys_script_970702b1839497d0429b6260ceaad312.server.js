(function executeRule(current, previous /*null when async*/) {
	current.setValue('number', new NumberGenerator().getNextQuizNumber());
})(current, previous);