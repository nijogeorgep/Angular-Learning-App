
/* Defines the product entity */
export class ProductModel {
    constructor(
        public id: number,
        public productName: string,
        public productCode: string,
        public category: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string,
        public tags?: string[],
    ) { }
}

export class ProductListRespModel {
    constructor(
        public response: ProductModel[],
        public message: string,
        public status: string
    ){  }
}