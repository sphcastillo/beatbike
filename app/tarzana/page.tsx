import { proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold } from "@/app/fonts";
import StudioCalendar from "@/components/StudioCalendar";

function TarzanaPage() {
  return (
    <div className="py-8 bg-white">
      <div >
        <div className="flex justify-center items-center pt-4">
          <h1 className={`${proximaNovaMedium.className} uppercase text-4xl`}>Tarzana</h1>
        </div>

        <div className="flex justify-center items-center pb-12 pt-3">
          <h1 className={`${proximaNovaRegular.className} uppercase text-2xl`}>Studio Schedule</h1>
        </div>

        <div className="flex justify-center">
          <StudioCalendar />
        </div>
      </div>
    </div>
  );
}

export default TarzanaPage;
