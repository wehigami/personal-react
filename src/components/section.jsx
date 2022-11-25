import './section.css';

function Section(props) {
    const isImage = (file) => {
        console.log(file);
        return file.includes(".com");
    }
    return(
        <section className="grid-rows-3 text-zinc-400">
            {props.divItems.map((item) => (
                <div className='' key={props.divItems[item]}>
                    {item.map((contents) => (
                        <div key={item[contents]}>
                            {isImage(contents) ? <img src={contents} alt="test project" /> : <p>{contents}</p>}
                        </div>
                    ))}
                </div>
            ))}

        </section>
    )
}

export default Section;

/**{divRender.map((item) => (
                        <div className=''>
                            {item}
                        </div>
                    ))} */