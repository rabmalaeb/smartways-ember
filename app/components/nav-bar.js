import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagName: 'ul',

  classNames: ['nav-bar'],

  actions: {
    scroll(id) {
      $('html').animate({
        scrollTop: $(`#${id}`).offset().top
      }, 1000);
      return true;
    }
  }
});
