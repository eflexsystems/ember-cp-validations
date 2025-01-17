import EmberValidator from '@eflexsystems/ember-tracked-validations/-private/ember-validator';

/**
 *  <i class="fa fa-hand-o-right" aria-hidden="true"></i> [See All Options](#method_validate)
 *
 *  Validates that the attribute has the same value as the one of the declared attribute.
 *
 *  ## Examples
 *
 *  ```javascript
 *  email: validator('format', {
 *    type: 'email'
 *  })
 *  verifiedEmail: validator('confirmation', {
 *    on: 'email',
 *    message: 'Email addresses do not match'
 *  })
 *  ```
 *
 *  @class Confirmation
 *  @module Validators
 *  @extends Base
 */
export default class ValidatorsConfirmation extends EmberValidator {
  _evType = 'confirmation';

  static create(props) {
    return new ValidatorsConfirmation(props);
  }
}
