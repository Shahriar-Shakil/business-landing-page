import AllService from "@/components/AllService";
import Brand from "@/components/Brand";
import Contacts from "@/components/Contacts";
import FeaturedProject from "@/components/FeaturedProject";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
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
      <Contacts />
      <Subscribe />
      <Testimonial />
    </>
  );
}
