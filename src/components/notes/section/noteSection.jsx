import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./noteSection.scss";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.3 }, x: 0 },
  hidden: { opacity: 0, x: -50 },
};

const testVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 }, y: 0 },
  hidden: { opacity: 0, y: -50 },
};

const xVariant = {
  visible: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const categories = ["All"];

function NoteSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="grid grid-cols-5 bg-zinc-900 h-screen overflow-hidden">
      <div className="border-r border-zinc-700 col-span-1 p-4 grid grid-rows-10">
        <div className="text-2xl row-span-6">
          <motion.p
            variants={boxVariant}
            ref={ref}
            initial="hidden"
            animate={control}
            className="mt-4"
          >
            test
          </motion.p>
        </div>
        <button className="border border-zinc-600 rounded-full px-4 py-2 text-2xl w-14 h-14 place-self-end">
          +
        </button>
      </div>

      <div className="col-span-2 border-r border-zinc-700 p-2">
        <motion.h1
          variants={testVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          className="uppercase text-8xl mt-12 text-zinc-200 "
        >
          My notes
        </motion.h1>
      </div>

      <div className="col-span-2 grid place-items-center p-2">
        <button className="border border-zinc-600 px-6 py-1 uppercase place-self-end">
          Save
        </button>
        <motion.form
          action=""
          className="m-auto block text-center"
          variants={xVariant}
          ref={ref}
          initial="hidden"
          animate={control}
        >
          <input
            type="text"
            name="title"
            id="title"
            className="border-b border-zinc-700 text-center text-3xl p-4"
            placeholder="Title"
          />
          <textarea
            name="note"
            id="note"
            cols="30"
            rows="35"
            className="mt-12"
          ></textarea>
        </motion.form>
      </div>
    </div>
  );
}

export default NoteSection;
