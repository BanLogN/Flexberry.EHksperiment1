import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.e-hksperiment1.caption'),
          title: i18n.t('forms.application.sitemap.e-hksperiment1.title'),
          children: [{
            link: 'i-i-s-e-hksperiment1-прайс-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-прайс-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-прайс-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-e-hksperiment1-услуги-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-услуги-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-e-hksperiment1-список-услуг-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-список-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment1.i-i-s-e-hksperiment1-список-услуг-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})