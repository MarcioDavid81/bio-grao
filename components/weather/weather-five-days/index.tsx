import { formatDate } from "@/lib/utils";
import { CloudRain, CloudSun, CloudSunRain, Sun } from "lucide-react";
import React from "react";

interface WeatherFiveDaysProps {}

export default function WeatherFiveDays() {
  const dias = [
    {
      dia: "Segunda",
      data: 10032025,
      temp_min: 14,
      temp_max: 25,
      cond: "Ensolarado",
      icon: <Sun size={24} />,
    },
    {
      dia: "Terça",
      data: 11032025,
      temp_min: 14,
      temp_max: 25,
      cond: "Nublado",
      icon: <CloudSun size={24} />,
    },
    {
      dia: "Quarta",
      data: 12032025,
      temp_min: 14,
      temp_max: 25,
      cond: "Nublado",
      icon: <CloudSun size={24} />,
    },
    {
      dia: "Quinta",
      data: 13032025,
      temp_min: 14,
      temp_max: 25,
      cond: "Nublado",
      icon: <CloudSunRain size={24} />,
    },
    {
      dia: "Sexta",
      data: 14032025,
      temp_min: 14,
      temp_max: 25,
      cond: "Chuvoso",
      icon: <CloudRain size={24} />,
    },
  ];

  return (
    <div className="p-4 shadow-md rounded-lg bg-white w-full sm:w-full text-center">
      <h2 className="text-xl font-bold truncate">Previsão para os próximos 5 dias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-evenly">
        {dias.map((dia, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between mt-4 p-4 bg-cyan-50 rounded-lg shadow-md space-y-2 min-w-[150px] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-2">
              <p className="text-lg">{dia.dia}</p>
              <p className="text-lg">{formatDate(dia.data)}</p>
            </div>
            <span className="text-yellow-400">{dia.icon}</span>
            <p className="text-lg">
              {dia.temp_min}°C - {dia.temp_max}°C
            </p>
            <p className="text-lg">{dia.cond}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
