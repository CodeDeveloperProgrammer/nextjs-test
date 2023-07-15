"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { POST } from "../page";
import TitlePage from "@/components/TitlePage";
import Button from "@/components/Button";

//async cuando ya se pidan los datos a una api externa
export function generateMetadata({ params }) {
  const post = POST.find((post) => post.slug === params.slug);
  return {
    title: post.title,
    description: post.title + " - Description",
  };
};

const Slug = ({ params }) => {
  const post = POST.find((post) => post.slug === params.slug);

  const router = useRouter(); //'use client'  en la primera línea

  const handleClickBack = () => {
    /* router.push("/blog"); */
    router.back();
  };

  return (
    <>
      <TitlePage title={post.title} />
      <p className=" text-center">{post.content}</p>
      <div className="text-center">
        {/* Esto funciona con Link, solo estoy probando como funciona el useRouter() de next/navigation */}
        <Button text={"Volver al blog"} onClick={handleClickBack} />
      </div>
    </>
  );
};

export default Slug;
