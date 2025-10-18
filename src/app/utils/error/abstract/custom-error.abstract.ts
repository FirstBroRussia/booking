export interface ExtendedErrorInterface {
  [key: string]: any,
}


export abstract class CustomErrorAbstract extends Error {
  public reason: string | null = null;
  public errorObj: ExtendedErrorInterface | null = null;


  constructor (name: string, message: string, reason?: string, stack?: string, errorObj?: ExtendedErrorInterface) { 
    super(message);

    this.name = name;
    this.message = message;
    this.reason = reason || '';

    if (errorObj) {
      this.errorObj = errorObj;
    }

    if (stack) {
      this.stack = this.stack + '\n' + stack;
    }
    
  }

}

