import React, {useState} from 'react'

//const api = {
  //key: "10ae45b7ac7efde0c8fbabc5f975ae82",
 // base: "https://api.openweathermap.org/data/2.5/"
//}

const Body = () => {
  const [query, setQuery] = useState('');
const [weather, setWeather ] = useState([]);

const search = async (e) => {
  if(e.key === "Enter"){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=10ae45b7ac7efde0c8fbabc5f975ae82`;
    //const url = `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`;

    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
    setQuery('');
    console.log(data);

}
}
    return (
        <div>
          <h3>React Movie App</h3>
            <div className="row">
        <div className="input-field col s12">
          <input placeholder="Search ..." 
          type="text" class="validate" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          onKeyPress={search}/>
        </div>
        </div>
              {weather.main && (
                <div className="row">
                <div className="col s12 m6">
                  <div className="card blue darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{weather.name}, {weather.sys.country}</span>
                      <p>{Math.round(weather.main.temp)}°c</p>
                      <img className="card-image" 
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                      alt={weather.weather[0].description} />
                      <p>{weather.weather[0].main}, {weather.weather[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              )}
        </div>
    )
}

export default Body
