import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'E hksperiment1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hksperiment1',
          title: 'E hksperiment1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
