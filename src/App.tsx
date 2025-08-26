import {
    ContactSection,
    FeatureSection,
    Footer,
    Header,
    HeroSection,
    PortfolioSection,
    ServiceSection,
} from './components/sections';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <PortfolioSection />
            <ServiceSection />
            <FeatureSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
