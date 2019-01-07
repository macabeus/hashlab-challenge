// package: 
// file: proto/discount.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_discount_pb from "../proto/discount_pb";

interface IDiscountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    calcDiscount: IDiscountService_ICalcDiscount;
}

interface IDiscountService_ICalcDiscount extends grpc.MethodDefinition<proto_discount_pb.CalcDiscountParameters, proto_discount_pb.CalcDiscountResult> {
    path: string; // "/.Discount/CalcDiscount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_discount_pb.CalcDiscountParameters>;
    requestDeserialize: grpc.deserialize<proto_discount_pb.CalcDiscountParameters>;
    responseSerialize: grpc.serialize<proto_discount_pb.CalcDiscountResult>;
    responseDeserialize: grpc.deserialize<proto_discount_pb.CalcDiscountResult>;
}

export const DiscountService: IDiscountService;

export interface IDiscountServer {
    calcDiscount: grpc.handleUnaryCall<proto_discount_pb.CalcDiscountParameters, proto_discount_pb.CalcDiscountResult>;
}

export interface IDiscountClient {
    calcDiscount(request: proto_discount_pb.CalcDiscountParameters, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
    calcDiscount(request: proto_discount_pb.CalcDiscountParameters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
    calcDiscount(request: proto_discount_pb.CalcDiscountParameters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
}

export class DiscountClient extends grpc.Client implements IDiscountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public calcDiscount(request: proto_discount_pb.CalcDiscountParameters, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
    public calcDiscount(request: proto_discount_pb.CalcDiscountParameters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
    public calcDiscount(request: proto_discount_pb.CalcDiscountParameters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_discount_pb.CalcDiscountResult) => void): grpc.ClientUnaryCall;
}
