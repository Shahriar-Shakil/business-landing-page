import AllService from "@/components/AllService";
import Brand from "@/components/Brand";
import FeaturedProject from "@/components/FeaturedProject";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <HeroList />
      <Brand />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <AllService />
      <Subscribe />
    </>
  );
}
