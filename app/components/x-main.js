import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  classNames: ['main'],

  didInsertElement() {
    this._super(...arguments);

    if (this.get('section')) {
      $('html').animate({
        scrollTop: $(`#${this.get('section')}`).offset().top
      }, 1000);
    }

  }
})
