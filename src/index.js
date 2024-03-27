import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CodeMaster from './code-master';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CodeMaster />
    </Router>
  </React.StrictMode>
);

