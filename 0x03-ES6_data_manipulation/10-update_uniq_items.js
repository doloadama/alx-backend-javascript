import groceriesList from './9-groceries_list';

export default function updateUniqueItems(map) {
  const updateUniqueItems = map => {
    if (!map) throw new Error("Cannot process");
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  };
}
