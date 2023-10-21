import {useState} from "react";
import {createPortal} from "react-dom";
import {useIntl} from "react-intl";

import Modal from "../components/Modal.tsx";

const MODAL_ELEMENT_ID = '#modal'

export function App () {
  const intl = useIntl();

  const [ showTerms, setShowTerms ] = useState(false);

  const handleClose = () => setShowTerms(false);

  return (
    <div>
      <h2>Localize Everything. 🔥</h2>

      <p>
        {intl.formatMessage({
          id: 'global.terms-description',
          defaultMessage: 'ruh-roh-raggy',
        }, {
          cta: (
            <a onClick={() => setShowTerms(true)}>
              {intl.formatMessage({
                id: 'global.terms-description-cta',
                defaultMessage: 'CTA Energy!'
              })}
            </a>
          ),
        })}
      </p>

      {showTerms && createPortal(
        <Modal onClose={handleClose} />,
        document.querySelector(MODAL_ELEMENT_ID)!
      )}
    </div>
  );
}

export default App;
