import FeaturedCources from "@/components/featuredCources";
import Herosection from "@/components/Herosection"
import Instructors from "@/components/instructors";
import TestimonialCards from "@/components/testimonialCards";
import UpcommingWebiars from "@/components/upcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased">
    <Herosection/>
    <FeaturedCources/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcommingWebiars/>
    <Instructors/>
    </main>
  );
};
