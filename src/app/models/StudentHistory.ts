export interface StudentHistory {
  studentId: string;
  createdAt: string;
  name: string;
  balance: number;
  totalPurchase: number;
  totalPrints: number;
  purchaseDates: string[];
  purchaseCreatedAt: string[];
  purchaseUpdatedAt: string[];
  purchaseDeletedAt: string[];
  printDates: string[];
  printCreatedAt: string[];
  printUpdatedAt: string[];
  printDeletedAt: string[];
}
