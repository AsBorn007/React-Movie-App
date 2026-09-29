import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MovieIcon from "@mui/icons-material/Movie";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#111827",
                color: "#fff",
                mt: 8,
            }}
        >
            <Container maxWidth="xl">

                {/* Main Footer */}
                <Box
                    sx={{
                        py: 5,
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        justifyContent: "space-between",
                        alignItems: {
                            xs: "flex-start",
                            md: "center",
                        },
                        gap: 4,
                    }}
                >

                    {/* Logo / About */}
                    <Box sx={{ maxWidth: 380 }}>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1.5,
                            }}
                        >
                            <MovieIcon
                                sx={{
                                    color: "#f5c518",
                                    fontSize: 30,
                                }}
                            />

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                }}
                            >
                                Movie
                                <Box
                                    component="span"
                                    sx={{ color: "#f5c518" }}
                                >
                                    Hub
                                </Box>
                            </Typography>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255,255,255,0.6)",
                                lineHeight: 1.7,
                            }}
                        >
                            Discover popular movies, explore new releases,
                            and find your next favorite movie all in one place.
                        </Typography>

                    </Box>


                    {/* Quick Links */}
                    <Box>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                mb: 1.5,
                            }}
                        >
                            Explore
                        </Typography>

                        <Stack spacing={1}>

                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    color: "rgba(255,255,255,0.65)",
                                    "&:hover": {
                                        color: "#f5c518",
                                    },
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    color: "rgba(255,255,255,0.65)",
                                    "&:hover": {
                                        color: "#f5c518",
                                    },
                                }}
                            >
                                Movies
                            </Link>

                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    color: "rgba(255,255,255,0.65)",
                                    "&:hover": {
                                        color: "#f5c518",
                                    },
                                }}
                            >
                                Popular Movies
                            </Link>

                        </Stack>

                    </Box>


                    {/* Social */}
                    <Box>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                mb: 1.5,
                            }}
                        >
                            Follow Us
                        </Typography>

                        <Stack direction="row" spacing={1}>

                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    cursor: "pointer",
                                    transition: "0.3s",

                                    "&:hover": {
                                        backgroundColor: "#f5c518",
                                        color: "#111827",
                                    },
                                }}
                            >
                                <FacebookIcon fontSize="small" />
                            </Box>

                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    cursor: "pointer",
                                    transition: "0.3s",

                                    "&:hover": {
                                        backgroundColor: "#f5c518",
                                        color: "#111827",
                                    },
                                }}
                            >
                                <InstagramIcon fontSize="small" />
                            </Box>

                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    cursor: "pointer",
                                    transition: "0.3s",

                                    "&:hover": {
                                        backgroundColor: "#f5c518",
                                        color: "#111827",
                                    },
                                }}
                            >
                                <TwitterIcon fontSize="small" />
                            </Box>

                        </Stack>

                    </Box>

                </Box>


                <Divider
                    sx={{
                        borderColor: "rgba(255,255,255,0.1)",
                    }}
                />


                {/* Bottom */}
                <Box
                    sx={{
                        py: 2.5,
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                    }}
                >

                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(255,255,255,0.5)",
                            textAlign: "center",
                        }}
                    >
                        © 2026 MovieHub. All rights reserved.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={3}
                    >

                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                fontSize: 14,
                                color: "rgba(255,255,255,0.5)",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            underline="none"
                            sx={{
                                fontSize: 14,
                                color: "rgba(255,255,255,0.5)",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            Contact
                        </Link>

                    </Stack>

                </Box>

            </Container>
        </Box>
    );
};

export default Footer;