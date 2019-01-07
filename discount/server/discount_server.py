from datetime import datetime
from database import users
import discount
from proto.discount_pb2 import CalcDiscountResult
from proto.discount_pb2_grpc import DiscountServicer


class DiscountServer(DiscountServicer):
    def CalcDiscount(self, request, context):
        if request.HasField('userId'):
            user_id = request.userId
            user = users.get_user(user_id)
        else:
            user = None

        current_date = datetime.today()
        discount_value = discount.apply(current_date=current_date, user=user)

        result = CalcDiscountResult()
        result.discount = discount_value

        return result
