var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
   render: function () {
      return (
         <MainContainer>
            <h1>Github Battle</h1>
            <p className='lead'>Some fancy motto</p>
            <Link to='/player-one'>
               <button type='button' className='btn btn-large btn-success'>Get Started</button>
            </Link>
         </MainContainer>
      );
   }
});

module.exports = Home;
