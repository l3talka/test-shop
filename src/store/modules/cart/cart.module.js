import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_COUNT_PRODUCT } from "./actions.type";
import { ADD_PRODUCT_MUTATION, DELETE_PRODUCT_MUTATION, CHANGE_COUNT_PRODUCT_MUTATION } from "./mutations.type";

const state = {
    cart: {},
    amount: 0
};

const getters = {
    cart(state) {
        return state.cart;
    },
    amount(state) {
        let amount = 0;
        for (let product in state.cart) {
            amount += state.cart[product].price * state.cart[product].count;
        }
        return amount;
    },
};

const actions = {
    [ADD_PRODUCT](context, payload) {
        context.commit(ADD_PRODUCT_MUTATION, { product: payload.product, count: payload.count});
    },
    [CHANGE_COUNT_PRODUCT](context, payload) {
        context.commit(DELETE_PRODUCT_MUTATION, payload);
    },
    [DELETE_PRODUCT](context, product) {
        context.commit(DELETE_PRODUCT_MUTATION, product);
    },
};

const mutations = {
    [ADD_PRODUCT_MUTATION](state, payload) {
        if(!state.cart[payload.product.id]) state.cart[payload.product.id] = { count: 0 };
        state.cart = { ...state.cart,
            [payload.product.id]: {
                count: state.cart[payload.product.id].count += payload.count,
                name: payload.product.name,
                price: payload.product.price,
                availableCount: payload.product.availableCount
            }
        };
    },
    [CHANGE_COUNT_PRODUCT_MUTATION](state, payload) {
        state.cart = {...state.cart, [payload.product.id] : {
            name: payload.product.name,
            price: payload.product.price,
            count: payload.product.count,
            availableCount: payload.product.availableCount
        }}
    },
    [DELETE_PRODUCT_MUTATION](state, productId) {
        delete state.cart[productId];
        state.cart = {...state.cart};
    },

};

export default {
    state,
    actions,
    mutations,
    getters
};
