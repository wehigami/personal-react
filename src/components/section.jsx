import './section.scss';

function Section(props) {
    const isImage = (content) => {
        if(typeof content !== 'string') {
            return;
        }
        return content.includes(".com");
    }

    let id = 0;

    return(
        <section className="grid-rows-3 text-zinc-400">
            {props.divItems.map((item) => (
                <div key={props.divItems.indexOf(item, 0)}>
                    {item.map((contents) => (
                        <div key={id++}>
                            {isImage(contents) ? <img src={contents} alt="test project" /> : contents}
                        </div>
                    ))}
                </div>
            ))}

        </section>
    )
}

export default Section;
