'use strict';

import express from 'express';
import nunjucks from 'nunjucks';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {RoutingContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';

import createStore from 'stores';
import {Provider} from 'react-redux';
import reducer from 'reducers';

import {fetchComposition} from './database';

const app = express();

nunjucks.configure('./src/server/views', {
  autoescape: true,
  express: app
});

app.use(handleRender);

function handleRender(req, res) {
  const location = createLocation(req.url);

  match({routes, location}, (err, redirectLocation, renderProps) => {
    if(err) {
      console.log(err);
      return res.status(500).end('Internal server error.');
    }

    if(!renderProps) {
      return res.status(404).end('Not foundLOL.');
    }

    const compositionId = renderProps.params.compositionId || 0;

    fetchComposition(compositionId, composition => {
      const initialState = {
        composition: composition
      };
      const store = createStore(reducer, initialState);

      const initialComponent = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const finalState = store.getState();
      const html = ReactDOM.renderToString(initialComponent);

      res.render('index.html', {
        appHtml: html,
        initialState: JSON.stringify(finalState),
        env: process.env
      });

    });
  });
}

function renderComposition(composition) {

}

export default app;
