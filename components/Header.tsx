import { Scrollspy } from "../components/scrollspy";

export const Header = () => {
  return (
    <header>
      <Scrollspy
        ids={["portfolio", "about", "contact"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      />
      <p className="pl-8 text-5xl">Frans Joakim Titulaer</p>
    </header>
  );
};
