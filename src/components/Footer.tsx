import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/Logo.svg" width={133} height={23} alt="CasluTrips" />
      <p className="text-sm font-medium mt-1 text-primaryDarker text-center">Todos os direitos reservados. <br/>@RCaslu</p>
    </div>
  );
};

export default Footer;
