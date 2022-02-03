
const PROFILE_URL = "https://namegame.willowtreeapps.com/api/v1.0/profiles";

export const get_all_profiles = async () => {
  const profile_fetch = await fetch(PROFILE_URL).catch((error) => {
    throw new Error("request failed");
  });

  if (profile_fetch.ok) {
    const profiles = await profile_fetch.json();
    return {
      success: true,
      profiles,
    };
  } else {
    throw new Error(
      JSON.stringify({
        success: false,
        status: profile_fetch.status,
        reason: profile_fetch.statusText,
      })
    );
  }
};
