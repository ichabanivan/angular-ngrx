export class Todo {
  constructor(
    public text: string,
    public date: string,
    public done: boolean = false,
    public id?: number,
  ) {}
}
