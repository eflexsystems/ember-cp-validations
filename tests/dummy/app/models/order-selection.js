import { validator, buildValidations } from 'ember-cp-validations';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

@buildValidations({
  quantity: {
    description: 'Quantity',
    validators: [
      validator('ds-error'),
      validator('number', {
        gte: 1,
      }),
    ],
  },
  order: {
    description: 'Order',
    validators: [
      validator('ds-error'),
      validator('belongs-to'),
      validator('presence', true),
    ],
  },
  line: {
    description: 'Order Line',
    validators: [validator('ds-error'), validator('presence', true)],
  },
  questions: {
    description: 'Order Selection Questions',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('length', {
        min: 1,
      }),
    ],
  },
})
export default class OrderSelection extends Model {
  @belongsTo('order', { async: true }) order;
  @belongsTo('order-line', { async: true }) line;
  @hasMany('order-selection-question', { async: true }) questions;
  @attr('number') quantity;
}
