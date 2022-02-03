import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../components/Button";
import Head from "../components/layout/Head";
import { PROFILES } from "../data/local-storage-keys";
import Logo from "../public/new-game-logo.svg";
import { get_all_profiles } from "../utils/new-game/profile";

export default function Home() {
  const router = useRouter();

  const handle_start_game = () => {
    // get all profiles
    get_all_profiles().then(
      ({ success, profiles = [] }) => {
        // save profiles to local storage
        localStorage.setItem(
          PROFILES,
          JSON.stringify({
            length: profiles.length,
            profiles,
          })
        );
        // route to next page
        router.push("/the-new-game");
      },
      (error) => {
        // handle error;
        console.log(error);
      }
    );
  };

  return (
    <div className="bg-new-game-dark-blue h-screen w-screen">
      <Head></Head>
      <section className="flex flex-col gap-16 h-full justify-center items-center p-4">
        {/* logo */}
        <div className="h-72 md:h-96 lg:h-[462.76px] w-full relative">
          <Image
            src={Logo}
            layout="fill"
            objectFit="contain"
            alt="new game logo"
          ></Image>
        </div>
        {/* instruction text */}
        <p className="text-white text-center text-2xl">
          Try matching the WillowTree employee to their photo.
        </p>
        {/* submit button */}
        <Button btn_text="Play!" callback={handle_start_game}></Button>
      </section>
    </div>
  );
}
