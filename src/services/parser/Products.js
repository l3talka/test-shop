export default class Products {
    constructor(data) {
        this.products = data.products;
        this.names = data.names;
    }

    _parse() {
        const goods = this.products.Value.Goods;
        const products = {};
        const parseRelation = (product = ParsedItem, names = {}) => {
            return {
                groupName: names[product.groupId]['G'],
                productName: names[product.groupId]['B'][product.productId]['N']
            };
        }
        const idGenerator = () => { return (Math.random().toString(36)+'00000000000000000').slice(2, 20+2) }
        goods.forEach((item) => {
            const parsedItem = new ParsedItem(item);
            const product = parseRelation(parsedItem, this.names);
            if (!products[product.groupName]) products[product.groupName] = [];
            products[product.groupName].push({
                name: product.productName,
                availableCount: parsedItem.count,
                price: parsedItem.price,
                id: idGenerator()
            })
        })

        return products;
    }

    get parsedData() {
        return this._parse();
    }
}

class ParsedItem {
    price = null;
    groupId = null;
    productId = null;
    count = null;

    constructor(row) {
        this.price = row.C;
        this.groupId = row.G;
        this.productId = row.T;
        this.count = row.P;
    }
}
