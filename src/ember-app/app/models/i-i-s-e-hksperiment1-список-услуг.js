import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокУслугMixin
} from '../mixins/regenerated/models/i-i-s-e-hksperiment1-список-услуг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокУслугMixin, Validations, {
});

defineProjections(Model);

export default Model;
