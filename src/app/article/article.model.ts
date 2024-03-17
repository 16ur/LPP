export interface Article {
  id: number;
  titre: string;
  texte: string;
  date: string;
  favoris: boolean;
  categorie: string;
  classe: string;
  photos: Photo[];
}

export interface Photo {
  image: string;
  length: number;
  legende: string;
}
