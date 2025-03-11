"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherInfo from "./weather-info";
import SectionTitle from "../section-title";
import { LoaderCircle } from "lucide-react";
import WeatherFiveDays from "./weather-five-days";

const cities = [
  { name: "Jari", value: "Jari" },
  { name: "Tupanciretã", value: "Tupanciretã" },
  { name: "Quevedos", value: "Quevedos" },
  { name: "Mata", value: "Mata" },
  { name: "Jaguari", value: "Jaguari" },
  { name: "Santiago", value: "Santiago" },
  { name: "São Miguel das Missões", value: "São Miguel das Missões" },
  { name: "Jóia", value: "Jóia" },
  { name: "Cruz Alta", value: "Cruz Alta" },
  { name: "Santa Maria", value: "Santa Maria" },
];

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState(cities[0].value); // Define a cidade padrão
  const [weather5Days, setWeather5Days] = useState();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getWeather(city: string) {
    setLoading(true);
    setError("");

    try {
      const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
      const urlfivedays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`;

      const responsefivedays = await axios.get(urlfivedays);
      const response = await axios.get(url);
      setWeather(response.data);
      setWeather5Days(responsefivedays.data);
      console.log(responsefivedays.data);
    } catch (err) {
      setError("Erro ao buscar os dados da cidade!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  // Carregar a previsão automaticamente ao iniciar a aplicação
  useEffect(() => {
    getWeather(selectedCity);
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <section className="container mx-auto px-4 py-12">
      <SectionTitle title="Previsão do Tempo" subtitle="pesquise pela sua cidade" />
      <div className="flex flex-col items-center mt-10 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Selecione sua cidade</h1>
        <select
          className="p-2 border rounded outline-none"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            getWeather(e.target.value); // Atualiza os dados ao mudar de cidade
          }}
        >
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.name}
            </option>
          ))}
        </select>
        {loading ? (
          <p><LoaderCircle className="animate-spin text-lime-500" /></p>
        ) : (
          <>
            {error && <p className="text-red-500">{error}</p>}
            <WeatherInfo weather={weather} />
            <WeatherFiveDays />
          </>
        )}
      </div>
    </section>
  );
}

