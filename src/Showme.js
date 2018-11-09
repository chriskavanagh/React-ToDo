import React, { Component } from 'react';
import { Button } from 'reactstrap';


export default class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMe: true
        }
        this.operation = this.operation.bind(this);
    }

    operation() {
        this.setState({
            showMe: !this.state.showMe
        })
    }

    render() {
        return (
            <div className="showMe">
                
                {
                    this.state.showMe ? <h1>Please Hide Me</h1> : null                        
                }
                <div id="btn-div">
                    <Button 
                        outline color="primary" 
                        size="lg" block 
                        onClick={this.operation}>
                        {/* {()=>this.operation()} */}
                        Click Me
                    </Button>
                </div>                                     
                

            </div>
        );
    }
} // end class
