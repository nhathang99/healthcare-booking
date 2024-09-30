import CustomTabs from "../components/Frontend/Tabs";
import Hero from "../components/Frontend/Hero";
import DoctorList from "../components/ui/DoctorList";

const Home = () => {
  return (
    <section className="">
      <Hero />
      <CustomTabs />
      <DoctorList title="Telehealth visit" />
      <DoctorList
        className="bg-white py-8 lg:py-24"
        title="In-person visit"
        isInPerson={true}
      />
    </section>
  );
};

export default Home;
