/* eslint-disable no-console,@typescript-eslint/naming-convention */

interface IBar {
  doBarThings(): void;
}

interface IBaz {
  doBazThings(): void;
}

interface IQux {
  doQuxThings(): void;
}

export class Base {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<I = Base> = new (...args: any[]) => I;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Bar<T extends Constructor>(Clazz: T = Base as any) {
  return class extends Clazz implements IBar {
    public doBarThings() {
      console.log("Do bar!");
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Baz<T extends Constructor>(Clazz: T = Base as any) {
  return class extends Clazz implements IBaz {
    public doBazThings() {
      console.log("Do baz!");
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Qux<T extends Constructor>(Clazz: T = Base as any) {
  return class extends Clazz implements IQux {
    public doQuxThings() {
      console.log("Do qux!");
    }
  };
}

export class Foo extends Bar(Baz(Qux())) implements IBar, IBaz {
  public doBarThings() {
    super.doBarThings();
    console.log("Override mixin");
  }
}
