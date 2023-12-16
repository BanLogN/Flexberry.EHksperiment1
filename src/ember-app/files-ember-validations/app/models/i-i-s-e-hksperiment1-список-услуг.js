import {
  defineNamespace,
  defineProjections,
  Model as СписокУслугMixin
} from '../mixins/regenerated/models/i-i-s-e-hksperiment1-список-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
