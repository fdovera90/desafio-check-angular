export class DestinationAccount {

    constructor(
        public _id: string,
        public name: string,
        public rut: string,
        public bank: string,
        public accountType: string,
        public accountNumber: string,
        public email: string | undefined,
        public phone: number | undefined,
    ) {}
}