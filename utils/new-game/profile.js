const PROFILE_URL = "https://namegame.willowtreeapps.com/api/v1.0/profiles";

export const get_all_profiles = async () => {
  return await fetch(PROFILE_URL).then(async data => {
    const profiles = await data.json();
    return profiles;
  }).catch(error => {
    return error.message
  })
}