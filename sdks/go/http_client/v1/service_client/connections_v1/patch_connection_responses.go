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

package connections_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// PatchConnectionReader is a Reader for the PatchConnection structure.
type PatchConnectionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchConnectionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchConnectionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchConnectionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchConnectionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchConnectionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchConnectionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchConnectionOK creates a PatchConnectionOK with default headers values
func NewPatchConnectionOK() *PatchConnectionOK {
	return &PatchConnectionOK{}
}

/*PatchConnectionOK handles this case with default header values.

A successful response.
*/
type PatchConnectionOK struct {
	Payload *service_model.V1ConnectionResponse
}

func (o *PatchConnectionOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] patchConnectionOK  %+v", 200, o.Payload)
}

func (o *PatchConnectionOK) GetPayload() *service_model.V1ConnectionResponse {
	return o.Payload
}

func (o *PatchConnectionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ConnectionResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchConnectionNoContent creates a PatchConnectionNoContent with default headers values
func NewPatchConnectionNoContent() *PatchConnectionNoContent {
	return &PatchConnectionNoContent{}
}

/*PatchConnectionNoContent handles this case with default header values.

No content.
*/
type PatchConnectionNoContent struct {
	Payload interface{}
}

func (o *PatchConnectionNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] patchConnectionNoContent  %+v", 204, o.Payload)
}

func (o *PatchConnectionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchConnectionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchConnectionForbidden creates a PatchConnectionForbidden with default headers values
func NewPatchConnectionForbidden() *PatchConnectionForbidden {
	return &PatchConnectionForbidden{}
}

/*PatchConnectionForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type PatchConnectionForbidden struct {
	Payload interface{}
}

func (o *PatchConnectionForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] patchConnectionForbidden  %+v", 403, o.Payload)
}

func (o *PatchConnectionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchConnectionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchConnectionNotFound creates a PatchConnectionNotFound with default headers values
func NewPatchConnectionNotFound() *PatchConnectionNotFound {
	return &PatchConnectionNotFound{}
}

/*PatchConnectionNotFound handles this case with default header values.

Resource does not exist.
*/
type PatchConnectionNotFound struct {
	Payload interface{}
}

func (o *PatchConnectionNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] patchConnectionNotFound  %+v", 404, o.Payload)
}

func (o *PatchConnectionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchConnectionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchConnectionDefault creates a PatchConnectionDefault with default headers values
func NewPatchConnectionDefault(code int) *PatchConnectionDefault {
	return &PatchConnectionDefault{
		_statusCode: code,
	}
}

/*PatchConnectionDefault handles this case with default header values.

An unexpected error response
*/
type PatchConnectionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch connection default response
func (o *PatchConnectionDefault) Code() int {
	return o._statusCode
}

func (o *PatchConnectionDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] PatchConnection default  %+v", o._statusCode, o.Payload)
}

func (o *PatchConnectionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchConnectionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}