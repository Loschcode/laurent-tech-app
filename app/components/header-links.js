import CONFIG from  '../config/environment';
import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super();
  },

  myself: CONFIG.APP.myself

});
