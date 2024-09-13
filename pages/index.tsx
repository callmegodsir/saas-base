import TagSEO from "@/components/TagSEO";
import TagSchema from "@/components/TagSchema";
import Hero from "@/components/Hero";
import Header from "@/components/Header";


import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Road_Rage } from "next/font/google";
import Roadmap from "@/components/Roadmap";
import GetFreeTrial from "@/components/GetFreeTrial";

export default function Home() {
  return (
    <>
      <TagSEO
        canonicalSlug=""
        title={undefined}
        description={undefined}
        keywords={undefined}
        og={undefined}
      />
      <TagSchema />

      <main>
        <Header />
        <Hero />
        <Pricing />
        <Roadmap />
        <GetFreeTrial />
      
        
        <Footer/> 
      </main>
    </>
  );
}
