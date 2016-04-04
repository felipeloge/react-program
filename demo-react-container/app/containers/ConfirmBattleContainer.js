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
   componentWillMount: function () {
      console.log('componentWillMount');
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
   componentWillReceiveProps: function (nextProps) {
      console.log('componentWillReceiveProps', nextProps);
   },
   componentWillUnmount: function() {
      console.log('componentWillUnmount');
   },
   render: function () {
      return (
         <ConfirmBattle 
            isLoading={this.state.isLoading} 
            playersInfo={this.state.playersInfo} />
      );
   }
});

module.exports = ConfirmBattleContainer;