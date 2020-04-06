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

// ProjectsV1GetProjectSettingsReader is a Reader for the ProjectsV1GetProjectSettings structure.
type ProjectsV1GetProjectSettingsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProjectsV1GetProjectSettingsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProjectsV1GetProjectSettingsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewProjectsV1GetProjectSettingsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewProjectsV1GetProjectSettingsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProjectsV1GetProjectSettingsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewProjectsV1GetProjectSettingsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewProjectsV1GetProjectSettingsOK creates a ProjectsV1GetProjectSettingsOK with default headers values
func NewProjectsV1GetProjectSettingsOK() *ProjectsV1GetProjectSettingsOK {
	return &ProjectsV1GetProjectSettingsOK{}
}

/*ProjectsV1GetProjectSettingsOK handles this case with default header values.

A successful response.
*/
type ProjectsV1GetProjectSettingsOK struct {
	Payload *service_model.V1ProjectSettings
}

func (o *ProjectsV1GetProjectSettingsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/settings][%d] projectsV1GetProjectSettingsOK  %+v", 200, o.Payload)
}

func (o *ProjectsV1GetProjectSettingsOK) GetPayload() *service_model.V1ProjectSettings {
	return o.Payload
}

func (o *ProjectsV1GetProjectSettingsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ProjectSettings)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1GetProjectSettingsNoContent creates a ProjectsV1GetProjectSettingsNoContent with default headers values
func NewProjectsV1GetProjectSettingsNoContent() *ProjectsV1GetProjectSettingsNoContent {
	return &ProjectsV1GetProjectSettingsNoContent{}
}

/*ProjectsV1GetProjectSettingsNoContent handles this case with default header values.

No content.
*/
type ProjectsV1GetProjectSettingsNoContent struct {
	Payload interface{}
}

func (o *ProjectsV1GetProjectSettingsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/settings][%d] projectsV1GetProjectSettingsNoContent  %+v", 204, o.Payload)
}

func (o *ProjectsV1GetProjectSettingsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1GetProjectSettingsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1GetProjectSettingsForbidden creates a ProjectsV1GetProjectSettingsForbidden with default headers values
func NewProjectsV1GetProjectSettingsForbidden() *ProjectsV1GetProjectSettingsForbidden {
	return &ProjectsV1GetProjectSettingsForbidden{}
}

/*ProjectsV1GetProjectSettingsForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ProjectsV1GetProjectSettingsForbidden struct {
	Payload interface{}
}

func (o *ProjectsV1GetProjectSettingsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/settings][%d] projectsV1GetProjectSettingsForbidden  %+v", 403, o.Payload)
}

func (o *ProjectsV1GetProjectSettingsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1GetProjectSettingsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1GetProjectSettingsNotFound creates a ProjectsV1GetProjectSettingsNotFound with default headers values
func NewProjectsV1GetProjectSettingsNotFound() *ProjectsV1GetProjectSettingsNotFound {
	return &ProjectsV1GetProjectSettingsNotFound{}
}

/*ProjectsV1GetProjectSettingsNotFound handles this case with default header values.

Resource does not exist.
*/
type ProjectsV1GetProjectSettingsNotFound struct {
	Payload interface{}
}

func (o *ProjectsV1GetProjectSettingsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/settings][%d] projectsV1GetProjectSettingsNotFound  %+v", 404, o.Payload)
}

func (o *ProjectsV1GetProjectSettingsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1GetProjectSettingsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1GetProjectSettingsDefault creates a ProjectsV1GetProjectSettingsDefault with default headers values
func NewProjectsV1GetProjectSettingsDefault(code int) *ProjectsV1GetProjectSettingsDefault {
	return &ProjectsV1GetProjectSettingsDefault{
		_statusCode: code,
	}
}

/*ProjectsV1GetProjectSettingsDefault handles this case with default header values.

An unexpected error response
*/
type ProjectsV1GetProjectSettingsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the projects v1 get project settings default response
func (o *ProjectsV1GetProjectSettingsDefault) Code() int {
	return o._statusCode
}

func (o *ProjectsV1GetProjectSettingsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/settings][%d] ProjectsV1_GetProjectSettings default  %+v", o._statusCode, o.Payload)
}

func (o *ProjectsV1GetProjectSettingsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ProjectsV1GetProjectSettingsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}