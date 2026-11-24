import type { Task } from "./types";

export const tasks: Task[] = [
    {
        id: 1,
        title: "UI Design System",
        description: "Create reusable UI components",
        status: "In Progress",
        deadline: "2 days left"
    },
    {
        id: 2,
        title: "Authentication Page",
        description: "Build login and register screens",
        status: "Completed",
        deadline: "Done"
    },
    {
        id: 3,
        title: "API Integration",
        description: "Connect frontend with backend",
        status: "Pending",
        deadline: "5 days left"
    }
];