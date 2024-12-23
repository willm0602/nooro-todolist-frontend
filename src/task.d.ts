export default interface Task {
  title: string;
  color?: string;
  id?: number;
  status: "COMPLETED" | "TODO";
}
