"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLngTuple } from "leaflet";

// Mengimpor Leaflet secara dinamis
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const LocationInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-primary">Address</h3>
      <p className="mt-1 text-gray-600">
        Jl. Kebon Nanas V nomor 38, Kel. Grogol Utara, Kec. Kebayoran Lama, Kota
        Adm. Jakarta Selatan, Provinsi DKI Jakarta
      </p>

      <div className="border-t border-gray-200 mt-4 pt-4">
        <h3 className="text-lg font-semibold text-primary">Hours</h3>
        <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
        <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
        <p className="mt-1 text-gray-600">Sunday: Closed</p>
      </div>

      <div className="border-t border-gray-200 mt-4 pt-4">
        <h3 className="text-lg font-semibold text-primary">Contact</h3>
        <p className="mt-1 text-gray-600">Email: isamed@gmail.com</p>
        <p className="mt-1 text-gray-600">Phone: +62 XXX XXXX XXX</p>
      </div>
    </div>
  );
};

// Main Location Component
const Location: React.FC = () => {
  return (
    <section className="py-16" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary">Location</h2>
          <p className="mt-4 text-lg text-gray-500">
            Find us at our Head Office and Warehouse
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <Suspense
                fallback={
                  <div className="h-80 w-full rounded-lg shadow-md bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                }
              >
                <MapComponent />
              </Suspense>
            </div>
            <LocationInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
