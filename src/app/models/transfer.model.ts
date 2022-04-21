interface IDestinationAccount {
    '_id': string;
    'name': string;
    'rut': string;
    'bank': string;
    'accountType': string;
}

export class Transfer {

    constructor(
        public amount: number,
        public destinationAccount: IDestinationAccount,
    ) {}
}