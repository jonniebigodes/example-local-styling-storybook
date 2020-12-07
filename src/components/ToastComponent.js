import { ToastContainer, toast } from "react-toastify";
import styleModule from "./styles.module.css";
import PropTypes from "prop-types";

export default function ToastComponent({ message }) {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <button className={styleModule.customButton} onClick={notify}>
        {message}
      </button>
      <ToastContainer />
    </div>
  );
}
ToastComponent.defaultProps = {
  message: "Notify me!",
};
ToastComponent.propTypes = {
  message: PropTypes.string,
};
