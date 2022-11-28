import React, { useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import axios from '../api/axios'
import data from '../cities.json';

const citiesData = () => JSON.parse(JSON.stringify(data));
const cities = citiesData()
function Dashboard() {
  const { auth } = useContext(AuthContext)
  const [cityArray, setCityArray] = useState([])
  const [total, setTotal] = useState(false)
  const [current, setCurrent] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [error, setError] = useState(null)
  const [checkout, setCheckout] = useState(false)
  const [timeTraveled, setTimeTraveled] = useState(null)
  // const [cities, setCities] = useState([])

  // const cities = [ 
  //   {
  //     city: "london", 
  //     info: [{
  //       center:[51.505, -0.09],
  //       sites: [
  //         {
  //           coordinates: [51.425219688361516, -0.0983012427108574],
  //           street: "4 Norwood Park Rd, Norwood, London SE27 9UA",
  //           charge: 100,
  //           time: 2
  //         },
  //         {
  //           coordinates: [51.490134488107145, -0.10708714798420013],
  //           street: "91 Kennington Ln, London SE11 4HQ",
  //           charge: 100,
  //           time: 6
  //         },
  //         {
  //           coordinates: [51.52084025045226, -0.11261064748288067],
  //           street: "51 Portpool Ln, London",
  //           time: 2,
  //           charge: 95,
  //         },
  //         {
  //           coordinates: [51.499726954493504, -0.22227697221734158],
  //           street: "94 Shepherds Bush Rd, London W6 7PD",
  //           time: 4,
  //           charge: 100
  //          },
  //       ],
  //       price: 25

  //     }

  //     ],
  //   },
  //   {
  //     city: "newyork",
  //     info:[{
  //       center:[40.730610, -73.935242111],
  //       sites: [
  //         {
  //           coordinates: [40.76955918067905, -73.96458018007691],
  //           street: "715 Park Ave, New York, NY 10021",
  //           time: 2,
  //           charge: 100
  //         },
  //         {
  //           coordinates: [40.75374370142662, -73.94496983378276],
  //           street: "41-13 12th St, Queens, NY 11101",
  //           time: 1,
  //           charge: 80
  //         },
  //         {
  //           coordinates: [40.73041287070956, -73.98417745997082],
  //           street: "339 E 12th St, New York, NY 10003",
  //           time: 4,
  //           charge: 100
  //         },
  //         {
  //           coordinates: [40.709422373806035, -73.99564462597135],
  //           street: "210 South St, New York, NY 10002",
  //           time: 5,
  //           charge: 100
  //          },
  //       ],
  //       price: 55

  //     }

  //     ],
  //   },
  //   {
  //     city: "jakarta",
  //     info: [{
  //       center:[-6.21462, 106.84513],
  //       sites: [
  //         {
  //           coordinates: [-6.202714147030653, 106.84886950072601],
  //           street: "Jl. Proklamasi 76-66, RT.7/RW.3, Pegangsaan, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10320",
  //           time: 1,
  //           charge: 70
  //         },
  //         {
  //           coordinates: [-6.22443371996097, 106.81515925461333],
  //           street: "Plaza Mandiri, Senayan, Kebayoran Baru, South Jakarta City, Jakarta",
  //           time: 2,
  //           charge: 85
  //         },
  //         {
  //           coordinates: [-6.173647288659836, 106.8575120642556],
  //           street: "Jl. Cempaka Putih Utara 1, RT.1/RW.1, Cemp. Baru, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640",
  //           time: 4,
  //           charge: 100
  //         },
  //         {
  //           coordinates: [-6.180508255398943, 106.82150594825791],
  //           street: "Rumah Sakit Budi Kemuliaan, Jl. Budi Kemuliaan No.26, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110",
  //           time: 6,
  //           charge: 100
  //          },
  //       ],
  //       price: 15

  //     }

  //     ],
  //   },
  //   {
  //     city: "yokohama",
  //     info:[{
  //       center:[35.443707, 139.638031],
  //       sites: [
  //         {
  //           coordinates: [35.44881097265973, 139.6337373559745],
  //           street: "〒231-0012 Kanagawa, Yokohama, Naka Ward, Aioichō, 6-chōme−113 オーク桜木町ビル",
  //           time: 1,
  //           charge: 75
  //         },
  //         {
  //           coordinates: [35.450627983142695, 139.63098530068316],
  //           street: "1 Chome-1 Sakuragicho, Naka Ward, Yokohama, Kanagawa 231-0062",
  //           time: 1,
  //           charge: 75
  //         },
  //         {
  //           coordinates: [35.45335590289644, 139.6276664095425],
  //           street: "4 Chome Hanasakicho, Nishi Ward, Yokohama, Kanagawa 220-0022",
  //           time: 4,
  //           charge: 100
  //         },
  //         {
  //           coordinates: [35.44756822573811, 139.6338118558504],
  //           street: "〒231-0015 Kanagawa, Yokohama, Naka Ward, Onoechō, 6-chōme−81 ニッセイ横浜尾上町ビル",
  //           time: 2,
  //           charge: 100
  //          },
  //       ],
  //       price: 65

  //     }

  //     ]
  //   }





  // ]

  //   useEffect(() => {
  //     // axios.get("/api/cities").then((response) => {
  //     //   setCities(response.data);
  //     // });
  //     setCities(cities())
  //   }, []);

  function handleChooseCity(e, data) {

    const city = cities.filter(city => city.city === e.target.dataset.data)

    setCityArray(city)
  }

  function handleCalc(e) {
    setError(null)
    if (e.target.value > current.time) {
      setError("Sorry not enough battery time")
      return setTotalPrice(0)
    }
    setTimeTraveled(e.target.value)
    setTotalPrice((e.target.value * current.price).toFixed(2))
  }
  function closeContainer(e) {
    e.stopPropagation()
    if (e.target.className === "totalPriceContainer") {
      setTotal(false)
      setCheckout(false)
    }
  }

  function handleCheckout(e) {
    e.preventDefault()
    setCheckout(true)
    axios.post(`/api/${auth.id || auth._id}/rides`, {
      street: current.location,
      charge: current.chargeLeft,
      price: current.price,
      time: timeTraveled,
      total: totalPrice
    }).then(res => {
      if (res.status === 200) {
        console.log(res)
      }

    })
      .catch(err => setError(err.response.data))
  }


  if (!localStorage.getItem('user')) {
    return <Navigate to={'/signin'} />;
  }
  return (
    <main className={cityArray.length > 0 ? 'dashboard height' : 'dashboard'}>
      {cityArray.length === 0 &&
        <section className='countryListContainer'>
          <h2>Choose your location</h2>
          <ul className='countryList'>
            <button onClick={handleChooseCity} data-data="newyork" type="button" className="button">New York</button>
            <button onClick={handleChooseCity} data-data="london" type="button" className="button">London</button>
            <button onClick={handleChooseCity} data-data="jakarta" type="button" className="button">Jakarta</button>
            <button onClick={handleChooseCity} data-data="yokohama" type="button" className="button">Yokohama</button>
          </ul>
        </section>
      }



      {cityArray &&
        cityArray.map(city => (
          <MapContainer key={city.city} center={city.center} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              city.sites.map(point => (
                <Marker key={point.coordinates[1]} position={point.coordinates}>
                  <Popup>
                    {point.street} <br /><span className='accent'>Charge left: {point.charge} % </span> <br />
                    (up to {point.time} hours)
                    <button onClick={() => {
                      setTotal(true)
                      setCurrent({ location: point.street, chargeLeft: point.charge, time: point.time, price: city.price })
                    }} type="button" className="button">Rent a ride</button>
                  </Popup>
                </Marker>
              ))
            }

          </MapContainer>
        ))
      }
      {cityArray &&
        cityArray.map(city => (
          <section key={city.city} className='container container--rent'>

            <table>
              <caption className='accent'>Available scoots</caption>
              <thead>
                <tr>
                  <th >Location</th>
                  <th>Charge left</th>
                  <th>Starting at</th>

                  <th>Rent</th>
                </tr>
              </thead>
              <tbody>
                {
                  city.sites.map(site => (
                    <tr key={site.coordinates[0]}>
                      <td data-label="Descrição">{site.street}</td>
                      <td className='accent' data-label="Administrador">{site.charge} %</td>

                      <td data-label="Administrador">{city.price} $ / hour</td>
                      <td data-label="Administrador"><button onClick={() => {
                        setTotal(true)
                        setCurrent({ location: site.street, chargeLeft: site.charge, time: site.time, price: city.price })
                      }} type="button" className="button">Rent a ride</button></td>
                    </tr>
                  ))
                }


              </tbody>
            </table>
            <button onClick={() => setCityArray([])} data-data="yokohama" type="button" className="button button--right">Choose another location</button>
            {total !== false && <section onClick={closeContainer} className='totalPriceContainer'>
              {checkout === false &&
                <section className='totalPrice'>
                  <h5>Scoot at</h5>
                  <div>
                    <p className='accent'>{current.location}</p>
                    <p>Charge left: <span className='accent'>{current.chargeLeft} %</span> </p>
                    <p>(up to {current.time} hours)</p>
                    <p>(Fixed price: {current.price} $ / hour)</p>
                    <input onChange={handleCalc} type="text" placeholder='I rent for ... hours'></input>
                    {error && <span>{error}</span>}
                    {totalPrice > 0 && <span>You pay <span className='accent'>{totalPrice} $</span> </span>}
                  </div>
                  <button onClick={handleCheckout} type="button" className="button ">Checkout</button>
                </section>
              }
              {checkout && <section className='thankyou'><h5>Thank you. Have a nice ride!</h5></section>}
            </section>}


          </section>
        ))
      }

    </main>
  );
}

export default Dashboard