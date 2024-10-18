export const BASE_URL = import.meta.env.VITE_BASE_URL


export const fetchStarships = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Error occurred')
    const data = await res.json();
    return data.results
  } catch (err) {
      console.log(err);
  }
}

export const searchStarships = async (search) => {
  try {
    const res = await fetch(BASE_URL +"/?search="+ search)
    if(!res.ok) throw new Error('Error occurred')
    const data = await res.json();
    console.log('Data:', data);
  } catch (err) {
      console.log(err);
  }
}
