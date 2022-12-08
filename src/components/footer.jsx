function Footer() {
  const tags = [
    {
      name: "Background Video",
      link: "https://www.youtube.com/watch?v=mkLvoG5AMVY",
    },
  ];
  return (
    <footer className="h-24 text-center p-12">
      <div className="flex justify-center ">
        <p>Credits: &nbsp;</p>
        {tags.map((item) => (
          <div key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
