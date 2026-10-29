import { Background } from "@/components/background";
import { Access } from "@/components/blocks/access";
import { Audiences } from "@/components/blocks/audiences";
import { FAQ } from "@/components/blocks/faq";
import { Hero } from "@/components/blocks/hero";
import { Principles } from "@/components/blocks/principles";
import { Provenance } from "@/components/blocks/provenance";
import { Resources } from "@/components/blocks/resources";
import { Roadmap } from "@/components/blocks/roadmap";
import { Why } from "@/components/blocks/why";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Why />
        <Access />
      </Background>
      <Provenance />
      <Audiences />
      <Background variant="bottom">
        <Roadmap />
        <Principles />
        <FAQ />
        <Resources />
      </Background>
    </>
  );
}
