import grpc
from concurrent import futures
from proto.discount_pb2_grpc import add_DiscountServicer_to_server
from .discount_server import DiscountServer


PORT = '50051'


class Server:
    def __init__(self):
        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        add_DiscountServicer_to_server(DiscountServer(), self.server)

        self.server.add_insecure_port('[::]:{}'.format(PORT))

    def start(self):
        print('Starting server. Listening on port {}.'.format(PORT))
        self.server.start()

        try:
            while True:
                pass
        except KeyboardInterrupt:
            self.server.stop(0)
