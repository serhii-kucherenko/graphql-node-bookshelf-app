export type Book = {
  id: string,
  title: string,
  description: string,
  author: string,
  coverImageLink: string,
  likes: number
};

export type Query = {
  books: Book[]
};
