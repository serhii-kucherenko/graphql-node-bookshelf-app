export type Book = {
  id: string,
  title: string,
  description: string,
  author: string,
  coverImageLink: string,
  rating: number
};

export type Query = {
  books: Book[]
};
