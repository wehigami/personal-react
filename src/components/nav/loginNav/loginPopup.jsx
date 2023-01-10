import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { activateLogin } from "../../../redux/loginActiveSlice";
import "./popup.scss";

function LoginPopup() {
  const { active } = useSelector((state) => state.loginActive);
  const dispatch = useDispatch();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(activateLogin());
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return active ? (
    <div
      className="fixed w-96 h-96 z-40 text-center mb-96 main"
      ref={wrapperRef}
    >
      <h1 className="text-xl">test</h1>
    </div>
  ) : (
    <></>
  );
}

export default LoginPopup;
