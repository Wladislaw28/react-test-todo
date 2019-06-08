import React,{Fragment} from 'react';
import ToDo from './containers/Todo';
import Title from './components/title/Title';

const App = () => (
	<Fragment>
		<Title title="ToDo App" />
		<ToDo />
	</Fragment>
);

export default App;
