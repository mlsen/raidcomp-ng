import React from 'react';
import {connect} from 'react-redux';

@connect(state => ({composition: state.composition}))
export default class Composition extends React.Component {

  render() {
    const {composition, dispatch} = this.props;

    return (
      <div>
        {composition.id}
        <hr />
        {composition.characters}
      </div>
    );
  }
}
