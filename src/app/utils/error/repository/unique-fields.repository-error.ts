import { CustomErrorAbstract } from "../abstract/custom-error.abstract";


export type UniqueFieldsErrorObjType = {
  field: string,
  reason: string,
}[];


export class UniqueFieldsRepositoryError extends CustomErrorAbstract {
  constructor (reason?: string, stack?: string, errorObj?: UniqueFieldsErrorObjType) {
    super(
      UniqueFieldsRepositoryError.name,
      'Дубликаты уникальных полей при создании записи в БД',
      reason || 'Повторяющиеся поля при создании записи в БД',
      stack,
      errorObj,
    );
  }
}

