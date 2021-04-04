import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "hover.css/css/hover-min.css"
import "jquery/dist/jquery.slim"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import './MyStyle.css';

const link = createHttpLink({
  uri: 'https://dashboaerd-Api.virgelroot.repl.co/graphql',
   credentials: 'include'
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <Router>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
