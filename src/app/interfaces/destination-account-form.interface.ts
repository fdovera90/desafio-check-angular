export interface DestinationAccountForm {
    name: string;
    rut: string;
    email?: string;
    phone?: number;
    bank: string;
    accountType: string;
    accountNumber: number;
}