import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Section from "../components/section";
import { decNextImage, incNextImage } from "../redux/nextImageSlice";

function MainPage() {
  const { image } = useSelector(state => state.nextImage);
  const dispatch = useDispatch();
  const projects = [
    {
      title: 'This website',
      description: '',
      img: 'https://www.linkpicture.com/q/Screenshot_2_253.png'
    },
    {
      title: 'Test',
      description: '',
      img: 'https://www.linkpicture.com/q/Screenshot_2_253.png'
    }
  ]

  return (
    <div className="bg-zinc-900 text-zinc-200">
      <Header />
      {/**each one of these props needs to be a list */}
      <Section
        divItems={[
          ['Projects', projects[image].title, <a href="https://github.com/wehigami" target="_blank" rel="noreferrer">{'github'}</a>],
          [
            projects[image].img,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas omnis possimus nam, commodi nulla provident vero dicta mollitia iure earum quam animi! Corrupti",
          ],
          [<button onClick={() => dispatch(decNextImage(projects.length))}>{'< previous'}</button>, <button onClick={() => dispatch(incNextImage(projects.length))}>{'next >'}</button>],
        ]}
      />
    </div>
  );
}

export default MainPage;
