import {AtomicProperty} from './atomicproperty';
import { ValidatorRegistry, PropertyGroup } from '.';
import { ExpressionCompilerFactory } from '../expression-compiler-factory';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { PROPERTY_TYPE_MAPPING } from './typemapping';

export class NumberProperty extends AtomicProperty {

  fallbackValue() {
    return null;
  }

  setValue(value, onlySelf = false) {
    if (typeof value === 'string') {
      if (value.length) {
        value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
      } else {
        value = null;
      }
    }
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
}

PROPERTY_TYPE_MAPPING.integer = (
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    expressionCompilerFactory: ExpressionCompilerFactory,
    schema: any,
    parent: PropertyGroup,
    path: string
) => {
    return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path);
};

 PROPERTY_TYPE_MAPPING.number = (
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    expressionCompilerFactory: ExpressionCompilerFactory,
    schema: any,
    parent: PropertyGroup,
    path: string
) => {
    return new NumberProperty(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path);
};
