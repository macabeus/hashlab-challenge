/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CalcDiscountParameters', null, global);
goog.exportSymbol('proto.CalcDiscountResult', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CalcDiscountParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.CalcDiscountParameters.oneofGroups_);
};
goog.inherits(proto.CalcDiscountParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CalcDiscountParameters.displayName = 'proto.CalcDiscountParameters';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.CalcDiscountParameters.oneofGroups_ = [[2],[3]];

/**
 * @enum {number}
 */
proto.CalcDiscountParameters.OptionaluseridCase = {
  OPTIONALUSERID_NOT_SET: 0,
  USER_ID: 2
};

/**
 * @return {proto.CalcDiscountParameters.OptionaluseridCase}
 */
proto.CalcDiscountParameters.prototype.getOptionaluseridCase = function() {
  return /** @type {proto.CalcDiscountParameters.OptionaluseridCase} */(jspb.Message.computeOneofCase(this, proto.CalcDiscountParameters.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.CalcDiscountParameters.OptionalforcediscountdebugCase = {
  OPTIONALFORCEDISCOUNTDEBUG_NOT_SET: 0,
  FORCE_DISCOUNT_DEBUG: 3
};

/**
 * @return {proto.CalcDiscountParameters.OptionalforcediscountdebugCase}
 */
proto.CalcDiscountParameters.prototype.getOptionalforcediscountdebugCase = function() {
  return /** @type {proto.CalcDiscountParameters.OptionalforcediscountdebugCase} */(jspb.Message.computeOneofCase(this, proto.CalcDiscountParameters.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CalcDiscountParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.CalcDiscountParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CalcDiscountParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CalcDiscountParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    forceDiscountDebug: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CalcDiscountParameters}
 */
proto.CalcDiscountParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CalcDiscountParameters;
  return proto.CalcDiscountParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CalcDiscountParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CalcDiscountParameters}
 */
proto.CalcDiscountParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setForceDiscountDebug(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CalcDiscountParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CalcDiscountParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CalcDiscountParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CalcDiscountParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 product_id = 1;
 * @return {number}
 */
proto.CalcDiscountParameters.prototype.getProductId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CalcDiscountParameters.prototype.setProductId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.CalcDiscountParameters.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.CalcDiscountParameters.prototype.setUserId = function(value) {
  jspb.Message.setOneofField(this, 2, proto.CalcDiscountParameters.oneofGroups_[0], value);
};


proto.CalcDiscountParameters.prototype.clearUserId = function() {
  jspb.Message.setOneofField(this, 2, proto.CalcDiscountParameters.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CalcDiscountParameters.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 force_discount_debug = 3;
 * @return {number}
 */
proto.CalcDiscountParameters.prototype.getForceDiscountDebug = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.CalcDiscountParameters.prototype.setForceDiscountDebug = function(value) {
  jspb.Message.setOneofField(this, 3, proto.CalcDiscountParameters.oneofGroups_[1], value);
};


proto.CalcDiscountParameters.prototype.clearForceDiscountDebug = function() {
  jspb.Message.setOneofField(this, 3, proto.CalcDiscountParameters.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CalcDiscountParameters.prototype.hasForceDiscountDebug = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CalcDiscountResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CalcDiscountResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CalcDiscountResult.displayName = 'proto.CalcDiscountResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CalcDiscountResult.prototype.toObject = function(opt_includeInstance) {
  return proto.CalcDiscountResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CalcDiscountResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CalcDiscountResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    discount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CalcDiscountResult}
 */
proto.CalcDiscountResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CalcDiscountResult;
  return proto.CalcDiscountResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CalcDiscountResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CalcDiscountResult}
 */
proto.CalcDiscountResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CalcDiscountResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CalcDiscountResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CalcDiscountResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CalcDiscountResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiscount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 discount = 1;
 * @return {number}
 */
proto.CalcDiscountResult.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CalcDiscountResult.prototype.setDiscount = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto);
