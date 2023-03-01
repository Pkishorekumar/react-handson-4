import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";



const EditableRow = ({
  open,
  handleClose,
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="student-form" width={800}>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                name="Name"
                label="Name"
                variant="outlined"
                style={{ width: "15rem" }}
                value={editFormData.Name}
                onChange={handleEditFormChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                name="Age"
                label="Age"
                variant="outlined"
                style={{ width: "15rem" }}
                value={editFormData.Age}
                onChange={handleEditFormChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                name="Course"
                label="Course"
                variant="outlined"
                style={{ width: "15rem" }}
                value={editFormData.Course}
                onChange={handleEditFormChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                classsName="textfield"
                id="outlined-basic"
                name="Batch"
                label="Batch"
                variant="outlined"
                style={{ width: "15rem" }}
                value={editFormData.Batch}
                onChange={handleEditFormChange}
              />
            </Grid>
            <br /> <br />
            <Stack spacing={10} direction="row" className="form-btn">
              <Button
                onClick={handleClose}
                variant="outlined"
                size="large"
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleClose}
                variant="contained"
                size="large"
              >
                Update
              </Button>
            </Stack>
          </Grid>
        </form>
      </div>
    </Dialog>
  );
};

export default EditableRow;
