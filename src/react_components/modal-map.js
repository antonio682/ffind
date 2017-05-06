import React from 'react';
import ReactBootstrap from 'react-bootstrap';
class Modalmap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
             </div>
            
        );
    }

    // render() {
    //     return (
    //         <div id="myModal" className="modal fade" role="dialog">
    //             <div className="modal-dialog">
    //                 <div className="modal-content">
    //                     <div className="modal-header">
    //                         <button type="button" className="close" data-dismiss="modal">&times;</button>
    //                         <h4 className="modal-title">Modal Header</h4>
    //                     </div>
    //                     <div className="modal-body">
    //                         <p>Some text in the modal.</p>
    //                     </div>
    //                     <div className="modal-footer">
    //                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    //                     </div>
    //                 </div>
    //
    //             </div>
    //         </div>
    //     );
}

export default Modalmap;