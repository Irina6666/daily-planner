import React, {useState} from 'react'
import {Button, Modal} from 'react-materialize'
import BodyModalUpdate from "../EventEditModal/BodyModalUpdate"

const ButtonUpDate = (props) => {
    const [id, setId] = useState(null);

    let showModal = (id) => {
        setId(id);
    }

    function closed() {
        setId(null);
    }

    return (
        <td className='head-colomn-button line'>
            <Button
                className='modal-trigger waves-effect btn-small'
                onClick={() => showModal(props.tack.id)}>
                <i className='material-icons'>border_color</i>
            </Button>

            {
                id
                    ? <Modal header='Событие' open={true} options={{onCloseEnd: () => closed()}}>
                        <BodyModalUpdate id={id}/>
                    </Modal>
                    : ''
            }

        </td>
    )
}

export default ButtonUpDate;
