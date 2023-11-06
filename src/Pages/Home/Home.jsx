import Banner from "../../components/Banner/Banner";
import FirstSection from "../../components/FirstSection/FirstSection";
import Job_Category from "../../components/Job_Category/Job_Category";
import SecondSection from "../../components/SecondSection/SecondSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Job_Category></Job_Category>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;