// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.74
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Notification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Notification'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Plugins = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Notification);
  }
}(this, function(ApiClient, V1Notification) {
  'use strict';

  /**
   * The V1Plugins model module.
   * @module model/V1Plugins
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1Plugins</code>.
   * @alias module:model/V1Plugins
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Plugins</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Plugins} obj Optional instance to populate.
   * @return {module:model/V1Plugins} The populated <code>V1Plugins</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auth'))
        obj.auth = ApiClient.convertToType(data['auth'], 'Boolean');
      if (data.hasOwnProperty('docker'))
        obj.docker = ApiClient.convertToType(data['docker'], 'Boolean');
      if (data.hasOwnProperty('shm'))
        obj.shm = ApiClient.convertToType(data['shm'], 'Boolean');
      if (data.hasOwnProperty('collect_artifacts'))
        obj.collect_artifacts = ApiClient.convertToType(data['collect_artifacts'], 'Boolean');
      if (data.hasOwnProperty('collect_logs'))
        obj.collect_logs = ApiClient.convertToType(data['collect_logs'], 'Boolean');
      if (data.hasOwnProperty('collect_resources'))
        obj.collect_resources = ApiClient.convertToType(data['collect_resources'], 'String');
      if (data.hasOwnProperty('sync_statuses'))
        obj.sync_statuses = ApiClient.convertToType(data['sync_statuses'], 'Boolean');
      if (data.hasOwnProperty('log_level'))
        obj.log_level = ApiClient.convertToType(data['log_level'], 'String');
      if (data.hasOwnProperty('notifications'))
        obj.notifications = ApiClient.convertToType(data['notifications'], [V1Notification]);
    }
    return obj;
  }

  /**
   * @member {Boolean} auth
   */
  exports.prototype.auth = undefined;

  /**
   * @member {Boolean} docker
   */
  exports.prototype.docker = undefined;

  /**
   * @member {Boolean} shm
   */
  exports.prototype.shm = undefined;

  /**
   * @member {Boolean} collect_artifacts
   */
  exports.prototype.collect_artifacts = undefined;

  /**
   * @member {Boolean} collect_logs
   */
  exports.prototype.collect_logs = undefined;

  /**
   * @member {String} collect_resources
   */
  exports.prototype.collect_resources = undefined;

  /**
   * @member {Boolean} sync_statuses
   */
  exports.prototype.sync_statuses = undefined;

  /**
   * @member {String} log_level
   */
  exports.prototype.log_level = undefined;

  /**
   * @member {Array.<module:model/V1Notification>} notifications
   */
  exports.prototype.notifications = undefined;

  return exports;

}));
