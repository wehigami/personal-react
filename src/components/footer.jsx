function Footer() {
  const tags = [
    {
      name: "Background Video",
      link: "https://www.youtube.com/watch?v=mkLvoG5AMVY",
    },
  ];
  return (
    <footer className="h-24 py-6 border-t-2 mt-2 w-2/3 justify-self-center border-zinc-700 text-zinc-100">
      <div className="flex">
        <p className="mr-24">Wehi &nbsp;</p>
        {tags.map((item) => (
          <div key={item.name} className="text-sm">
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
