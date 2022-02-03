import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { PROFILES } from "../data/local-storage-keys";

const TheNewGame = () => {
  // useState to start time
  const [startTime, setStartTime] = useState(Date.now());
  // useState currentPage
  const [currentPage, setCurrentPage] = useState(1);
  // useState profiles
  const [profiles, setProfiles] = useState([]);
  // useState selected profile
  // todo: rename to selected profile id
  const [selectedProfile, setSelectedProfile] = useState(null);

  // handles reset of page
  useEffect(() => {
    // get local storage profiles
    const storage_profiles = localStorage.getItem(PROFILES);
    if (!storage_profiles) return; // todo: something went wrong/

    // parse storage item
    const profile_obj = JSON.parse(storage_profiles);
    // get random indexes
    const random_profile_indexes = generate_random_profiles_indexes(
      6,
      profile_obj.length
    );
    // get profiles
    const random_profiles = get_profiles(
      random_profile_indexes,
      profile_obj.profiles
    );
    // set profiles
    setProfiles(random_profiles);

    // todo: extract
    const selected_index = Math.round(Math.random() * 6);
    setSelectedProfile(random_profile_indexes[selected_index].id);
    

  }, [currentPage]);

  const handle_select_profile = (profile_id) => {
    // stop use from clicking anything else

    // check if selection was correct/wrong    
    // redux can handle adding selection true or false count
    if (profile_id === selectedProfile)
      dispatch(update_successful_count());
    else
      dispatch(update_error_count());
    
    // set selected profile with success or error state

    // if current page is last page
    if (currentPage === 5){
      const end_time = Date.now();
      const time_lapsed = ((end_time - startTime) / 1000) / 5
    }
    // save end time
  };

  const handle_continue = () => {
    // if last page
    // route to result page
    // update current page if we are not on last page => this fires useEffect
  };

  return (
    <div className="h-screen w-screen">
      {profiles && (
        <section id="profiles" className="">
          {profiles.map((profile) => (
            <Profile
              key={profile.id}
              id={profile.id}
              url={profile.headshot.url}
              callback={handle_select_profile}
            ></Profile>
          ))}
        </section>
      )}
    </div>
  );
};

// num_of_profiles_needed => how many do you want?
// total_num_profiles => total amount of profiles that we can choose from

// output: [] of indexes;
const generate_random_profiles_indexes = (
  num_of_profiles_needed,
  total_num_profiles
) => {
  return Array.from({ length: num_of_profiles_needed }, () =>
    Math.round(Math.random() * total_num_profiles)
  );
};

// profile_indexes => [] indexes of profiles we want

// output: [] profiles
const get_profiles = (profile_indexes, all_profiles) => {
  // todo: make sure there are no duplicate profiles
  return profile_indexes.map((profile_index) => all_profiles[profile_index]);
};

export default TheNewGame;
