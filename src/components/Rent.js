import React, { useState } from "react";
import "./Rent.css";
import RentItems from "./RentItems";

const Rent = () => {
  const Dummy_Data = [
    {
      id: "1",
      price: "$2989",
      name: "Mandi House",
      address: "New York",
      info: "1 Bed 1 Bathroom 5x7square",
    },
    {
      id: "2",
      price: "$2089",
      name: "Apple House",
      address: "India",
      info: "2 Bed 1 Bathroom 5x7square",
    },
    {
      id: "3",
      price: "$3012",
      name: "Heaven House",
      address: "Austraila",
      info: "2 Bed 2 Bathroom 5x7square",
    },
    {
      id: "4",
      price: "$2019",
      name: "Orange House",
      address: "India",
      info: "3 Bed 1 Bathroom 5x7square",
    },
    {
      id: "5",
      price: "$1784",
      name: "Green House",
      address: "America",
      info: "3 Bed 2 Bathroom 5x7square",
    },
    {
      id: "6",
      price: "$2000",
      name: "Pine House",
      address: "Antartica",
      info: "3 Bed 3 Bathroom 5x7square",
    },
    {
      id: "7",
      price: "$4009",
      name: "Mind House",
      address: "New York",
      info: "4 Bed 4 Bathroom 5x7square",
    },
    {
      id: "8",
      price: "$2076",
      name: "Mandi House",
      address: "India",
      info: "2 Bed 1 Bathroom 5x7square",
    },
    {
      id: "9",
      price: "$2500",
      name: "Temp House",
      address: "Australia",
      info: "1 Bed 1 Bathroom 5x7square",
    },
    {
      id: "10",
      price: "$2999",
      name: "Hell House",
      address: "New York",
      info: "2 Bed 1 Bathroom 5x7square",
    },
    {
      id: "11",
      price: "$2090",
      name: "Hut House",
      address: "Australia",
      info: "2 Bed 2 Bathroom 5x7square",
    },
    {
      id: "12",
      price: "$2345",
      name: "Goa House",
      address: "India",
      info: "3 Bed 1 Bathroom 5x7square",
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [dummyData, setDummyData] = useState(Dummy_Data)
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Location"
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setDummyData(dummyData.filter((data)=>{
                return data.address.toLowerCase().includes(searchTerm.toLowerCase());
            }))
          }}
        />
      </div>
      <div className="body">
        {dummyData.map((data) => (
          <RentItems
            id={data.id}
            name={data.name}
            price={data.price}
            address={data.address}
            info={data.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Rent;
