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
    define(['ApiClient', 'model/V1ResourceRequirements'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ResourceRequirements'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1PolyaxonInitContainer = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1ResourceRequirements);
  }
}(this, function(ApiClient, V1ResourceRequirements) {
  'use strict';

  /**
   * The V1PolyaxonInitContainer model module.
   * @module model/V1PolyaxonInitContainer
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1PolyaxonInitContainer</code>.
   * @alias module:model/V1PolyaxonInitContainer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1PolyaxonInitContainer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1PolyaxonInitContainer} obj Optional instance to populate.
   * @return {module:model/V1PolyaxonInitContainer} The populated <code>V1PolyaxonInitContainer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('image_tag'))
        obj.image_tag = ApiClient.convertToType(data['image_tag'], 'String');
      if (data.hasOwnProperty('image_pull_policy'))
        obj.image_pull_policy = ApiClient.convertToType(data['image_pull_policy'], 'String');
      if (data.hasOwnProperty('resources'))
        obj.resources = V1ResourceRequirements.constructFromObject(data['resources']);
    }
    return obj;
  }

  /**
   * @member {String} image
   */
  exports.prototype.image = undefined;

  /**
   * @member {String} image_tag
   */
  exports.prototype.image_tag = undefined;

  /**
   * @member {String} image_pull_policy
   */
  exports.prototype.image_pull_policy = undefined;

  /**
   * @member {module:model/V1ResourceRequirements} resources
   */
  exports.prototype.resources = undefined;

  return exports;

}));
