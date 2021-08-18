import Products from "./Products";
export default class Parser {
    constructor(type, data) {
        let parserInst = null;
        switch (type) {
            case 'products':
                parserInst = new Products(data)
                break;
            default:
                console.error(`Parser error: type: ${type} not implemented`);
        }
        return parserInst;
    }
}
