import Post from '@/Post';
import '@/styles/styles.css';
import '@/styles/styles.scss';
import React from 'react';
import {render} from 'react-dom';

const post = new Post('Webpack post title');
const a = 2;

console.log('Post to string:', post.toString());

const App = () => (
  <div className="wrapper">
    <h1>Logo</h1>
    <div className="slider"/>
  </div>
)

render(<App/>, document.getElementById('app'))