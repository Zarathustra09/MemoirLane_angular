export class Entry {
  id: number;
  user_Id: number;
  title: string;
  content: string;
  created_At: Date;
  updated_At: Date;

  constructor(
    id: number,
    user_Id: number,
    title: string,
    content: string,
    created_At: Date,
    updated_At: Date
  ) {
    this.id = id;
    this.user_Id = user_Id;
    this.title = title;
    this.content = content;
    this.created_At = created_At;
    this.updated_At = updated_At;
  }
}
