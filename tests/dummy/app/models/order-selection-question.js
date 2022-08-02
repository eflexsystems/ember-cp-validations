import {
  validator,
  buildValidations,
} from '@eflexsystems/ember-tracked-validations';
import Model, { attr, belongsTo } from '@ember-data/model';

@buildValidations({
  order: {
    description: 'Order',
    validators: [validator('presence', true)],
  },
  selection: {
    description: 'Order Selection',
    validators: [validator('presence', true)],
  },
  text: {
    description: 'Question Text',
    validators: [validator('presence', true)],
  },
})
export default class OrderSelectionQuestion extends Model {
  @belongsTo('order', { async: false }) order;
  @belongsTo('order-selection', { async: false }) selection;
  @attr('string') text;
}
