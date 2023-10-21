export interface ModalProps {
  onClose: () => void;
}

function Modal ({ onClose }: ModalProps) {

  return (
    <dialog open>
      <article>
        <header>
          <a onClick={onClose} className="close"></a>
          Modal title
        </header>
        <p>
          Nunc nec ligula a tortor sollicitudin dictum in vel enim.
          Quisque facilisis turpis vel eros dictum aliquam et nec turpis.
          Sed eleifend a dui nec ullamcorper.
          Praesent vehicula lacus ac justo accumsan ullamcorper.
        </p>
      </article>
    </dialog>
  );
}

export default Modal;
