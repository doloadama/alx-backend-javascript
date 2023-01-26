import Classroom from './0-classroom';

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new Classroom(size));
}
