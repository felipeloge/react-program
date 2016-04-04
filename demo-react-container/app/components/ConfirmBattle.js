var React = require('react');
var PropTypes = React.PropTypes;

function puke (data) {
   return <pre>{JSON.stringify(data, null, ' ')}</pre>
}

function ConfirmBattle (props) {
   return props.isLoading === true 
      ? <p>LOADING!</p>
      : <div>CONFIRM BATTLE: {puke(props)}</div>;
}

ConfirmBattle.propTypes = {
   isLoading: PropTypes.bool.isRequired,
   playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;