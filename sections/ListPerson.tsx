/** @format */

import CardPerson, {
  Person,
} from "deco-sites/the-council/components/ListPerson/CardPerson.tsx";
import ButtonLink from "../components/header/ButtonLink.tsx";
import Container from "../components/ui/Container.tsx";

export interface ListPersonProps {
  list: Person[];
  link: {
    text: string;
    url: string;
    openNewTab?: boolean;
  };
}

function ListPerson({ list, link }: ListPersonProps) {
  return (
    <Container>
      <div
        class={"w-full lg:px-0 sm:max-w-[70%] mx-auto mb-[calc(30vmax / 10)] sm:mb-16 mb-[52px]  :sm:px-0 w-full mx-auto flex flex-col items-center :sm:px-0"}
      >
        <div
          class={"flex items-start justify-between animate-in-between mb-8 w-full gap-8 flex-col md:flex-row"}
        >
          {list.map((person) => <CardPerson {...person} />)}
        </div>

        <ButtonLink
          className="min-w-[244px] h-[63px]"
          text={link.text}
          url={link.url}
          openNewTab={link.openNewTab}
          fontSize="text-base"
        />
        <div class={"mt-10 border-b-gray-800 border-b w-full"}></div>
      </div>
    </Container>
  );
}

export default ListPerson;
