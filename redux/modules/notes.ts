const ADD_NOTE = "next-notes/notes/ADD_NOTE";

export interface Note {
  title: string;
  content: string;
  id: string;
}

interface NotesAction {
  type: string;
  note?: Note;
  id?: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const reducer = (
  state: NotesState = initialState,
  action: NotesAction = { type: "" }
): NotesState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: action.note ? [...state.notes, action.note] : state.notes,
      };
    default:
      return state;
  }
};

export const addNote = (note: Note) => {
  return { type: ADD_NOTE, note };
};

export default reducer;
