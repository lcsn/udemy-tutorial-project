export class Product {
    constructor(
        public id: number,
        public serialNumber: string,
        public flags: number,
        public productName: string,
        public contractBeginDate: Date,
        public contractEndDate: Date,
        public cancelDate: Date,
        public terminationDate: Date) { }
}
