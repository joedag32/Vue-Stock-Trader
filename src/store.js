import Vue from "vue";
import Vuex from "vuex";
import stocks from "./data/stocks";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        stocks: [],
        funds: 10000,
        portfolioStocks: []
    },
    getters: {
        getStocks: state => {
            return state.stocks;
        },
        stockPortfolio: (state, getters) => {
            return state.portfolioStocks.map(stock => {
                const record = getters.getStocks.find(element => element.id == stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            });
        },
        funds (state) {
            return state.funds;
        }
    },
    mutations: {
        SET_STOCKS: (state, stocks) => {
            state.stocks = stocks;
        },
        RND_STOCKS: (state) => {

        },
        BUY_STOCK: (state, {stockId, quantity, stockPrice}) => {
            const record = state.portfolioStocks.find(element => element.id == stockId);
            if (record) {
                record.quantity += quantity;
            } else {
                state.portfolioStocks.push({
                    id: stockId,
                    quantity: quantity
                });
            }
            state.funds -= stockPrice * quantity;
        },
        SELL_STOCK: (state, {stockId, quantity, stockPrice}) => {
            const record = state.portfolioStocks.find(element => element.id == stockId);
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            } else {
                state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1);
            }
            state.funds += stockPrice * quantity;
        }
    },
    actions: {
        buyStock: ({commit}, order) => {
            commit('BUY_STOCK', order);
        },
        initStocks: ({commit}) => {
            commit('SET_STOCKS', stocks);
        },
        randomizeStocks: ({commit}) => {
            commit('RND_STOCKS');
        },
        sellStock: ({commit}, order) => {
            commit('SELL_STOCK', order);
        }
    }
});