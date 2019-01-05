import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: 'I am index page'
    };

    console.log('constructor');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('Co updated');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  updateTitle() {
    this.setState({ title: 'I am updated Index Page' });
  }

  render() {
    console.log('render');

    return (
      <BaseLayout>
        <h1>I am index page from Class Component</h1>
        <h2 style={{ color: 'red' }}> {this.state.title} </h2>
        <button onClick={() => this.updateTitle()}> Change Title </button>
      </BaseLayout>
    );
  }
}

export default Index;
