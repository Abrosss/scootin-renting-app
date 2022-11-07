import React, { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


function Dashboard() {
  const { auth } = useContext(AuthContext)

  const londonData = [{
    center:[51.505, -0.09],
    sites: [
      {
        coordinates: [51.425219688361516, -0.0983012427108574]
      },
      {
        coordinates: [51.490134488107145, -0.10708714798420013]
      },
      {
        coordinates: [51.52084025045226, -0.11261064748288067]
      },
      {
        coordinates: [51.499726954493504, -0.22227697221734158]
       },
    ]
    
  }
    
  ]
  const newyorkData = [{
    center:[40.730610, -73.935242111],
    sites: [
      {
        coordinates: [40.76955918067905, -73.96458018007691]
      },
      {
        coordinates: [40.75374370142662, -73.94496983378276]
      },
      {
        coordinates: [40.73041287070956, -73.98417745997082]
      },
      {
        coordinates: [40.709422373806035, -73.99564462597135]
       },
    ]
    
  }
    
  ]
  const jakartaData = [{
    center:[-6.21462, 106.84513],
    sites: [
      {
        coordinates: [-6.202714147030653, 106.84886950072601]
      },
      {
        coordinates: [-6.22443371996097, 106.81515925461333]
      },
      {
        coordinates: [-6.173647288659836, 106.8575120642556]
      },
      {
        coordinates: [-6.180508255398943, 106.82150594825791]
       },
    ]
    
  }
    
  ]
  const yokohamaData = [{
    center:[35.443707, 139.638031],
    sites: [
      {
        coordinates: [35.44881097265973, 139.6337373559745]
      },
      {
        coordinates: [35.450627983142695, 139.63098530068316]
      },
      {
        coordinates: [35.45335590289644, 139.6276664095425]
      },
      {
        coordinates: [35.44756822573811, 139.6338118558504]
       },
    ]
    
  }
    
  ]
  if (!localStorage.getItem('user')) {
    return <Navigate to={'/signin'} />;
  }
  return (
    <div className='dashboard'>
{
  yokohamaData.map(city => (
<MapContainer center={city.center} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          city.sites.map(point => (
            <Marker position={point.coordinates}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))
        }

      </MapContainer>
  ))
}
      
      <table>
        <caption>Past rides</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Distance traveled</th>
            <th>Time riding</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">Restaurante</td>
            <td data-label="Descrição">Controle de fluxo de um restaurante</td>
            <td data-label="Administrador">Erick Jacquin</td>
            <td data-label="Criado">20/04/2018</td>
          </tr>
          <tr>
            <td data-label="Projeto">Relatório</td>
            <td data-label="Descrição">Gerador de relatório online</td>
            <td data-label="Administrador">Elon Musk</td>
            <td data-label="Criado">12/08/2022</td>
          </tr>
          <tr>
            <td data-label="Projeto">Financeiro</td>
            <td data-label="Descrição">Controle de fluxo financeiro</td>
            <td data-label="Aplicações">6</td>
            <td data-label="Criado">12/12/2021</td>
          </tr>
          <tr>
            <td data-label="Projeto">Estoque</td>
            <td data-label="Descrição">Controle de estoque de loja</td>
            <td data-label="Administrador">Jeff Bezos</td>
            <td data-label="Criado">01/01/2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard