"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-gray-600 text-lg">
            Estamos à disposição para atender suas necessidades e esclarecer suas dúvidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Nome" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Telefone" />
                  </div>
                  <div>
                    <Textarea placeholder="Mensagem" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-[#8DC63F] hover:bg-[#7ab32f]">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#1B75BC] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Endereço</h3>
                <p className="text-gray-600">Rua Exemplo, 123 - Centro<br />Cidade - Estado, 00000-000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#1B75BC] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">(00) 0000-0000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#1B75BC] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contato@biograo.com.br</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
