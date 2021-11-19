import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import { persistor, store } from './store/store';
import {SnackbarProvider} from 'notistack'
import SplashScreen from './components/screens/SplashScreen';

const client = new ApolloClient({

  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()

})

// {

//   typePolicies:{
//     Query:{
//       fields:{
//         characters:{
//           keyArgs: false,
//           merge(existing=[], incoming){
//               return([...existing, ...incoming])
//           }
//         }
//       }
//     }
//   }

// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<SplashScreen/>}
      >
        <ApolloProvider
          client={client}
        >
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <App />
          </SnackbarProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
