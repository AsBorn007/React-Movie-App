import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    border: "1px solid rgba(255,255,255,0.12)",
    transition: "all 0.3s ease",

    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.12),
    },

    "&:focus-within": {
        backgroundColor: alpha(theme.palette.common.white, 0.12),
        borderColor: "rgba(255,255,255,0.3)",
    },

    width: "100%",

    [theme.breakpoints.up("sm")]: {
        width: "280px",
    },

    [theme.breakpoints.up("md")]: {
        width: "340px",
    },
}));

const SearchIconWrapper = styled("div")(() => ({
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "45px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "rgba(255,255,255,0.7)",
    pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#fff",
    width: "100%",

    "& .MuiInputBase-input": {
        padding: theme.spacing(1.3, 1.5, 1.3, 5.5),
        fontSize: "14px",

        "&::placeholder": {
            color: "rgba(255,255,255,0.6)",
            opacity: 1,
        },
    },
}));

const HeaderBar = () => {
    return (
        <Box sx={{ flexGrow: 1,
             backgroundColor: "#111827",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
         }}>

            <AppBar
                position="sticky"
                elevation={0}
                className="han vidu"
                sx={{
                   maxWidth:"1280px",
                    backgroundColor: "#111827",
                }}
            >

                <Toolbar
                    sx={{
                        minHeight: "70px !important",
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 5,
                        },
                        gap: 2,
                    }}
                >

                    {/* Mobile Menu */}
                    <IconButton
                        size="large"
                        edge="start"
                        sx={{
                            color: "#fff",
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>


                    {/* Logo */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mr: {
                                xs: 0,
                                md: 3,
                            },
                        }}
                    >
                        <MovieIcon
                            sx={{
                                fontSize: 32,
                                color: "#f5c518",
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.5px",
                                color: "#fff",
                            }}
                        >
                            Movie<span style={{ color: "#f5c518" }}>Hub</span>
                        </Typography>
                    </Box>


                    {/* Navigation */}
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            alignItems: "center",
                            gap: 1,
                            flexGrow: 1,
                        }}
                    >

                        <Button
                            sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: "8px",
                                px: 2,

                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            Home
                        </Button>

                        <Button
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                textTransform: "none",
                                borderRadius: "8px",
                                px: 2,

                                "&:hover": {
                                    color: "#fff",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            Movies
                        </Button>

                        <Button
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                textTransform: "none",
                                borderRadius: "8px",
                                px: 2,

                                "&:hover": {
                                    color: "#fff",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            Popular
                        </Button>

                    </Box>


                    {/* Search */}
                    <Search>

                        <SearchIconWrapper>
                            <SearchIcon fontSize="small" />
                        </SearchIconWrapper>

                        <StyledInputBase
                            placeholder="Search movies..."
                            inputProps={{
                                "aria-label": "search movies",
                            }}
                        />

                    </Search>


                    {/* Profile */}
                    <IconButton
                        sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#f5c518",
                            color: "#111827",
                            fontWeight: 700,

                            "&:hover": {
                                backgroundColor: "#ffd740",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: 800,
                            }}
                        >
                            PK
                        </Typography>
                    </IconButton>

                </Toolbar>

            </AppBar>

        </Box>
    );
};

export default HeaderBar;