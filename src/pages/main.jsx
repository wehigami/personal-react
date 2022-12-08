import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Section from "../components/section";
import { decNextImage, incNextImage } from "../redux/nextImageSlice";

function MainPage() {
  const { image } = useSelector(state => state.nextImage);
  const dispatch = useDispatch();
  const github = 'https://github.com/wehigami';
  const projects = [
    {
      title: 'This website',
      description: "The website is made using React, Sass and Redux TK. This is supposed to be sort of a showcase of my coding skills. The entire thing was designed and made by me (except for the background video - check out the footer for that!).",
      img: 'https://www.linkpicture.com/q/Screenshot_2_253.png',
      github: 'https://github.com/wehigami/personal-react',
    },
    {
      title: 'Test',
      description: '',
      img: 'https://www.linkpicture.com/q/Screenshot_2_253.png',
      github: ''
    }
  ]

  return (
    <div className="bg-zinc-900 text-zinc-200">
      <Header />
      {/**each one of these props needs to be a list */}
      <Section
        divItems={[
          ['Projects', projects[image].title, <a href={projects[image].github.length > 0 ? projects[image].github : github } target="_blank" rel="noreferrer">{'github'}</a>],
          [
            projects[image].img,
            projects[image].description,
          ],
          [<button onClick={() => dispatch(decNextImage(projects.length))}>{'< previous'}</button>, <button onClick={() => dispatch(incNextImage(projects.length))}>{'next >'}</button>],
        ]}
      />
    </div>
  );
}

export default MainPage;
