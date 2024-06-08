"use client";
import Popover from "@mui/material/Popover";
import Backdrop from "@mui/material/Backdrop";
import { useRef, useState } from "react";
import { Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export interface ActionMenuProps {
  children: React.ReactNode;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ children }) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div className="flex">
        <button
          className="mr-4 w-[250px] md:w-[400px]"
          ref={anchorRef}
          aria-describedby={id}
        ></button>
        {!open ? (
          <Fab
            variant="extended"
            style={{
              background: "black",
              color: "white",
              borderRadius: "4px",
            }}
            onClick={handleClick}
          >
            <ShoppingCartIcon sx={{ mr: 1 }} />
            Buy
          </Fab>
        ) : (
          <Fab
            onClick={() => handleClose()}
            style={{ zIndex: 2000, background: "white" }}
            size="small"
          >
            <CloseIcon />
          </Fab>
        )}
      </div>

      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {open && (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            slotProps={{
              paper: {
                style: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  boxShadow: "none",
                  background: "transparent",
                },
              },
            }}
          >
            {children}
          </Popover>
        )}
      </Backdrop>
    </div>
  );
};
