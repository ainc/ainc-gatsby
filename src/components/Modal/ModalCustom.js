import React from "react";
import { Modal, CloseButton, Row, Container } from "react-bootstrap";
import * as styles from "./Modal.module.css";

/*In order to use the ModalCustom Component (it was renamed to ModalCustom because Modal is a saved component name for react-bootstrap), state must be imported to whatever component it is used in:

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

MUST HAVE: Add an onClick event to where you want the Modal to render which you will use the handleShow function. On the actual ModalCustom component, add the props lgShow and hide. Set lgShow={lgShow} and hide={handleClose}.


*/

const ModalCustom = (props) => {
  return (
    <div>
      <Modal
        size="lg"
        show={props.lgShow}
        onHide={props.hide}
        aria-labelledby="example-modal-sizes-title-lg"
        backdropClassName={styles.modal}
        contentClassName={styles.modal}
      >
        {/* <Modal.Title>{props.title}</Modal.Title> */}
        <Modal.Body>
          <Container>
            <CloseButton variant="white" className={styles.closeBtn} onClick={props.hide} />
            <Row>{props.children}</Row>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>{props.footer}</Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalCustom;
