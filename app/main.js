import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from './views/project_box';

ReactDOM.render(
  <CommentBox url="http://localhost:3001/uninvoiced_times.json" pollInterval={2000} />,
  document.getElementById('content')
);
