import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEHksperiment1ПрайсLForm from './forms/i-i-s-e-hksperiment1-прайс-l';
import IISEHksperiment1СписокУслугLForm from './forms/i-i-s-e-hksperiment1-список-услуг-l';
import IISEHksperiment1УслугиLForm from './forms/i-i-s-e-hksperiment1-услуги-l';
import IISEHksperiment1ПрайсEForm from './forms/i-i-s-e-hksperiment1-прайс-e';
import IISEHksperiment1СписокУслугEForm from './forms/i-i-s-e-hksperiment1-список-услуг-e';
import IISEHksperiment1УслугиEForm from './forms/i-i-s-e-hksperiment1-услуги-e';
import IISEHksperiment1ПрайсModel from './models/i-i-s-e-hksperiment1-прайс';
import IISEHksperiment1СписокУслугModel from './models/i-i-s-e-hksperiment1-список-услуг';
import IISEHksperiment1УслугиModel from './models/i-i-s-e-hksperiment1-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-e-hksperiment1-прайс': IISEHksperiment1ПрайсModel,
    'i-i-s-e-hksperiment1-список-услуг': IISEHksperiment1СписокУслугModel,
    'i-i-s-e-hksperiment1-услуги': IISEHksperiment1УслугиModel
  },

  'application-name': 'E hksperiment1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'E hksperiment1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hksperiment1',
          title: 'E hksperiment1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'e-hksperiment1': {
          caption: 'EHksperiment1',
          title: 'EHksperiment1',
          'i-i-s-e-hksperiment1-прайс-l': {
            caption: 'Прайс',
            title: ''
          },
          'i-i-s-e-hksperiment1-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-e-hksperiment1-список-услуг-l': {
            caption: 'Список услуг',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-e-hksperiment1-прайс-l': IISEHksperiment1ПрайсLForm,
    'i-i-s-e-hksperiment1-список-услуг-l': IISEHksperiment1СписокУслугLForm,
    'i-i-s-e-hksperiment1-услуги-l': IISEHksperiment1УслугиLForm,
    'i-i-s-e-hksperiment1-прайс-e': IISEHksperiment1ПрайсEForm,
    'i-i-s-e-hksperiment1-список-услуг-e': IISEHksperiment1СписокУслугEForm,
    'i-i-s-e-hksperiment1-услуги-e': IISEHksperiment1УслугиEForm
  },

});

export default translations;
