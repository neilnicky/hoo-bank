import "./Clients.css";
import { clients } from "../../constants";

const Clients = () => {
  return (
    <div className="clients app_bg section_padding">
      {clients.map((client) => {
        return (
          <div key={client.id} className="clients_imgs">
            <img src={client.logo} alt="logo" />
          </div>
        );
      })}
    </div>
  );
};

export default Clients;
