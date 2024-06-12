import Team from "@/components/Team";
import Image from "next/image";
import beatbikeLogo from "@/images/beatbikeLogo.png";

function Instructors() {
  return (
    <div className="">
      <div className="mt-8">
        <Image
          className="mx-auto h-[65px] w-auto"
          src={beatbikeLogo}
          alt="Beatbike Logo"
          width={55}
          height={55}
        />
      </div>
      <Team />
    </div>
  );
}

export default Instructors;
