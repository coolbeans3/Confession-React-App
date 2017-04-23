import React, {Component} from 'react'
import {Panel, Row, Col} from 'react-bootstrap'
import aja from 'aja'
import moment from 'moment';

const hrStyle={
    padding: "0",
    border: "none",
    borderTop: "medium double #333",
    color: "#333",
    textAlign: "center",
}

class MessageBoard extends Component{
    constructor(){
        super();
        this.state={
            confessionData: []//loads nothing first then data
        }
    }
    refreshConfessions(){
        var _this = this
        aja()
          .method('get')
          .url('http://localhost:8080/confession/all')
          .on('success', function(response){
              _this.setState({confessionData: response.data});//whenever data is received, data is stored in confessionsdata
          })
          .go();
    }
    
    componentDidMount(){
        this.refreshConfessions();
        var _this = this
        document.addEventListener("onRefreshConfessions", function(){
            _this.refreshConfessions();
        })
    }
    render(){
        return(
            <div>
            <center><h1><strong>Previous Confessions...</strong></h1></center>
            {this.state.confessionData.map(function(confession){
                return(
                    <div>
                        <Row>
                            <Col xs={8} xsOffset={2}>
                                <Panel style={{border:"4px solid black", borderRadius:"0%"}}>
                                    <strong>Confession ID: {confession._id}</strong>
                                    <p> </p>
                                    <p>{confession.text}</p>
                                    <hr style={hrStyle}/>
                                    <a href="#">Published {moment(confession.createdAt).format('MMMM Do YYYY, h:mm a')}, By {confession.name}</a>
                                </Panel>
                            </Col>
                        </Row>
                    </div>
                )
        })}
        </div>
        );
    }
}

export default MessageBoard;