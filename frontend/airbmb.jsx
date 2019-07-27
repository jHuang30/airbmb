import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './component/root'
import 'react-dates/initialize';


document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store}/>, root);

    //testing prupose, will delete later 
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
});

