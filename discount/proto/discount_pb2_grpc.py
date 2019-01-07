# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from proto import discount_pb2 as proto_dot_discount__pb2


class DiscountStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CalcDiscount = channel.unary_unary(
        '/Discount/CalcDiscount',
        request_serializer=proto_dot_discount__pb2.CalcDiscountParameters.SerializeToString,
        response_deserializer=proto_dot_discount__pb2.CalcDiscountResult.FromString,
        )


class DiscountServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CalcDiscount(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_DiscountServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CalcDiscount': grpc.unary_unary_rpc_method_handler(
          servicer.CalcDiscount,
          request_deserializer=proto_dot_discount__pb2.CalcDiscountParameters.FromString,
          response_serializer=proto_dot_discount__pb2.CalcDiscountResult.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'Discount', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))