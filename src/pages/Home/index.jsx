import DefaultLayout from "~/components/Layouts/DefaultLayout";
import Hero from "./components/Hero";

function Home() {
    return (
        <>
            <DefaultLayout>
                <Hero />
            </DefaultLayout>
        </>
    );
}

export default Home;