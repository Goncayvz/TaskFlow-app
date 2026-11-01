export type Task = {
  id: number;
  title: string;
  description: string;
  status: "In Progress" | "Completed" | "Pending";
  deadline: string;
};

export interface User {
  name: string; email: string; phone: string; bio: string; avatar: string;
  birthDate: string; jobTitle: string; location: string; website: string;
}
export type BadgeCategory = "completions" | "speed" | "cleanup" | "specific" | "daily" | "created" | "streak" | "perfect" | "ontime" | "detail" | "social" | "setup";
export interface Badge { id: number; name: string; description: string; icon: string; threshold: number; category: BadgeCategory }
export interface Notification { id: number; message: string; type: "info" | "success" | "error" | "warning" }
