import { CustomErrorAbstract } from "../abstract/custom-error.abstract";


export class NotFoundRepositoryError extends CustomErrorAbstract {
  constructor (reason?: string, stack?: string, errorObj?: any) {
    super(
      NotFoundRepositoryError.name,
      'Запись в БД не найдена',
      reason || '',
      stack,
      errorObj,
    );
  }
}
