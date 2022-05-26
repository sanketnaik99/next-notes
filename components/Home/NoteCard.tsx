import { Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Note } from "../../redux/modules/notes";

interface Props {
  note: Note;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setIDToDelete: Dispatch<SetStateAction<string>>;
}

const NoteCard: React.FC<Props> = ({ note, setModalOpen, setIDToDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          sx={{ fontSize: 19, fontWeight: 600 }}
          color="text.secondary"
          variant="h5"
          component="h5"
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography variant="body1" component="p">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          id={`delete-${note.id}`}
          onClick={() => {
            setModalOpen(true);
            setIDToDelete(note.id);
          }}
          data-cy="delete-button"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoteCard;
