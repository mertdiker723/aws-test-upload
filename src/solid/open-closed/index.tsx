import Car from "./comps/Car";
import Bycicle from "./comps/Bycicle";
import Plane from "./comps/Plane";

const Index = () => {
  const vehicleComponents = [
    {
        type: "car",
        comp: <Car/>
    },
    {
        type: "bycicle",
        comp: <Bycicle/>
    },
    {
        type: "plane",
        comp: <Plane/>
    }    
  ]


  const renderComponent = (type: string) => {
    for (let key of vehicleComponents) {
      if (key.type === type) {
        return key.comp;
      }
    }
  }
  return <div>
      {
         renderComponent("plane")
      }
  </div>;
};

export default Index;
