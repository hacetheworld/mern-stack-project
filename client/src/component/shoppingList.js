import React, { Component } from 'react'
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid/v4';

import { connect } from 'react-redux';
import { getItems, addItem, deleteItem } from '../redux/actions/itemActions';
class ShoppingList extends Component {

    // addItem = () => {
    //     const name = prompt('Enter Item');
    //     if (name.length > 1) {
    //         this.setState({ items: [...this.state.items, { _id: uuid(), name }] })
    //     }
    // }
    // deleteItem = (itemId) => {
    //     this.setState({ items: [...this.state.items.filter(item => item._id !== itemId)] })
    // }

    render() {
        const { items, deleteItem, addItem } = this.props;

        return (
            <Container>
                <Button
                    color='dark'
                    style={{
                        marginTop: '2rem',
                        marginBottom: '2rem'
                    }}
                    onClick={() => {
                        addItem({ _id: uuid(), name: 'Just checking....' })
                    }}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {
                            items.map((item) => (
                                <CSSTransition
                                    key={item._id}
                                    timeout={700} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color="danger"
                                            size="sm"
                                            onClick={() => {
                                                deleteItem(item._id)
                                            }}
                                        >
                                            &times;
</Button>
                                        {item.name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.item.items
});

const mapDispatchToState = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToState)(ShoppingList);