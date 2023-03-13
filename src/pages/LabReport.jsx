
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
const LabReport = (props) => {

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Figure >
          <Figure.Image
            width={1600}
            height={900}
            src={props.body}
          />

        </Figure>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default LabReport