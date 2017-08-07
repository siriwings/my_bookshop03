/**
 * Created by siri on 2017-07-02.
 */
import React, { Component } from 'react';
import {BookForm} from '../components';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {bookPostRequest} from '../actions/book';
import axios from 'axios';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button,Grid} from 'react-bootstrap';

class BookAdmin extends Component {
    constructor() {
        super();
        this.state = {
            images:[{}],
            img:''
        }
    }
    componentDidMount(){
        //GET IMAGES FROM API
        axios.get('/book/images')
            .then(function(response){
                this.setState({images:response.data});
            }.bind(this))
            .catch(function(err){
                this.setState({images:'error loading image files from the server', img:''})
            }.bind(this))
    }

    handleSelect(img){
        this.setState({
            img: '/images/'+ img
        })
    }

    handleSubmit({title,description,price}) {
        const image = this.state.img;
        this.props.bookPostRequest({title,description,price,image});
    }


    render() {

        const imgList = this.state.images.map(function(imgArr, i){
            return(
                <MenuItem key={i} eventKey={imgArr.name}
                          onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</MenuItem>
            )
        }, this);

        return (
            <Grid>
                <Well>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Panel>
                                <InputGroup>
                                    <FormControl type="text" ref="image" value={this.state.img} />
                                    <DropdownButton
                                        componentClass={InputGroup.Button}
                                        id="input-dropdown-addon"
                                        title="Select an image"
                                        bsStyle="primary">
                                        {imgList}
                                    </DropdownButton>
                                </InputGroup>
                                <Image src={this.state.img} responsive/>
                            </Panel>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Panel>
                               <BookForm onSubmit={this.handleSubmit.bind(this)} />
                            </Panel>
                            <Panel>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Select a book id to delete</ControlLabel>
                                    <FormControl ref="delete" componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        {/*{booksList}*/}
                                    </FormControl>
                                </FormGroup>
                                <Button bsStyle="warning" style={{margin: '0 10px 0 0' }}>Edit book</Button>
                                <Button bsStyle="danger">Delete book</Button>

                            </Panel>
                        </Col>
                    </Row>
                </Well>
            </Grid>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        bookPostRequest
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(BookAdmin)