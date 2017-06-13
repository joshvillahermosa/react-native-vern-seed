import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  ListView,
  View
} from 'react-native';
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types';
import NavigationButton from './../components/navigation-button.component';
import getHeaderStylesAndSetTitle from './../services/header.service';
import * as navigationActions from '../store/modules/navigation/navigation.actions';

class Home extends Component {
  /**
   * @todo Abstract text
   */
  static navigationOptions = getHeaderStylesAndSetTitle('React Native Boilerplate');

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text >
          Boilerplate React Native App. @todo list following features.
        </Text>

        <ListView
          dataSource={this.props.views}
          renderRow={data => 
            <NavigationButton
              isDisabled={data.isDisabled}
              view={data.view}
              textName={data.textName}
              navigate={navigate}>
            </NavigationButton>
        }/>
      </View>
    );
  }
}

/**
 * @todo Move shape into it's own folder.
 */
Home.propTypes = {
  navigation: PropTypes.object,
  views: PropTypes.shape({
    view: PropTypes.string,
    textName: PropTypes.string,
    isDisabled: PropTypes.bool
  })
}

const mapStateToProps = (state) => ({views: state.views});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(navigationActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
