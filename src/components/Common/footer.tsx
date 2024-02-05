import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-orange-600 footer flex flex-col justify-center items-center bg-slate-950">
      <section className="logo">
        <Logo text_color="white" />
      </section>
      <section>
        <h6 className="text-white">
          Designed by{" "}
          <a
            className="text-orange-600"
            href="https://github.com/FacundoRocha18"
            target="_blank"
            title="Facundo Rocha's GitHub"
            rel="noreferrer"
          >
            Facundo Rocha
          </a>
        </h6>
      </section>
    </footer>
  );
};
