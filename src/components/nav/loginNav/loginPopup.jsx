import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { activateLogin } from "../../../redux/loginActiveSlice";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import GoogleButton from "react-google-button";
import "./popup.scss";

const clientId = "569807940466-7qk36mvs2m55biihg3c4ief5orn6tube.apps.googleusercontent.com";


function LoginPopup() {
  const { active } = useSelector((state) => state.loginActive);
  const dispatch = useDispatch();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId:
          "569807940466-7qk36mvs2m55biihg3c4ief5orn6tube.apps.googleusercontent.com",
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

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
      <h1 className="text-xl mt-6">Log in</h1>
      <div className="googleLogin">
      <p className="border-b w-72 pb-2 text-center mt-16 mb-24 border-zinc-600">This is the only option (For now):</p>
      </div>
      <div className="googleLogin">
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <GoogleButton onClick={renderProps.onClick} type="light">
              Sign in with Google
            </GoogleButton>
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LoginPopup;
