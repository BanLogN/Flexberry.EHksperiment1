import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-e-hksperiment1-список-услуг', 'Unit | Serializer | i-i-s-e-hksperiment1-список-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-e-hksperiment1-список-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-e-hksperiment1-прайс',
    'model:i-i-s-e-hksperiment1-список-услуг',
    'model:i-i-s-e-hksperiment1-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
