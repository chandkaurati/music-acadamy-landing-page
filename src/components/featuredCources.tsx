"use client";
import React from "react";
import courceData from "@/data/music_cources.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Cource {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCources() {
  const featuredCource = courceData.filter(
    (cource: Cource) => cource.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2
            className="text-base
            text-teal-600 font-semibold tracking-wide
            uppercase
            "
          >
            FEATURED COURCES
          </h2>
          <p
            className="mt-2 text-3xl leading-8
            font-bold tracking-tight text-white
            sm:text-4xl
            "
          >
            Learn with Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="grid  grid-cols-1
         sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-3"
        >
          {featuredCource.map((cource: Cource) => (
            <div key={cource.id} className="flex justify-center">
              <BackgroundGradient
                className="
              flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm
              "
              >
                <div
                  className="
                p-4 sm:p-6 flex flex-col items-center text-center flex-grow
                "
                >
                  <p
                    className="text-lg
                  sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200
                  "
                  >
                  {cource.title}
                  </p>
                  <p
                  className="
                  text-sm text-slate-700 dark:text-neutral-400 flex-grow
                  "
                  >
                    {cource.description}
                  </p>
                  <Link className="bg-slate-600 py-1 px-5 roudex mt-2 rounded-md" href={`/cources/${cource.slug}`}>Learn more</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center ">
        <Link
          className="bg-slate-800 px-6 py-3 rounded-md hover:bg-slate-700"
          href="/cources"
        >
          View All Cources
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCources;
