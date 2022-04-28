import React from 'react'

const ModalAlert = (props) => {

  const { data: modalData } = props;
  const { success, info, total } = modalData;

  return (
    <>
        <div className="modal-item">
          <div className="modal-header">
            <div className="modal-header-title">
              <h4>Compra realizada con éxito.</h4>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-body-text">
              <p>Pronto recibirá su pedido de:</p>
            </div>
            <div className="modal-body-products-list">
              <p> {info} </p>
              <p> {total} </p>
            </div>
            <div className="modal-body-button">
              <div className="btn close-modal-btn">
                <p>Cerrar</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ModalAlert;