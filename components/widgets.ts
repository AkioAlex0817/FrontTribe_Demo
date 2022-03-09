import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box"
import {Button} from "@mui/material";

export const ClearFix = styled(Box)({
    '&::after': {
        display: "block",
        clear: 'both',
        content: "''"
    }
})

export const HomeButton = styled(Button)({
    height: "70px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "50px",
    paddingLeft: "50px",
    paddingRight: "50px",
    '& .MuiTypography-subtitle1': {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform : "capitalize",
    },
})