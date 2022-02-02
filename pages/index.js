import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../components/Button";
import Head from "../components/Head";
import Logo from "../public/new-game-logo.svg";
import { get_all_profiles } from "../utils/new-game/profile";

export default function Home() {

  const router = useRouter();

  const handle_start_game = () => {
    // get all profiles
    get_all_profiles().then(profiles => {
      // save profiles to state
      // route to next page
      router.push('/the-new-game');
    }, error => {
      // handle error;
      console.log(error)
    })
  }

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
        <p className="text-white text-center text-lg">
          Try matching the WillowTree employee to their photo.
        </p>
        {/* submit button */}
        <Button btn_text="Play!" callback={handle_start_game}></Button>
      </section>
    </div>
  );
}
