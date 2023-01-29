import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const reponse = {
    photo: null,
    user: null,
  };
  try {
    reponse.photo = await uploadPhoto();
    reponse.user = await createUser();
  } catch (error) {
    return reponse;
  }
  return reponse;
}
