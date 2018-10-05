import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import { getData } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'; 
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, ControlLabel, HelpBlock, InputGroup, Checkbox, Radio, FormControl, Form, Col, Row } from 'react-bootstrap';

let styles = {
  width: '250px',
  height: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
}

class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <div style={{justifyContetnt:'center', textAlign:'center',marginTop:50,}}>
        <Button variant="contained" size="medium" color="secondary" onClick={this.props.getNews} style={{marginRight:20}}> Press to see the news </Button>
        <Button variant="contained" size="medium" color="secondary" onClick={this.props.getData}> Press to get data </Button>
      </div>
    );
  }
};

const mapDispatchToProps = {
  getNews: getNews,
  getData: getData,
};

Button1 = connect(
  null,
  mapDispatchToProps,
)(Button1);

export default Button1;
