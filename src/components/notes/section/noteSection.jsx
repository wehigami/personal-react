import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./noteSection.scss";



const boxVariant = {
  visible: { opacity: 1, x: 0 },
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

function NoteSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


  const categories = [
    {
      name: "All",
      notes: [
        {
          name: "tester",
          contents: "lorem",
          title: 'ipsusum'
        },
      ],
      active: true,
    },
    {
      name: "test",
      notes: [
        {
          name: "test1",
          contents: "ipsum",
          title: 'none'
        },
      ],
      active: false,
    },
  ];

  return (
    <div className="grid grid-cols-5 bg-zinc-900 h-screen overflow-hidden">
      <div className="grid-section col-span-1 p-4 grid grid-rows-10">
        <div className="text-2xl row-span-6">
          {categories.map((category) => (
            <p key={category}>
              <motion.button
                variants={boxVariant}
                ref={ref}
                initial="hidden"
                animate={control}
                className="mt-4"
                onClick={() => category.active === !category.active}
              >
                {category.name}
              </motion.button>
            </p>
          ))}
        </div>

        <button className="border border-zinc-600 rounded-full px-4 py-2 text-2xl w-14 h-14 place-self-end">
          +
        </button>
      </div>

      <div className="col-span-2 grid-section p-2">
        <motion.h1
          variants={testVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          className="uppercase text-8xl mt-12 text-zinc-200 "
        >
          My notes
        </motion.h1>
        {categories.map((category) =>
          category.notes.map((note) =>
            category.active ? (
              <p key={category.name} className="my-4">
                <button>{note.name}</button>
              </p>
            ) : (
              <></>
            )
          )
        )}
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
