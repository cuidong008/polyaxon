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
    describe('V1Schemas', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Schemas();
      });

      it('should create an instance of V1Schemas', function() {
        // TODO: update the code to test V1Schemas
        expect(instance).to.be.a(PolyaxonSdk.V1Schemas);
      });

      it('should have the property operation_cond (base name: "operation_cond")', function() {
        // TODO: update the code to test the property operation_cond
        expect(instance).to.have.property('operation_cond');
        // expect(instance.operation_cond).to.be(expectedValueLiteral);
      });

      it('should have the property early_stopping (base name: "early_stopping")', function() {
        // TODO: update the code to test the property early_stopping
        expect(instance).to.have.property('early_stopping');
        // expect(instance.early_stopping).to.be(expectedValueLiteral);
      });

      it('should have the property parallel (base name: "parallel")', function() {
        // TODO: update the code to test the property parallel
        expect(instance).to.have.property('parallel');
        // expect(instance.parallel).to.be(expectedValueLiteral);
      });

      it('should have the property run (base name: "run")', function() {
        // TODO: update the code to test the property run
        expect(instance).to.have.property('run');
        // expect(instance.run).to.be(expectedValueLiteral);
      });

      it('should have the property compiled_operation (base name: "compiled_operation")', function() {
        // TODO: update the code to test the property compiled_operation
        expect(instance).to.have.property('compiled_operation');
        // expect(instance.compiled_operation).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

      it('should have the property connection_schema (base name: "connection_schema")', function() {
        // TODO: update the code to test the property connection_schema
        expect(instance).to.have.property('connection_schema');
        // expect(instance.connection_schema).to.be(expectedValueLiteral);
      });

      it('should have the property matrix (base name: "matrix")', function() {
        // TODO: update the code to test the property matrix
        expect(instance).to.have.property('matrix');
        // expect(instance.matrix).to.be(expectedValueLiteral);
      });

      it('should have the property refrence (base name: "refrence")', function() {
        // TODO: update the code to test the property refrence
        expect(instance).to.have.property('refrence');
        // expect(instance.refrence).to.be(expectedValueLiteral);
      });

      it('should have the property artifacts_mount (base name: "artifacts_mount")', function() {
        // TODO: update the code to test the property artifacts_mount
        expect(instance).to.have.property('artifacts_mount');
        // expect(instance.artifacts_mount).to.be(expectedValueLiteral);
      });

      it('should have the property polyaxon_sidecar_container (base name: "polyaxon_sidecar_container")', function() {
        // TODO: update the code to test the property polyaxon_sidecar_container
        expect(instance).to.have.property('polyaxon_sidecar_container');
        // expect(instance.polyaxon_sidecar_container).to.be(expectedValueLiteral);
      });

      it('should have the property polyaxon_init_container (base name: "polyaxon_init_container")', function() {
        // TODO: update the code to test the property polyaxon_init_container
        expect(instance).to.have.property('polyaxon_init_container');
        // expect(instance.polyaxon_init_container).to.be(expectedValueLiteral);
      });

      it('should have the property artifacs (base name: "artifacs")', function() {
        // TODO: update the code to test the property artifacs
        expect(instance).to.have.property('artifacs');
        // expect(instance.artifacs).to.be(expectedValueLiteral);
      });

      it('should have the property wasb (base name: "wasb")', function() {
        // TODO: update the code to test the property wasb
        expect(instance).to.have.property('wasb');
        // expect(instance.wasb).to.be(expectedValueLiteral);
      });

      it('should have the property gcs (base name: "gcs")', function() {
        // TODO: update the code to test the property gcs
        expect(instance).to.have.property('gcs');
        // expect(instance.gcs).to.be(expectedValueLiteral);
      });

      it('should have the property s3 (base name: "s3")', function() {
        // TODO: update the code to test the property s3
        expect(instance).to.have.property('s3');
        // expect(instance.s3).to.be(expectedValueLiteral);
      });

      it('should have the property autg (base name: "autg")', function() {
        // TODO: update the code to test the property autg
        expect(instance).to.have.property('autg');
        // expect(instance.autg).to.be(expectedValueLiteral);
      });

      it('should have the property dockerfile (base name: "dockerfile")', function() {
        // TODO: update the code to test the property dockerfile
        expect(instance).to.have.property('dockerfile');
        // expect(instance.dockerfile).to.be(expectedValueLiteral);
      });

      it('should have the property git (base name: "git")', function() {
        // TODO: update the code to test the property git
        expect(instance).to.have.property('git');
        // expect(instance.git).to.be(expectedValueLiteral);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

      it('should have the property k8s_resource (base name: "k8s_resource")', function() {
        // TODO: update the code to test the property k8s_resource
        expect(instance).to.have.property('k8s_resource');
        // expect(instance.k8s_resource).to.be(expectedValueLiteral);
      });

      it('should have the property connection (base name: "connection")', function() {
        // TODO: update the code to test the property connection
        expect(instance).to.have.property('connection');
        // expect(instance.connection).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property event_type (base name: "event_type")', function() {
        // TODO: update the code to test the property event_type
        expect(instance).to.have.property('event_type');
        // expect(instance.event_type).to.be(expectedValueLiteral);
      });

      it('should have the property event (base name: "event")', function() {
        // TODO: update the code to test the property event
        expect(instance).to.have.property('event');
        // expect(instance.event).to.be(expectedValueLiteral);
      });

    });
  });

}));
