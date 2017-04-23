import React, {Component} from 'react'
import { Navbar, Nav, NavItem, Button} from 'react-bootstrap'

class Toolbar extends Component{
    handleRefreshClick(){
        var event = new Event("onRefreshConfessions")
        document.dispatchEvent(event);
    }
    render(){
        return(
            <div>
            <Navbar fixedTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">ECA Confessions</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem>
                        <Button onClick={this.handleRefreshClick.bind(this)} 
                            bsStyle="success" 
                            bsSize="xsmall" 
                            style={{border: "2px solid black", borderRadius: "0", color:"black", backgroundColor: "#98ff98"}}>
                            <strong>REFRESH</strong>
                        </Button>
                    </NavItem>
                </Nav>
              </Navbar>
            </div>
        );
    }
}

export default Toolbar;