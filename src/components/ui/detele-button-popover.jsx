import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";

import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { HiOutlineTrash } from "react-icons/hi";

const DeleteButtonPopover = ({
  tooltipTitle,
  onDelete,
  loading,
  popoverLabel = "Hapus data ini?",
}) => (
  <PopupState variant="popover">
    {(popupState) => (
      <div>
        <Tooltip title={tooltipTitle}>
          <IconButton
            color="error"
            disabled={loading}
            {...bindTrigger(popupState)}
          >
            <HiOutlineTrash />
          </IconButton>
        </Tooltip>
        <Popover
          {...bindPopover(popupState)}
          classes={{ paper: "p-4" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <p>{popoverLabel}</p>
          <div className="mt-2 flex justify-end gap-2">
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={onDelete}
            >
              Hapus
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => popupState.close()}
            >
              Batal
            </Button>
          </div>
        </Popover>
      </div>
    )}
  </PopupState>
);

export default DeleteButtonPopover;
