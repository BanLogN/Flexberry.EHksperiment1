import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  прайс: DS.belongsTo('i-i-s-e-hksperiment1-прайс', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-e-hksperiment1-услуги.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прайс: {
    descriptionKey: 'models.i-i-s-e-hksperiment1-услуги.validations.прайс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-e-hksperiment1-услуги', {
    код: attr('Код', { index: 0 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-e-hksperiment1-услуги', {
    код: attr('Код', { index: 0 })
  });
};
