import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  classNames: ['main'],
  classNameBindings: ['isHeaderFixed:main_header-fixed', 'isArabic:main_is-arabic'],
  isHeaderFixed: false,
  i18n: service(),

  /**
   * scroll to current section
   * set on scroll event listner to fix the nav bar
   */
  didInsertElement() {
    this._super(...arguments);
    this.get('i18n').locale === 'en' ? this.set('isArabic', false) : this.set('isArabic', true);

    if (this.get('section')) {
      $('html').animate({
        scrollTop: $(`#${this.get('section')}`).offset().top - 150
      }, 1000);
    }

    $(window).on(`scroll.${this.elementId}`, () => {
      $('html').scrollTop() > 33 ? this.set('isHeaderFixed', true): this.set('isHeaderFixed', false);
      });
  },

  /**
   * remove the on scroll event listner
   * set isHeaderFixed to false
   */
  willDestroyElement() {
    $(window).off(`.${this.elementId}`);
  },  

  
  actions: {
    changeLanguage() {
      if (this.get('i18n').locale === 'en') {
        this.get('i18n').set('locale', 'ar');
        this.set('isArabic', true);
      } else {
        this.get('i18n').set('locale', 'en'); 
        this.set('isArabic', false);
      }
    }
  }
  
})
