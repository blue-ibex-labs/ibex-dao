import React from "react";
import Libraries from "../../components/Libraries";

const index = () => {
  const data = [
    {
      id: 1,
      link: "9cb921b32bfe214a739ed824f3f2da4e16c535a5448253d2951cc732",
      name: "Alice's Adventures in Wonderland ",
      Volume: "1000",
      discription:
        "Did I request thee, Maker, from my clay To mould Me man? Did I solicit thee From darkness to promote me?",
      href: "#",
      imageSrc: "/../public/assects/alice.jpeg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    {
      id: 2,
      link: "e7514e65f977ee4b84a8e62e7d97ea2e5c11682dfe1444d8a14e74db",
      name: "Frankenstein",
      Volume: "1000",
      discription:
        "Did I request thee, Maker, from my clay To mould Me man? Did I solicit thee From darkness to promote me?",
      href: "#",
      imageSrc: "/../public/assects/frankenstan.jpeg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
    {
      id: 3,
      link: "1f362a4df39f451401e44fee30f27eb39712d66aae375f539be94ed6",
      name: "The Iliad ",
      discription:
        "Did I request thee, Maker, from my clay To mould Me man? Did I solicit thee From darkness to promote me?",
      Volume: "1000",
      href: "#",
      imageSrc: "/../public/assects/iliad.jpeg",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
    },
  ];
  // {console.log("item", item)}
  return (
    <div className="flex w-full container mx-auto  ">
      <div className="flex flex-wrap justify-center ">
        <Libraries products={data} />
      </div>
    </div>
  );
};

export default index;
