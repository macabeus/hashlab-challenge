// package: 
// file: proto/discount.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class CalcDiscountParameters extends jspb.Message { 
    getProductId(): number;
    setProductId(value: number): void;


    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): number;
    setUserId(value: number): void;


    hasForceDiscountDebug(): boolean;
    clearForceDiscountDebug(): void;
    getForceDiscountDebug(): number;
    setForceDiscountDebug(value: number): void;


    getOptionalUserIdCase(): CalcDiscountParameters.OptionalUserIdCase;
    getOptionalForceDiscountDebugCase(): CalcDiscountParameters.OptionalForceDiscountDebugCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalcDiscountParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CalcDiscountParameters): CalcDiscountParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalcDiscountParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalcDiscountParameters;
    static deserializeBinaryFromReader(message: CalcDiscountParameters, reader: jspb.BinaryReader): CalcDiscountParameters;
}

export namespace CalcDiscountParameters {
    export type AsObject = {
        productId: number,
        userId: number,
        forceDiscountDebug: number,
    }

    export enum OptionalUserIdCase {
        OPTIONALUSERID_NOT_SET = 0,
    
    USER_ID = 2,

    }

    export enum OptionalForceDiscountDebugCase {
        OPTIONALFORCEDISCOUNTDEBUG_NOT_SET = 0,
    
    FORCE_DISCOUNT_DEBUG = 3,

    }

}

export class CalcDiscountResult extends jspb.Message { 
    getDiscount(): number;
    setDiscount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalcDiscountResult.AsObject;
    static toObject(includeInstance: boolean, msg: CalcDiscountResult): CalcDiscountResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalcDiscountResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalcDiscountResult;
    static deserializeBinaryFromReader(message: CalcDiscountResult, reader: jspb.BinaryReader): CalcDiscountResult;
}

export namespace CalcDiscountResult {
    export type AsObject = {
        discount: number,
    }
}
