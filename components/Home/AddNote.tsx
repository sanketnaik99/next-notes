import { Add } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { object, string } from "yup";
import { AppDispatch } from "../../pages/_app";
import { addNote, Note } from "../../redux/modules/notes";

const noteValidationSchema = object({
  title: string()
    .required("A title is required")
    .min(3, "Please enter a valid title"),
  content: string()
    .required("Note content is required")
    .min(10, "Please enter valid note content"),
});

interface NoteFormValues {
  title: string;
  content: string;
}

const AddNote = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: NoteFormValues = { title: "", content: "" };
  const formik = useFormik<NoteFormValues>({
    initialValues: initialValues,
    validationSchema: noteValidationSchema,
    onSubmit: (values) => {
      const note: Note = {
        title: values.title,
        content: values.content,
        id: `${new Date().getTime().toString()}${Math.floor(
          Math.random() * 100
        )}`,
      };
      dispatch(addNote(note));
      formik.resetForm();
    },
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} flexDirection="row" flexGrow={1}>
        <Typography variant="h4" component="h4" sx={{ fontWeight: "bold" }}>
          Add a Note
        </Typography>
      </Grid>
      <Grid item xs={12} flexDirection="row" flexGrow={1}>
        <Typography variant="body1" component="p">
          You know how this works right? Fill out the text fields and click the
          button. EASY.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} flexDirection="row" flexGrow={1}>
              <TextField
                sx={{ width: "100%" }}
                id="title"
                label="Title"
                name="title"
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                data-cy="title-input"
              />
            </Grid>
            <Grid item xs={12} flexDirection="row" flexGrow={1}>
              <TextField
                sx={{ width: "100%" }}
                id="content"
                label="Content"
                variant="outlined"
                name="content"
                multiline
                value={formik.values.content}
                onChange={formik.handleChange}
                error={formik.touched.content && Boolean(formik.errors.content)}
                helperText={formik.touched.content && formik.errors.content}
                data-cy="content-input"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                id="add-note-submit"
                startIcon={<Add />}
                type="submit"
                data-cy="add-note-submit"
              >
                Add Note
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddNote;
