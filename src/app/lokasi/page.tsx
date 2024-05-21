import React, { Suspense, lazy, FC } from 'react';
import LokasiComponent from "../_components/LokasiComponent";
import Hero from "../_components/Hero";


export default function Lokasi() {
  return (
    <>
      <Hero bgImage="/lokasiHero.jpg" />
      <LokasiComponent/>
    </>
  )
}
