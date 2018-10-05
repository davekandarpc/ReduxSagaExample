import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '25%',
  margin: '0 auto',
  marginLeft:1000,
  color: 'olive'
};
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

let NewsItem = ({ article }) => (
  article ?
  
    <article style={articleStyle} >
      <div>
        <h1>{article.title}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h2>{article.description}</h2>
        <a href={article.url} target="_blank">READ MORE</a>
        <div style={{backgroundColor:'red',width:'100%',height:2,marginTop:10}}></div>
      </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


