import { StudentHistory } from '../models/StudentHistory';

export function mapStudentHistory(dto: StudentHistory): StudentHistory {
  return {
    ...dto,
    createdAt: new Date(dto.createdAt).toISOString(),
    purchaseDates: dto.purchaseDates.map((d) => new Date(d).toISOString()),
    purchaseCreatedAt: dto.purchaseCreatedAt.map((d) => new Date(d).toISOString()),
    purchaseUpdatedAt: dto.purchaseUpdatedAt.map((d) => new Date(d).toISOString()),
    purchaseDeletedAt: dto.purchaseDeletedAt.map((d) => new Date(d).toISOString()),
    printDates: dto.printDates.map((d) => new Date(d).toISOString()),
    printCreatedAt: dto.printCreatedAt.map((d) => new Date(d).toISOString()),
    printUpdatedAt: dto.printUpdatedAt.map((d) => new Date(d).toISOString()),
    printDeletedAt: dto.printDeletedAt.map((d) => new Date(d).toISOString()),
  };
}
