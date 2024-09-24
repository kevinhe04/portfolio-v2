"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import { Menu } from "lucide-react";

export default function MenuPortfolio() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed right-0 md:hidden">
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu color="#ffffff" />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          className="font-petrona"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          Close
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton>
            <a
              href="#experience"
              className="block text-lg hover:underline transition-all font-petrona duration-300"
            >
              Experience
            </a>
          </ListItemButton>
          <ListItemButton>
            <a
              href="#projects"
              className="block text-lg hover:underline font-petrona transition-all duration-300"
            >
              Projects
            </a>
          </ListItemButton>
          <ListItemButton>
            <a
              href="#contact"
              className="block text-lg hover:underline font-petrona transition-all duration-300"
            >
              Contact
            </a>
          </ListItemButton>
          <ListItemButton>
            <a
              href="https://drive.google.com/file/d/1JWfl8-4oR-525v0Jn7hS2tYlR8kE_zR9/view?usp=sharing"
              target="_blank"
              className="font-petrona text-lg"
            >
              Resume
            </a>
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}
