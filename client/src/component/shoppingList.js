import React, { Component } from 'react'
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux';
import { getItems, addItem, deleteItem } from '../redux/actions/itemActions';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems()
    }
    render() {
        const { items, deleteItem } = this.props;
        // console.log(items);
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {
                            items.map((item) => (
                                <CSSTransition
                                    key={item._id}
                                    timeout={600} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color="danger"
                                            size="sm"
                                            onClick={() => {
                                                deleteItem(item._id);

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
    getItems: () => dispatch(getItems()),
    deleteItem: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToState)(ShoppingList);