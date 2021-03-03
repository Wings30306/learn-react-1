/* CLASS_BASED COMPONENT
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}
*/

/**
 * FUNCTION-BASED COMPONENT
 */
function Hello() {
    return (
        <div>
            <h1>Hello React!</h1>
            <h1>Hello CI!</h1>
            <h1>Hello World!</h1>
        </div>
    );
}

ReactDOM.render( < Hello /> , document.getElementById('root'));