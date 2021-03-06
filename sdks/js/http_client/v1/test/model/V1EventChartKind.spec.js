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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1EventChartKind', function() {
      beforeEach(function() {
        instance = PolyaxonSdk.V1EventChartKind;
      });

      it('should create an instance of V1EventChartKind', function() {
        // TODO: update the code to test V1EventChartKind
        expect(instance).to.be.a('object');
      });

      it('should have the property plotly', function() {
        expect(instance).to.have.property('plotly');
        expect(instance.plotly).to.be("plotly");
      });

      it('should have the property bokeh', function() {
        expect(instance).to.have.property('bokeh');
        expect(instance.bokeh).to.be("bokeh");
      });

      it('should have the property vega', function() {
        expect(instance).to.have.property('vega');
        expect(instance.vega).to.be("vega");
      });

      it('should have the property roc', function() {
        expect(instance).to.have.property('roc');
        expect(instance.roc).to.be("roc");
      });

      it('should have the property auc', function() {
        expect(instance).to.have.property('auc');
        expect(instance.auc).to.be("auc");
      });

      it('should have the property confusion', function() {
        expect(instance).to.have.property('confusion');
        expect(instance.confusion).to.be("confusion");
      });

    });
  });

}));
