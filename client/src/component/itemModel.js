import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/itemActions';

function ItemModel(props) {
    const {
        buttonLabel,
        className,
        addItem
    } = props;
    const [modal, setModal] = useState(false);
    const [name, setItem] = useState('');

    const toggle = () => setModal(!modal);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name.length > 3) {
            addItem({ name });
            console.log({ name });

        }
        setItem('')
    }
    const onChangeHandler = (e) => {
        setItem(e.target.value)
    };

    return (
        <div>
            <Button style={{
                marginTop: '2rem',
                marginBottom: '2rem'
            }} color="dark" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmitHandler}>
                        <FormGroup>
                            <Input type="text"
                                name="name"
                                id="item"
                                onChange={onChangeHandler} />

                            <Button style={{ marginTop: '1rem' }} block color="dark" onClick={toggle} type='submit'>{buttonLabel}</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}
const mapDispatchToState = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});


export default connect(null, mapDispatchToState)(ItemModel);