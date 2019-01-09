# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/discount.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/discount.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x14proto/discount.proto\"\x8f\x01\n\x16\x43\x61lcDiscountParameters\x12\x12\n\nproduct_id\x18\x01 \x01(\x05\x12\x11\n\x07user_id\x18\x02 \x01(\x05H\x00\x12\x1e\n\x14\x66orce_discount_debug\x18\x03 \x01(\x05H\x01\x42\x10\n\x0eoptionalUserIdB\x1c\n\x1aoptionalForceDiscountDebug\"&\n\x12\x43\x61lcDiscountResult\x12\x10\n\x08\x64iscount\x18\x01 \x01(\x05\x32H\n\x08\x44iscount\x12<\n\x0c\x43\x61lcDiscount\x12\x17.CalcDiscountParameters\x1a\x13.CalcDiscountResultb\x06proto3')
)




_CALCDISCOUNTPARAMETERS = _descriptor.Descriptor(
  name='CalcDiscountParameters',
  full_name='CalcDiscountParameters',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='product_id', full_name='CalcDiscountParameters.product_id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='CalcDiscountParameters.user_id', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='force_discount_debug', full_name='CalcDiscountParameters.force_discount_debug', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='optionalUserId', full_name='CalcDiscountParameters.optionalUserId',
      index=0, containing_type=None, fields=[]),
    _descriptor.OneofDescriptor(
      name='optionalForceDiscountDebug', full_name='CalcDiscountParameters.optionalForceDiscountDebug',
      index=1, containing_type=None, fields=[]),
  ],
  serialized_start=25,
  serialized_end=168,
)


_CALCDISCOUNTRESULT = _descriptor.Descriptor(
  name='CalcDiscountResult',
  full_name='CalcDiscountResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='discount', full_name='CalcDiscountResult.discount', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=170,
  serialized_end=208,
)

_CALCDISCOUNTPARAMETERS.oneofs_by_name['optionalUserId'].fields.append(
  _CALCDISCOUNTPARAMETERS.fields_by_name['user_id'])
_CALCDISCOUNTPARAMETERS.fields_by_name['user_id'].containing_oneof = _CALCDISCOUNTPARAMETERS.oneofs_by_name['optionalUserId']
_CALCDISCOUNTPARAMETERS.oneofs_by_name['optionalForceDiscountDebug'].fields.append(
  _CALCDISCOUNTPARAMETERS.fields_by_name['force_discount_debug'])
_CALCDISCOUNTPARAMETERS.fields_by_name['force_discount_debug'].containing_oneof = _CALCDISCOUNTPARAMETERS.oneofs_by_name['optionalForceDiscountDebug']
DESCRIPTOR.message_types_by_name['CalcDiscountParameters'] = _CALCDISCOUNTPARAMETERS
DESCRIPTOR.message_types_by_name['CalcDiscountResult'] = _CALCDISCOUNTRESULT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CalcDiscountParameters = _reflection.GeneratedProtocolMessageType('CalcDiscountParameters', (_message.Message,), dict(
  DESCRIPTOR = _CALCDISCOUNTPARAMETERS,
  __module__ = 'proto.discount_pb2'
  # @@protoc_insertion_point(class_scope:CalcDiscountParameters)
  ))
_sym_db.RegisterMessage(CalcDiscountParameters)

CalcDiscountResult = _reflection.GeneratedProtocolMessageType('CalcDiscountResult', (_message.Message,), dict(
  DESCRIPTOR = _CALCDISCOUNTRESULT,
  __module__ = 'proto.discount_pb2'
  # @@protoc_insertion_point(class_scope:CalcDiscountResult)
  ))
_sym_db.RegisterMessage(CalcDiscountResult)



_DISCOUNT = _descriptor.ServiceDescriptor(
  name='Discount',
  full_name='Discount',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=210,
  serialized_end=282,
  methods=[
  _descriptor.MethodDescriptor(
    name='CalcDiscount',
    full_name='Discount.CalcDiscount',
    index=0,
    containing_service=None,
    input_type=_CALCDISCOUNTPARAMETERS,
    output_type=_CALCDISCOUNTRESULT,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_DISCOUNT)

DESCRIPTOR.services_by_name['Discount'] = _DISCOUNT

# @@protoc_insertion_point(module_scope)
