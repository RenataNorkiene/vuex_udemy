import {createStore} from "vuex";
import rootMutations from "@/store/mutations";
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
});

export default store;