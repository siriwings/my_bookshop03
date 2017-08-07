import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bookListRequest}  from '../actions/book';
import {Carousel, Grid, Row, Col} from 'react-bootstrap';
import {BookItem} from '.';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart, getCart,addToCart} from '../actions/cart';
import {Cart} from '.';

class BookMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }


    componentDidMount() {
        this.props.bookListRequest();

    }


    render() {

        const booksList = this.props.books.map(function(booksArr){
            return(
                <Col xs={12} sm={6} md={4} key={booksArr._id}>
                    <BookItem
                        _id= {booksArr._id}
                        title={booksArr.title}
                        description={booksArr.description}
                        image={booksArr.image}
                        price={booksArr.price}/>
                </Col>
            )
        },this)

        return (
            <Grid>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={300} alt="900x300" src="/images/home1.jpg"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={300} alt="900x300" src="/images/home2.jpg"/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Cart/>
                </Row>
                <Row style={{marginTop: '15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}


BookMain.propTypes = {
    books: PropTypes.array
};

BookMain.defaultProps = {
    books: []
};
function mapStateToProps(state) {
    return {
        books: state.book.list.data,
        cart:state.cart.cart,
        totalAmount: state.cart.totalAmount

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        bookListRequest,
        deleteCartItem,
        updateCart,
        getCart,
        addToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookMain);