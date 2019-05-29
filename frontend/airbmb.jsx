import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './component/root'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);

    //testing prupose, will delete later 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});

