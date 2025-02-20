"use client"

import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from '@/components/section-title';

export default function ServicesCard() {
  return (
    <div className="container">
        <SectionTitle title="Nossos Serviços" subtitle="o que oferecemos" />
    <section id="services" className="py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-start mb-16"
        >
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas para o recebimento e comercialização de grãos,
            com foco na qualidade e satisfação dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1556114846-f753bec8a9f5",              
              title: "Recebimento de Grãos",
              description: "Estrutura moderna para recebimento de soja, milho, trigo e outros grãos."
            },
            {
              image: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6",
              title: "Comercialização",
              description: "As melhores condições comerciais para a compra e venda de sua produção."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
