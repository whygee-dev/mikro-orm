import { Type } from './Type';
import { Platform } from '../platforms';
import { EntityProperty } from '../typings';

export class FloatType extends Type<number | null | undefined, number | null | undefined> {

  getColumnType(prop: EntityProperty, platform: Platform) {
    return platform.getFloatDeclarationSQL();
  }

  compareAsType(): string {
    return 'number';
  }

}
