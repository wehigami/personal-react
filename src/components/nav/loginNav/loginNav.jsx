import { useDispatch, useSelector } from "react-redux";
import { activateLogin } from "../../../redux/loginActiveSlice";

function LoginNav() {
  const { active } = useSelector((state) => state.loginActive);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="border mb-2 px-4 border-zinc-400 rounded-xl text-zinc-400"
        onClick={() => dispatch(activateLogin())}
      >
        Log In
      </button>
    </>
  );
}

export default LoginNav;
