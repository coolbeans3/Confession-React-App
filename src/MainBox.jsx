import React, {Component} from 'react'
import { Col, Row, Jumbotron, Button, form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import aja from 'aja'

class MainBox extends Component{
    
    constructor(){
        super();
        this.state = {
            name: '',
            text: ''
        }
    }
    
    handleNameChange(e){
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }
    
    handleTextChange(e){
        console.log(e.target.value)
        this.setState({text: e.target.value})
    }
    
    submitConfession(){
        console.log("submitting...")
        var name = this.state.name
        var text = this.state.text
        var _this = this 
        if (name == "" || text == ""){
            alert("You didn't specify your name or a confession");
            return;
        }
            aja()
              .method('post')
              .url('http://localhost:8080/confession')
              .data({name: name, text: text})
              .on('success', function(response){
                  _this.setState({name:'',text:''})
                  alert("You have submitted a confession, "+ name)
                  var event = new Event("onRefreshConfessions")
                  document.dispatchEvent(event);
              })
              .go();



    }
    
    render(){
        return(
         <div style={{marginTop: "80px"}}>
            <Row>
                <center><strong style={{fontSize:"36px"}}>Spill the T...</strong></center>
                <center><i style={{fontSize:"20px"}}>Submit to the confession board here!</i></center>
            </Row>
            <Row>
                <Col xs={4} xsOffset={4}>
                    <img style={{width: "100%", padding:"10px"}} src="https://www.demilked.com/magazine/wp-content/uploads/2017/01/funny-oh-no-comics-webcomicname-alex-norris-raw.png" />
                </Col>
            </Row>
            <Row>
                <Col xs={8} xsOffset={2}>
                    <Jumbotron style={{paddingTop:"10px",paddingBottom:"10px", backgroundColor:"white", border:"8px double black"}}>
                        <form style={{paddingLeft:"20px", paddingRight:"20px"}}>
                            <FormGroup
                                controlID="formBasicText"
                                validationState={this.state.name.length < 6 ? 'error' : 'success'}
                            >
                             <ControlLabel>Enter a name!</ControlLabel>
                              <FormControl
                                type="text"
                                style={{border:"2px solid black", borderRadius:"0"}}
                                placeholder="Name must be more than 5 characters"
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup
                              controlId="formControlsTextarea"
                              validationState={this.state.text.length < 6 ? 'error' : 'success'}
                            >
                              <FormControl
                                componentClass="textarea"
                                style={{border:"2px solid black", borderRadius:"0"}}
                                value={this.state.text}
                                onChange={this.handleTextChange.bind(this)}
                                placeholder="Write your confession here!"
                                rows={8}
                              />
                            </FormGroup>
                            <Button 
                            onClick={this.submitConfession.bind(this)}
                            style={{border:"2px solid black", borderRadius:"0", backgroundColor:"#98ff98"}}><strong>SUBMIT</strong></Button>
                          </form>
                     </Jumbotron>
                 </Col>
             </Row>
         </div>
        )
    }
}

export default MainBox