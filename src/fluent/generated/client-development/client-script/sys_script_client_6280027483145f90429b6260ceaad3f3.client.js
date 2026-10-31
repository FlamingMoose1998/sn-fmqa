function onLoad() {
	if (!g_form.getValue('number')){
		g_form.setValue('number', g_scratchpad.number);
	}
}