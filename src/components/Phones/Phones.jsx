import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, Grid, RotatingLines } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const fakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(fakeData);
                setPhones(fakeData);
                setLoading(false);
            });

    }, [])
    return (
        <div>
            {loading && <div>
                <Audio 
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
            ></Audio>
            <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />

<RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
            </div>
            }




            <h2 className="text-5xl text-red-700">Phones: {phones.length}</h2>
            <BarChart className="text-indigo-600``" width={1250} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis ></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;