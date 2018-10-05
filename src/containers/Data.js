import React from 'react';
import { connect } from 'react-redux'

const articleStyle = {
  width: '25%',
  margin: '0 auto',
  marginLeft:200,
  color: 'olive'
}

let DataItem = ({ article }) => (
  article ?
    <article style={articleStyle} >
      <div>
        <div style={{backgroundColor:'red',width:'100%',height:2,marginTop:10}}></div>
        <h1>{article.title}</h1>
        <h2>{article.body}</h2>
      </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.data,
})

DataItem = connect(
  mapStateToProps,
  null
)(DataItem)

export default DataItem;


