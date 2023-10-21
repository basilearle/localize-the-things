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
      <p>except these messages...</p>

      <p>
        {/* the root message `global.terms-description` contains an interpol-able property called {cta}  */}
        {intl.formatMessage({
          id: 'global.terms-description',
          defaultMessage: 'ruh-roh-raggy',
        }, {
          // the second parameter of the `formatMessage` API allows us to pass dynamic parameters (or other translations! that can
          // be interpolated within the message itself.
          cta: (
            // we can wrap the interpolated message in a <a> tag (or really any tag, or component) to allow us to determine how to
            // handle the
            <a onClick={() => setShowTerms(true)}>
              {intl.formatMessage({
                id: 'global.terms-description-cta',
                defaultMessage: 'CTA Energy!'
              })}
            </a>
          ),
        })}
      </p>

      {/* Portals are so cool! */}
      {showTerms && createPortal(
        <Modal onClose={handleClose} />,
        document.querySelector(MODAL_ELEMENT_ID)!
      )}
    </div>
  );
}

export default App;
