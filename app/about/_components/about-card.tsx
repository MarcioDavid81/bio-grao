"use client"

import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Truck, Users } from "lucide-react";

export default function AboutCard() {
  return (
    <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">Sobre a Bio Grão</h2>
        <p className="text-gray-600 text-lg">
          Somos uma empresa comprometida com o desenvolvimento do agronegócio brasileiro,
          oferecendo soluções completas para o produtor rural no comércio de grãos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Wheat className="h-10 w-10 text-[#8DC63F]" />,
            title: "Qualidade Garantida",
            description: "Rigoroso controle de qualidade em todos os processos de recebimento e armazenagem."
          },
          {
            icon: <Truck className="h-10 w-10 text-[#1B75BC]" />,
            title: "Logística Eficiente",
            description: "Sistema logístico integrado para garantir agilidade no recebimento e distribuição."
          },
          {
            icon: <Users className="h-10 w-10 text-[#8DC63F]" />,
            title: "Atendimento Personalizado",
            description: "Equipe especializada para oferecer o melhor suporte aos nossos parceiros."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="text-center h-full">
              <CardContent className="pt-6">
                <div className="mb-4 inline-block">{item.icon}</div>
                <h3 className="text-xl text-gray-700 font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}
