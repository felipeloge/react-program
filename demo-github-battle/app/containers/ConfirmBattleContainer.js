var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
   },
   getInitialState: function () {
      console.log('getInitialState');
      return {
         isLoading: true,
         playersInfo: []
      };
   },
   componentDidMount: function () {
      console.log('componentDidMount');
      var query = this.props.location.query;
      // https://egghead.io/playlists/the-this-key-word-250c37d9
      githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
         .then(function (players) {
            this.setState({
               isLoading: false,
               playersInfo: players
            });
         }.bind(this));
   },
   handleInitiateBattle: function () {
      this.context.router.push({
         pathname: '/results',
         state: {
            playersInfo: this.state.playersInfo
         }
      });
   },
   render: function () {
      return (
         <ConfirmBattle 
            isLoading={this.state.isLoading} 
            playersInfo={this.state.playersInfo} 
            onInitiateBattle={this.handleInitiateBattle} />
      );
   }
});

module.exports = ConfirmBattleContainer;