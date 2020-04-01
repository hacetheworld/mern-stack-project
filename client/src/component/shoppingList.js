import React, { Component } from 'react'
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid/v4';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    _id: uuid(),
                    name: 'Product 1'
                },
                {
                    _id: uuid(),
                    name: 'Product 2'
                }
                ,
                {
                    _id: uuid(),
                    name: 'Product 3'
                }
                ,
                {
                    _id: uuid(),
                    name: 'Product 4'
                }
            ]
        }
    }

    addItem = () => {
        const name = prompt('Enter Item');
        if (name.length > 1) {
            this.setState({ items: [...this.state.items, { _id: uuid(), name }] })
        }
    }
    deleteItem = (itemId) => {
        this.setState({ items: [...this.state.items.filter(item => item._id !== itemId)] })
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color='dark'
                    style={{
                        marginTop: '2rem',
                        marginBottom: '2rem'
                    }}
                    onClick={this.addItem}
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
                                                this.deleteItem(item._id)
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


export default ShoppingList;