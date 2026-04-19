"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline19() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Horarios</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Abiertos los 365 días del año en Orihuela Costa, ven cuando
              quieras
            </h2>
            <p className="md:text-md">
              Los horarios varían según la época. Consulta tu temporada y
              planifica tu visita.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Contactar" variant="secondary">
                Contactar
              </Button>
              <Button
                title="Más info"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Más info
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 md:flex">
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="w-full"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mb-4 md:mt-8 md:w-full md:flex-row md:self-auto">
              <div className="absolute left-0 top-1.5 z-10 hidden h-1 w-16 bg-gradient-to-r from-background-primary to-transparent md:block" />
              <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
              <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Horario normal
              </h3>
              <p>
                de Enero a Junio LUNES A VIERNES de 14:00h a 23:30h SABADOS,
                DOMINGOS Y FESTIVOS de 12:00h a 00:00h
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="w-full"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mb-4 md:mt-8 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
              <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Horario de Semana Santa
              </h3>
              <p>
                del 30 de marzo al 12 de Abril TODOS LOS DÍAS de 12:00h a 00:00h
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="w-full"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mb-4 md:mt-8 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
              <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Horario de Verano
              </h3>
              <p>Julio y Agosto TODOS LOS DÍAS de 11:00h a 01:00h</p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="w-full"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mb-4 md:mt-8 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
              <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full hidden md:block" />
              <div className="absolute right-0 top-1.5 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Horario de Navidad
              </h3>
              <p>
                del 22 de diciembre al 06 de enero TODOS LOS DÍAS de 12:00h a
                00:00h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
