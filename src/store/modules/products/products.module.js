import { FETCH_PRODUCTS, FETCH_COURSE } from "./actions.type";
import { SET_PRODUCTS, SET_COURSE } from "./mutations.type";
import Parser from "@/services/parser";

const state = {
    products: [{}],
    course: {
        value: 21, //default course
        state: null
    },
};

const getters = {
    products(state) {
        return state.products;
    },
    course(state) {
        return state.course
    }
};

const actions = {
    async [FETCH_COURSE](context) {
        const course = Math.random() * (80 - 20) + 20;
        context.commit(SET_COURSE, {
           value: course,
           state: (context.state.course.value > course) ? 'up' : 'down'
        });
    },
    async [FETCH_PRODUCTS](context) {
        const productsResp = await fetch('./data/data.json');
        const names = await fetch('./data/names.json');
        const products = new Parser('products', {
            products: await productsResp.json(),
            names: await names.json(),
        }).parsedData;
        context.commit(SET_PRODUCTS, products);
    },
};

const mutations = {
    [SET_PRODUCTS](state, products) {
        state.products = products;
    },
    [SET_COURSE](state, course) {
        state.course = course;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
