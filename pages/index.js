import Image from "next/image";
import { Button } from "../components/Button";
import Head from "../components/Head";
import Logo from "../public/new-game-logo.svg";

export default function Home() {
  return (
    <div className="bg-new-game-dark-blue h-screen w-screen">
      <Head></Head>
      <section className="flex flex-col gap-16 h-full justify-center items-center p-4">
        {/* logo */}
        <div className="h-40 md:h-60 lg:h-96 w-full relative">
          <Image
            src={Logo}
            layout="fill"
            objectFit="contain"
            alt="new game logo"
          ></Image>
        </div>
        {/* instruction text */}
        <p className="text-white text-center">
          Try matching the WillowTree employee to their photo.
        </p>
        {/* submit button */}
        <Button btn_text="Play!"></Button>
      </section>
    </div>
  );
}
