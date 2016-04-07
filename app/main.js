import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from './views/project_box';

ReactDOM.render(
  <CommentBox url="./uninvoiced_times.json" pollInterval={2000} />,
  document.getElementById('content')
);
