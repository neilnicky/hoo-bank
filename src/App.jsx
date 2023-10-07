import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Header,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app_bg">
      <Navbar />
      <Header />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA /> 
      <Footer />
    </div>
  );
};

export default App;
