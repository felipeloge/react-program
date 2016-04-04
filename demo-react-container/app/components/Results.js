var React = require('react');
var PropTypes = React.PropTypes;

function puke (data) {
   return <pre>{JSON.stringify(data, 2, ' ')}</pre>
}

function Results (props) {
   return (
      <div>{puke(props)}</div>
   );
}

Results.propTypes = {
   isLoading: PropTypes.bool.isRequired,
   scores: PropTypes.array.isRequired,
   playersInfo: PropTypes.array.isRequired
};

module.exports = Results;