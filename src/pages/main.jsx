import Header from "../components/header";
import Section from "../components/section";

function MainPage() {
    const titles = ['Projects', "This is the showcase of all my projects", 'github'];
    const imgs = ['https://www.linkpicture.com/q/Screenshot_2_253.png']


    return(
        <div className="bg-zinc-900 text-zinc-200">
            <Header />
            {/**each one of these props needs to be a list */}
            <Section divItems={[titles, [imgs[0], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas omnis possimus nam, commodi nulla provident vero dicta mollitia iure earum quam animi! Corrupti'], ['test', 'test'], ['test']]}/>
        </div>
    )
}

export default MainPage;