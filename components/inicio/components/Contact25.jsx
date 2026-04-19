"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Ubicación</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            ¿Dónde está la bolera de Orihuela Costa? estamos en Zenia Boulevard
          </h2>
          <p className="md:text-md">
            En Plaza Mayor del Centro Comercial Zenia Boulevard. Parking
            gratuito en el centro comercial.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8">
              <a href="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </a>
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Zenia Boulevard
            </h3>
            <p className="text-center">
              Planta baja, Zenia Boulevard, Orihuela Costa, Alicante
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Cómo llegar"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Cómo llegar
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8">
              <a href="#" className="justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="h-[320px] w-full object-cover md:h-[384px]"
                />
              </a>
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Más detalles
            </h3>
            <p className="text-center">
              Consulta nuestra página de horarios y cómo llegar para más
              información
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Información"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
