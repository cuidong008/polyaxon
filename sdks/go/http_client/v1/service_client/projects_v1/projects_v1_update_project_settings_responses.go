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

// Code generated by go-swagger; DO NOT EDIT.

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ProjectsV1UpdateProjectSettingsReader is a Reader for the ProjectsV1UpdateProjectSettings structure.
type ProjectsV1UpdateProjectSettingsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProjectsV1UpdateProjectSettingsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProjectsV1UpdateProjectSettingsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewProjectsV1UpdateProjectSettingsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewProjectsV1UpdateProjectSettingsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProjectsV1UpdateProjectSettingsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewProjectsV1UpdateProjectSettingsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewProjectsV1UpdateProjectSettingsOK creates a ProjectsV1UpdateProjectSettingsOK with default headers values
func NewProjectsV1UpdateProjectSettingsOK() *ProjectsV1UpdateProjectSettingsOK {
	return &ProjectsV1UpdateProjectSettingsOK{}
}

/*ProjectsV1UpdateProjectSettingsOK handles this case with default header values.

A successful response.
*/
type ProjectsV1UpdateProjectSettingsOK struct {
	Payload *service_model.V1ProjectSettings
}

func (o *ProjectsV1UpdateProjectSettingsOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/{project}/settings][%d] projectsV1UpdateProjectSettingsOK  %+v", 200, o.Payload)
}

func (o *ProjectsV1UpdateProjectSettingsOK) GetPayload() *service_model.V1ProjectSettings {
	return o.Payload
}

func (o *ProjectsV1UpdateProjectSettingsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ProjectSettings)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1UpdateProjectSettingsNoContent creates a ProjectsV1UpdateProjectSettingsNoContent with default headers values
func NewProjectsV1UpdateProjectSettingsNoContent() *ProjectsV1UpdateProjectSettingsNoContent {
	return &ProjectsV1UpdateProjectSettingsNoContent{}
}

/*ProjectsV1UpdateProjectSettingsNoContent handles this case with default header values.

No content.
*/
type ProjectsV1UpdateProjectSettingsNoContent struct {
	Payload interface{}
}

func (o *ProjectsV1UpdateProjectSettingsNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/{project}/settings][%d] projectsV1UpdateProjectSettingsNoContent  %+v", 204, o.Payload)
}

func (o *ProjectsV1UpdateProjectSettingsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1UpdateProjectSettingsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1UpdateProjectSettingsForbidden creates a ProjectsV1UpdateProjectSettingsForbidden with default headers values
func NewProjectsV1UpdateProjectSettingsForbidden() *ProjectsV1UpdateProjectSettingsForbidden {
	return &ProjectsV1UpdateProjectSettingsForbidden{}
}

/*ProjectsV1UpdateProjectSettingsForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ProjectsV1UpdateProjectSettingsForbidden struct {
	Payload interface{}
}

func (o *ProjectsV1UpdateProjectSettingsForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/{project}/settings][%d] projectsV1UpdateProjectSettingsForbidden  %+v", 403, o.Payload)
}

func (o *ProjectsV1UpdateProjectSettingsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1UpdateProjectSettingsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1UpdateProjectSettingsNotFound creates a ProjectsV1UpdateProjectSettingsNotFound with default headers values
func NewProjectsV1UpdateProjectSettingsNotFound() *ProjectsV1UpdateProjectSettingsNotFound {
	return &ProjectsV1UpdateProjectSettingsNotFound{}
}

/*ProjectsV1UpdateProjectSettingsNotFound handles this case with default header values.

Resource does not exist.
*/
type ProjectsV1UpdateProjectSettingsNotFound struct {
	Payload interface{}
}

func (o *ProjectsV1UpdateProjectSettingsNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/{project}/settings][%d] projectsV1UpdateProjectSettingsNotFound  %+v", 404, o.Payload)
}

func (o *ProjectsV1UpdateProjectSettingsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1UpdateProjectSettingsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1UpdateProjectSettingsDefault creates a ProjectsV1UpdateProjectSettingsDefault with default headers values
func NewProjectsV1UpdateProjectSettingsDefault(code int) *ProjectsV1UpdateProjectSettingsDefault {
	return &ProjectsV1UpdateProjectSettingsDefault{
		_statusCode: code,
	}
}

/*ProjectsV1UpdateProjectSettingsDefault handles this case with default header values.

An unexpected error response
*/
type ProjectsV1UpdateProjectSettingsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the projects v1 update project settings default response
func (o *ProjectsV1UpdateProjectSettingsDefault) Code() int {
	return o._statusCode
}

func (o *ProjectsV1UpdateProjectSettingsDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/{owner}/{project}/settings][%d] ProjectsV1_UpdateProjectSettings default  %+v", o._statusCode, o.Payload)
}

func (o *ProjectsV1UpdateProjectSettingsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ProjectsV1UpdateProjectSettingsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}