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
import { useEffect, useState } from "react";

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
  flex: 1,
  minWidth: 0,

  [theme.breakpoints.up("sm")]: {
    flex: "0 1 280px",
  },

  [theme.breakpoints.up("md")]: {
    flex: "0 1 340px",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: "42px",

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
    padding: theme.spacing(1.25, 1, 1.25, 5),
    fontSize: "14px",

    "&::placeholder": {
      color: "rgba(255,255,255,0.6)",
      opacity: 1,
    },
  },
}));

const HeaderBar = () => {

  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
    }, 800);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {

    if (!debounce) return;

    const fetchData = async () => {
      try {

        let res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIES_APP_API}&query=${debounce}`
        );

        let data = await res.json();

        console.log("searched data", data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [debounce]);

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#111827",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          width: "100%",
          backgroundColor: "#111827",
        }}
      >

        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",

            minHeight: {
              xs: "62px !important",
              sm: "70px !important",
            },

            px: {
              xs: 1.5,
              sm: 3,
              md: 4,
              lg: 5,
            },

            gap: {
              xs: 1,
              sm: 2,
            },
          }}
        >

          {/* Mobile Menu */}
          <IconButton
            size="medium"
            edge="start"
            sx={{
              color: "#fff",

              display: {
                xs: "flex",
                md: "none",
              },

              flexShrink: 0,
            }}
          >
            <MenuIcon />
          </IconButton>


          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 0.5,
                sm: 1,
              },

              mr: {
                xs: 0,
                md: 2,
                lg: 3,
              },

              flexShrink: 0,
            }}
          >

            <MovieIcon
              sx={{
                fontSize: {
                  xs: 26,
                  sm: 30,
                  md: 32,
                },

                color: "#f5c518",
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "24px",
                },

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
              gap: 0.5,
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
              onChange={searchOnChange}
              value={search}
              placeholder="Search movies..."
              inputProps={{
                "aria-label": "search movies",
              }}
            />

          </Search>


          {/* Profile */}
          <IconButton
            sx={{
              width: {
                xs: 34,
                sm: 38,
                md: 40,
              },

              height: {
                xs: 34,
                sm: 38,
                md: 40,
              },

              backgroundColor: "#f5c518",
              color: "#111827",
              flexShrink: 0,

              "&:hover": {
                backgroundColor: "#ffd740",
              },
            }}
          >

            <Typography
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 13,
                  md: 14,
                },

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