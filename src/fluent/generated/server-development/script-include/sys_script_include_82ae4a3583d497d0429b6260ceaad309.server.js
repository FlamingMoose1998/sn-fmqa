var logger = Class.create();
logger.prototype = {
  initialize: function () {
    this.settings = {};
    this.settings.enabled = (gs.getProperty('x_0221_fmqa.logging.enabled', 'false') === 'true')
  },

  log: function () {
    if (!this.settings.enabled) return;

    const args = [...arguments];
    args.forEach(arg => {
      const message = (typeof arg === 'object') ? JSON.stringify(arg, null, 2) : arg;
      gs.info(message);
    })
  }
}