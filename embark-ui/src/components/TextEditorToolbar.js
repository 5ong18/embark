import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Nav, NavLink} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from 'react-fontawesome';

export const TextEditorToolbarTabs = {
  Interact: 'Interact',
  Details: 'Details',
  Debugger: 'Debugger',
  Transactions: 'Transactions',
  Browser: 'Browser'
};

const TabIcons = {
  Interact: 'bolt',
  Details: 'info-circle',
  Transactions: 'list-alt',
  Debugger: 'bug',
  Browser: 'eye'
}

class TextEditorToolbar extends Component {

  isActiveTab(tab) {
    return this.props.activeTab === TextEditorToolbarTabs[tab];
  }

  isBrowserTab(tab) {
    return TextEditorToolbarTabs[tab] === TextEditorToolbarTabs.Browser;
  }

  renderTab(tab) {
    return (
      <NavLink key={tab} className={classnames('btn', { active: this.isActiveTab(TextEditorToolbarTabs[tab])})} onClick={() => this.props.openAsideTab(TextEditorToolbarTabs[tab])}>
        <FontAwesomeIcon className="mr-2" name={TabIcons[TextEditorToolbarTabs[tab]]} /> {TextEditorToolbarTabs[tab]}
      </NavLink>
    );
  }

  render() {
    return (
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Button color="success" size="sm" className="mr-1" onClick={this.props.save}>
            <FontAwesomeIcon className="mr-2" name="save"/>
            Save
          </Button>
          <Button color="danger" size="sm" onClick={this.props.remove}>
            <FontAwesomeIcon className="mr-2" name="trash"/>
            Delete
          </Button>
        </li>
        <li className="breadcrumb-menu">
          <Nav className="btn-group">
            {this.props.isContract && Object.keys(TextEditorToolbarTabs).map(tab => !this.isBrowserTab(tab) && this.renderTab(tab))}
            {this.renderTab(TextEditorToolbarTabs.Browser)}
          </Nav>
        </li>
      </ol>
    );
  }
}

TextEditorToolbar.propTypes = {
  isContract: PropTypes.bool,
  save: PropTypes.func,
  remove: PropTypes.func,
  toggleShowHiddenFiles: PropTypes.func,
  openAsideTab: PropTypes.func,
  activeTab: PropTypes.string
};

export default TextEditorToolbar;
