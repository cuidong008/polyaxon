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
    define(['ApiClient', 'model/V1Dag', 'model/V1Dask', 'model/V1Flink', 'model/V1Job', 'model/V1MPIJob', 'model/V1PytorchJob', 'model/V1Ray', 'model/V1Service', 'model/V1Spark', 'model/V1TFJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Dag'), require('./V1Dask'), require('./V1Flink'), require('./V1Job'), require('./V1MPIJob'), require('./V1PytorchJob'), require('./V1Ray'), require('./V1Service'), require('./V1Spark'), require('./V1TFJob'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1RunSchema = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Dag, root.PolyaxonSdk.V1Dask, root.PolyaxonSdk.V1Flink, root.PolyaxonSdk.V1Job, root.PolyaxonSdk.V1MPIJob, root.PolyaxonSdk.V1PytorchJob, root.PolyaxonSdk.V1Ray, root.PolyaxonSdk.V1Service, root.PolyaxonSdk.V1Spark, root.PolyaxonSdk.V1TFJob);
  }
}(this, function(ApiClient, V1Dag, V1Dask, V1Flink, V1Job, V1MPIJob, V1PytorchJob, V1Ray, V1Service, V1Spark, V1TFJob) {
  'use strict';

  /**
   * The V1RunSchema model module.
   * @module model/V1RunSchema
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1RunSchema</code>.
   * @alias module:model/V1RunSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1RunSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1RunSchema} obj Optional instance to populate.
   * @return {module:model/V1RunSchema} The populated <code>V1RunSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('job'))
        obj.job = V1Job.constructFromObject(data['job']);
      if (data.hasOwnProperty('service'))
        obj.service = V1Service.constructFromObject(data['service']);
      if (data.hasOwnProperty('dag'))
        obj.dag = V1Dag.constructFromObject(data['dag']);
      if (data.hasOwnProperty('tf_job'))
        obj.tf_job = V1TFJob.constructFromObject(data['tf_job']);
      if (data.hasOwnProperty('pytorch_job'))
        obj.pytorch_job = V1PytorchJob.constructFromObject(data['pytorch_job']);
      if (data.hasOwnProperty('mpi_job'))
        obj.mpi_job = V1MPIJob.constructFromObject(data['mpi_job']);
      if (data.hasOwnProperty('dask'))
        obj.dask = V1Dask.constructFromObject(data['dask']);
      if (data.hasOwnProperty('spark'))
        obj.spark = V1Spark.constructFromObject(data['spark']);
      if (data.hasOwnProperty('flink'))
        obj.flink = V1Flink.constructFromObject(data['flink']);
      if (data.hasOwnProperty('ruy'))
        obj.ruy = V1Ray.constructFromObject(data['ruy']);
    }
    return obj;
  }

  /**
   * @member {module:model/V1Job} job
   */
  exports.prototype.job = undefined;

  /**
   * @member {module:model/V1Service} service
   */
  exports.prototype.service = undefined;

  /**
   * @member {module:model/V1Dag} dag
   */
  exports.prototype.dag = undefined;

  /**
   * @member {module:model/V1TFJob} tf_job
   */
  exports.prototype.tf_job = undefined;

  /**
   * @member {module:model/V1PytorchJob} pytorch_job
   */
  exports.prototype.pytorch_job = undefined;

  /**
   * @member {module:model/V1MPIJob} mpi_job
   */
  exports.prototype.mpi_job = undefined;

  /**
   * @member {module:model/V1Dask} dask
   */
  exports.prototype.dask = undefined;

  /**
   * @member {module:model/V1Spark} spark
   */
  exports.prototype.spark = undefined;

  /**
   * @member {module:model/V1Flink} flink
   */
  exports.prototype.flink = undefined;

  /**
   * @member {module:model/V1Ray} ruy
   */
  exports.prototype.ruy = undefined;

  return exports;

}));
