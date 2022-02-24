import { nanoid } from "nanoid";
const initialData = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: [
        { id: nanoid(2), content: "Helpdesk Call AA999" },
        { id: nanoid(2), content: "Helpdesk Call BB999" },
        { id: nanoid(2), content: "Helpdesk Call EE999" },
        { id: nanoid(2), content: "Helpdesk Call DD999" },
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Development",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Testing",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
