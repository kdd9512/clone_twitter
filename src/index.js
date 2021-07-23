import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './styles.css';

ReactDOM.render(
    <React.StrictMode>
        <App styles={styles}/>
    </React.StrictMode>
    , document.getElementById('root')
);
