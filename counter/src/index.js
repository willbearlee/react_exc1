import React from 'react';
import {render} from 'react-dom';
import Counter from './counter';


render(
  <Counter initCount={139} />, document.getElementById('root')
);
