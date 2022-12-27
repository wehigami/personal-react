import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  setActiveNote,
  addNote,
  delNote,
} from "../../../redux/noteCategorySlice";
import "./noteSection.scss";

const categoryVariant = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
};

const titleVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 }, y: 0 },
  hidden: { opacity: 0, y: -50 },
};

const formVariant = {
  visible: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

function NoteSection(props) {
  const { categories, errorMessage } = useSelector((state) => state.noteCategory);
  const dispatch = useDispatch();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const [title, setTitle] = useState(props?.value ?? "");
  const [content, setContent] = useState(props?.value ?? "");
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeCategoryText, setActiveCategoryText] = useState(
    props?.value ?? ""
  );

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const displayNote = (titleToSet, contentToSet) => {
    setTitle(titleToSet);
    setContent(contentToSet);
  };

  const handleActiveCategory = (bool) => {
    setActiveCategory(bool);
  };

  const handleActiveCategoryChange = (event) => {
    const limit = 16;

    setActiveCategoryText(event.target.value.slice(0, limit));
  };

  const findCategory = (arr) => {
    for (const obj of arr) {
      if (obj.active) return obj.name;
    }
  };

  const findNote = (arr, title) => {
    for (const obj of arr) {
      for(const note of obj.notes) {
        if (title === note.title) {
          console.log(`found the note ${note.title}`);
        }
      }
    }
  }

  return (
    <div className="grid grid-cols-5 bg-zinc-900 h-screen overflow-hidden">
      <div className="grid-section col-span-1 p-4 grid grid-rows-10">
        <div className="text-2xl row-span-6 overflow-scroll">
          {categories.map((category) => (
            <div
              key={`${category.name}`}
              className={
                category.active
                  ? "mt-4 bg-zinc-800 p-2 transition-colors"
                  : "mt-4 p-2"
              }
              onClick={() => {
                dispatch(setActiveNote(category.name))
                setTitle('');
                setContent('');
              }}
            >
              <p
                key={`${category.name}`}
                className={category.active ? "bg-zinc-800" : ""}
              >
                {category.name}
              </p>
            </div>
          ))}
          <button
            className="mt-12 text-zinc-300"
            onClick={() => handleActiveCategory(true)}
          >
            + Add Category
          </button>
          {activeCategory ? (
            <>
              <input
                type="text"
                name="addCategory"
                placeholder="Category Name"
                className="border-b border-zinc-700 p-2 mt-2 text-zinc-300 text-lg"
                value={activeCategoryText}
                onChange={handleActiveCategoryChange}
              />
              <button
                className="text-zinc-400"
                onClick={() => {
                  dispatch(addCategory(activeCategoryText));
                  handleActiveCategory(false);
                }}
              >
                +
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="col-span-2 grid-section p-2">
        <motion.h1
          variants={titleVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          className="uppercase text-8xl mt-12 text-zinc-200"
        >
          My notes
        </motion.h1>
        <div className="pt-6">
          {categories.map((category) =>
            category.notes.map((note) =>
              category.active ? (
                <p key={`${note.title}`} className="grid gird-cols-2">
                  <button
                    className="justify-self-start"
                    onClick={() => displayNote(note.title, note.content)}
                  >
                    {note.title}
                  </button>
                  <button
                    className="justify-self-end"
                    onClick={() => {
                      dispatch(delNote([findCategory(categories), note.title]))
                      findNote(categories, note.title);
                    }}
                  >
                    🗑️
                  </button>
                  <span className="justify-self-end text-zinc-500">{`${note.date}`}</span>
                </p>
              ) : (
                <></>
              )
            )
          )}
          {errorMessage ? <p>Sorry, you can't add a note with the same name!</p> : <></>}
        </div>
      </div>

      <div className="col-span-2 grid place-items-center p-2">
        <button
          className="border border-zinc-600 px-4 py-1 uppercase place-self-end"
          onClick={() => {
            dispatch(
              addNote([
                findCategory(categories),
                {
                  title: title,
                  content: content,
                  date: Date().toString().slice(0, 10).replace(/-/g, "/"),
                },
              ])
            );
            setTitle("");
            setContent("");
          }}
        >
          +
        </button>
        <motion.form
          action=""
          className="m-auto block text-center"
          variants={formVariant}
          ref={ref}
          initial="hidden"
          animate={control}
        >
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="border-b border-zinc-700 text-center text-3xl p-4"
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={handleContentChange}
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
