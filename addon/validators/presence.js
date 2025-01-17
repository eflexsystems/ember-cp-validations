import EmberValidator from '@eflexsystems/ember-tracked-validations/-private/ember-validator';

/**
 *  <i class="fa fa-hand-o-right" aria-hidden="true"></i> [See All Options](#method_validate)
 *
 *  If `true` validates that the given value is not empty, if `false`, validates that the given value is empty.
 *
 *  ## Examples
 *
 *  ```javascript
 *  validator('presence', true)
 *  validator('presence', false)
 *  validator('presence', {
 *    presence: true,
 *    message: 'should not be empty'
 *  })
 *
 *  validator('presence', {
 *    presence: true,
 *    ignoreBlank: true,
 *    message: 'should not be empty or consist only of spaces'
 *  })
 *  ```
 *
 *  @class Presence
 *  @module Validators
 *  @extends Base
 */
export default class ValidatorsPresence extends EmberValidator {
  _evType = 'presence';

  /**
   * Normalized options passed in.
   * ```js
   * validator('presence', true)
   * // Becomes
   * validator('presence', {
   *   presence: true
   * })
   * ```
   *
   * @method buildOptions
   * @param  {Object}     options
   * @param  {Object}     defaultOptions
   * @param  {Object}     globalOptions
   * @return {Object}
   */
  buildOptions(options = {}, defaultOptions = {}, globalOptions = {}) {
    let opts = options;

    if (typeof options === 'boolean') {
      opts = {
        presence: options,
      };
    }
    return super.buildOptions(opts, defaultOptions, globalOptions);
  }

  static create(props) {
    return new ValidatorsPresence(props);
  }
}
