import React from "react";

interface WeatherProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: { 
    description: string;
    icon: string
  }[];
  wind: {
    speed: number;
  };
}

export default function WeatherInfo({ weather }: { weather: WeatherProps | null }) {
  if (!weather) {
    return <p className="text-gray-500">Nenhuma informação disponível</p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full sm:w-[500px] text-center">
      <h2 className="text-xl font-bold">{weather.name}, {weather.sys.country}</h2>
      <div className="flex items-center justify-center">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p className="text-lg capitalize">{weather.weather[0].description}</p>
      </div>
      <p className="text-2xl font-semibold">🌡️ {weather.main.temp}°C</p>
      <p>💧 Umidade: {weather.main.humidity}%</p>
      <p>🌬️ Vento: {weather.wind.speed} m/s</p>
    </div>
  );
}

