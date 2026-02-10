const API_URL = "https://site-trouve-ton-artisan.onrender.com/artisan";

export async function getTopArtisans() {
  const res = await fetch(`${API_URL}/top`);
  return res.json();
}

export async function getArtisansByCategorie(id) {
  const res = await fetch(`${API_URL}/categorie/${id}`);
  return res.json();
}

export async function searchArtisans(nom) {
  const res = await fetch(`${API_URL}/search/${nom}`);
  return res.json();
}

export async function getArtisanById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
