
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

const priceOptions = [

        {
          "id": 1,
          "name": "Silver Membership",
          
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "2 group classes per week",
            "Free Wi-Fi",
            "Shower facilities"
          ],
          "price": 30.00,
        },

        {
          "id": 1,
          "name": "Silver Membership",
          
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "2 group classes per week",
            "Free Wi-Fi",
            "Shower facilities"
          ],
          "price": 30.00,
        },

        {
          "id": 1,
          "name": "Silver Membership",
          
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "2 group classes per week",
            "Free Wi-Fi",
            "Shower facilities"
          ],
          "price": 30.00,
        },
        ]
      
       

  return (
    <div className="m-12">
      <h2 className="text-5xl ">Best Price </h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
      </div>


      
    </div>
  );
};

export default PriceOptions;