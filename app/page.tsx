import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar></TopBar>
      <Container>
        <div className="flex gap-[60px] mt-10">
          <div className="w-[250px]">
            <Filters></Filters>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              List
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
