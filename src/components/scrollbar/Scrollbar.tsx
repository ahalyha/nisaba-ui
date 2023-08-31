import { forwardRef, memo } from "react";
import Box from "@mui/material/Box";

import { StyledRootScrollbar, StyledScrollbar } from "./Scrollbar.styled";

import { Props } from "simplebar-react";

export interface ScrollbarProps extends Props {
  children?: React.ReactNode;
}

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ children, ...other }, ref) => {
    const userAgent =
      typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );

    if (isMobile) {
      return (
        <Box ref={ref} sx={{ overflow: "auto" }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  },
);

Scrollbar.displayName = "Scrollbar";

export default memo(Scrollbar);
