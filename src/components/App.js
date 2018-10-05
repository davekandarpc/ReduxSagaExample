import React from 'react';
import Button1 from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import Loading from '../containers/Loading';
import Data from '../containers/Data';

import { Route, Switch } from 'react-router-dom';

let App = () => (
  <div style={{flex: 1}}>
    <Button1 />
    <Loading />
    <div style={{flexDirection:'row'}}>
	    <NewsItem />
	    <Data />
    </div>
  </div>
);

export default App;
