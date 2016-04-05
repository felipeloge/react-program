var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
   },
   getInitialState: function () {
      return {
         username: ''
      }
   },
   handleUpdateUser: function (ev) {
      this.setState({
         username: ev.target.value
      });
   },
   handleSubmitUser: function (ev) {
      ev.preventDefault();
      
      var username = this.state.username;
      this.setState({
         username: ''
      });

      if (this.props.routeParams.playerOne) {
         this.context.router.push({
            pathname: '/battle',
            query: {
               playerOne: this.props.routeParams.playerOne,
               playerTwo: this.state.username
            }
         });
      } else {
         this.context.router.push('/player-two/' + this.state.username);
      }
   },
   render: function () {
      return (
         <Prompt 
            onSubmitUser={this.handleSubmitUser} 
            onUpdateUser={this.handleUpdateUser} 
            header={this.props.route.header} 
            username={this.state.username} />
      );
   }
});

module.exports = PromptContainer;