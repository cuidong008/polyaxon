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
    describe('V1Matrix', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Matrix();
      });

      it('should create an instance of V1Matrix', function() {
        // TODO: update the code to test V1Matrix
        expect(instance).to.be.a(PolyaxonSdk.V1Matrix);
      });

      it('should have the property choice (base name: "choice")', function() {
        // TODO: update the code to test the property choice
        expect(instance).to.have.property('choice');
        // expect(instance.choice).to.be(expectedValueLiteral);
      });

      it('should have the property pchoice (base name: "pchoice")', function() {
        // TODO: update the code to test the property pchoice
        expect(instance).to.have.property('pchoice');
        // expect(instance.pchoice).to.be(expectedValueLiteral);
      });

      it('should have the property range (base name: "range")', function() {
        // TODO: update the code to test the property range
        expect(instance).to.have.property('range');
        // expect(instance.range).to.be(expectedValueLiteral);
      });

      it('should have the property linspace (base name: "linspace")', function() {
        // TODO: update the code to test the property linspace
        expect(instance).to.have.property('linspace');
        // expect(instance.linspace).to.be(expectedValueLiteral);
      });

      it('should have the property logspace (base name: "logspace")', function() {
        // TODO: update the code to test the property logspace
        expect(instance).to.have.property('logspace');
        // expect(instance.logspace).to.be(expectedValueLiteral);
      });

      it('should have the property geomspace (base name: "geomspace")', function() {
        // TODO: update the code to test the property geomspace
        expect(instance).to.have.property('geomspace');
        // expect(instance.geomspace).to.be(expectedValueLiteral);
      });

      it('should have the property uniform (base name: "uniform")', function() {
        // TODO: update the code to test the property uniform
        expect(instance).to.have.property('uniform');
        // expect(instance.uniform).to.be(expectedValueLiteral);
      });

      it('should have the property quniform (base name: "quniform")', function() {
        // TODO: update the code to test the property quniform
        expect(instance).to.have.property('quniform');
        // expect(instance.quniform).to.be(expectedValueLiteral);
      });

      it('should have the property loguniform (base name: "loguniform")', function() {
        // TODO: update the code to test the property loguniform
        expect(instance).to.have.property('loguniform');
        // expect(instance.loguniform).to.be(expectedValueLiteral);
      });

      it('should have the property qloguniform (base name: "qloguniform")', function() {
        // TODO: update the code to test the property qloguniform
        expect(instance).to.have.property('qloguniform');
        // expect(instance.qloguniform).to.be(expectedValueLiteral);
      });

      it('should have the property normal (base name: "normal")', function() {
        // TODO: update the code to test the property normal
        expect(instance).to.have.property('normal');
        // expect(instance.normal).to.be(expectedValueLiteral);
      });

      it('should have the property qnormal (base name: "qnormal")', function() {
        // TODO: update the code to test the property qnormal
        expect(instance).to.have.property('qnormal');
        // expect(instance.qnormal).to.be(expectedValueLiteral);
      });

      it('should have the property lognormal (base name: "lognormal")', function() {
        // TODO: update the code to test the property lognormal
        expect(instance).to.have.property('lognormal');
        // expect(instance.lognormal).to.be(expectedValueLiteral);
      });

      it('should have the property qlognormal (base name: "qlognormal")', function() {
        // TODO: update the code to test the property qlognormal
        expect(instance).to.have.property('qlognormal');
        // expect(instance.qlognormal).to.be(expectedValueLiteral);
      });

    });
  });

}));
