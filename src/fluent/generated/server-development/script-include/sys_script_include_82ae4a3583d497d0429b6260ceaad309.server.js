var logger = Class.create();
logger.prototype = {
  initialize: function () {
	gs.info('logger init')
    this.settings = {};
    this.settings.enabled = (gs.getProperty('x_0221_fmqa.logging.enabled', 'false') === 'true')
  },

  log: function () {
	gs.info('logger.log')
	gs.info(arguments)
    if (!this.settings.enabled) return;

    const args = [...arguments];
    args.forEach(arg => {
      const message = (typeof arg === 'object') ? JSON.stringify(arg, null, 2) : arg;
      gs.info(message);
    })
  }
}