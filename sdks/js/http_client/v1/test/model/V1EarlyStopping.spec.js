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
    describe('V1EarlyStopping', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1EarlyStopping();
      });

      it('should create an instance of V1EarlyStopping', function() {
        // TODO: update the code to test V1EarlyStopping
        expect(instance).to.be.a(PolyaxonSdk.V1EarlyStopping);
      });

      it('should have the property median (base name: "median")', function() {
        // TODO: update the code to test the property median
        expect(instance).to.have.property('median');
        // expect(instance.median).to.be(expectedValueLiteral);
      });

      it('should have the property diff (base name: "diff")', function() {
        // TODO: update the code to test the property diff
        expect(instance).to.have.property('diff');
        // expect(instance.diff).to.be(expectedValueLiteral);
      });

      it('should have the property truncation (base name: "truncation")', function() {
        // TODO: update the code to test the property truncation
        expect(instance).to.have.property('truncation');
        // expect(instance.truncation).to.be(expectedValueLiteral);
      });

      it('should have the property metric (base name: "metric")', function() {
        // TODO: update the code to test the property metric
        expect(instance).to.have.property('metric');
        // expect(instance.metric).to.be(expectedValueLiteral);
      });

      it('should have the property failure (base name: "failure")', function() {
        // TODO: update the code to test the property failure
        expect(instance).to.have.property('failure');
        // expect(instance.failure).to.be(expectedValueLiteral);
      });

    });
  });

}));
