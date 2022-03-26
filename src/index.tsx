import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer,Model } from 'miragejs';
// import { makeServer } from './server';



createServer({
  models:{
    transaction: Model,
  },
  seeds(server){
    server.db.emptyData();
    server.db.loadData({
      transactions:[
        {
        id:1,
          title:'Freelance de website',
          type:'deposit',
          amount:6000,
          category:'Dev',
          createAt: new Date('2022-02-02 14:00:00'),
        },
        {
          id:2,
          title:'Aluguel',
          type:'withdraw',
          amount:1100,
          category:'Casa',
          createAt: new Date('2022-03-10 14:00:00'),
        },
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('transactions', ()=> {
      return this.schema.all('transaction');
    });
    
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction',data);
    })
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


