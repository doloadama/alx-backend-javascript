import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
    await uploadPhoto(filename);
  } catch (err) {
    res.push({
      status: 'rejected',
      value: `Error: ${filename} cannot be processed`,
    });
  }
  return res;
}
