import { Serializer as ПрайсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-hksperiment1-прайс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрайсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
