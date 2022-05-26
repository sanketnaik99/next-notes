import { Check, Clear } from "@mui/icons-material";
import { Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../pages/_app";
import { deleteNote, Note } from "../../redux/modules/notes";

interface Props {
  notes: Note[];
  modalOpen: boolean;
  handleClose: () => void;
  IDToDelete: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setIDToDelete: Dispatch<SetStateAction<string>>;
}

const DeleteNoteModal: React.FC<Props> = ({
  notes,
  modalOpen,
  handleClose,
  IDToDelete,
  setModalOpen,
  setIDToDelete,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        id="delete-confirmation-modal"
      >
        <Paper sx={{ padding: "20px" }}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            Are you sure you want to delete the following note?
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: "12px" }}>
            Title: {notes.filter((note) => note.id == IDToDelete)[0]?.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(33, 33, 33, 0.2)",
            }}
          >
            Content: {notes.filter((note) => note.id == IDToDelete)[0]?.content}
          </Typography>
          <Stack direction="row-reverse" spacing={4} sx={{ marginTop: "20px" }}>
            <Button
              color="success"
              variant="outlined"
              id="yes-button"
              startIcon={<Check />}
              onClick={() => {
                dispatch(deleteNote(IDToDelete));
                setModalOpen(false);
                setIDToDelete("");
              }}
              data-cy="delete-confirm-button"
            >
              Yes
            </Button>
            <Button
              color="error"
              variant="outlined"
              startIcon={<Clear />}
              onClick={handleClose}
              data-cy="delete-cancel-button"
            >
              No
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Modal>
  );
};

export default DeleteNoteModal;
