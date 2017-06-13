import React, { Component } from 'react';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types'

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        marginBottom: 10,
        backgroundColor: '#4286f4'
      }
    }
  }

  render() {
    return (
      <Button 
        buttonStyle={this.state.style}
        disable={this.props.isDisabled}
        onPress={() => this.props.navigate(this.props.view)}
        title={this.props.textName}
      />
    );
  }
}

NavigationButton.propTypes = {
  isDisabled: PropTypes.bool,
  navigate: PropTypes.func,
  view: PropTypes.string,
  textName: PropTypes.string
}

{/*<Button
  info
  block
  disabled={this.props.isDisabled}
  style={this.state.style}
  onPress={() => this.props.navigate(this.props.view)}>
  <Text>
    {this.props.textName}
  </Text>
</Button>*/}
