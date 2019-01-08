from datetime import datetime
import os
from database import users
import discount
from proto.discount_pb2 import CalcDiscountResult
from proto.discount_pb2_grpc import DiscountServicer


if os.environ['INTERMITTENT'] == '1':
    intermittent_flag = True
else:
    intermittent_flag = False

if os.environ['ALLOW_DEBUG_OPTIONS'] == '1':
    allow_debug_options_flag = True
else:
    allow_debug_options_flag = False


class DiscountServer(DiscountServicer):
    def CalcDiscount(self, request, context):
        product_id = request.productId

        if request.HasField('userId'):
            user_id = request.userId
            user = users.get_user(user_id)
        else:
            user = None

        current_date = datetime.today()
        discount_value = discount.apply(
            current_date=current_date,
            user=user,
            product_id=product_id,
            intermittent_flag=intermittent_flag
        )

        result = CalcDiscountResult()
        result.discount = discount_value

        if (allow_debug_options_flag and
                request.HasField('force_discount_debug')):
            result.discount = request.force_discount_debug

        return result
