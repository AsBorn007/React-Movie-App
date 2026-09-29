import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

const MediaCard = ({ itemDetails }) => {

    return (
        <Card
            sx={{
                maxWidth: "100%",
                borderRadius: "14px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }
            }}
        >

            {/* Poster */}
            <Box sx={{ position: "relative" }}>

                <CardMedia
                    sx={{
                        height: 320,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    image={`https://image.tmdb.org/t/p/w500${itemDetails?.poster_path}`}
                    title={itemDetails?.title}
                />

                {/* Rating */}
                <Chip
                    icon={<StarIcon sx={{ fontSize: "16px !important" }} />}
                    label={itemDetails?.vote_average?.toFixed(1)}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: "rgba(0,0,0,0.75)",
                        color: "#fff",
                        fontWeight: 600,
                        backdropFilter: "blur(5px)",

                        "& .MuiChip-icon": {
                            color: "#ffc107"
                        }
                    }}
                />

            </Box>


            {/* Content */}
            <CardContent sx={{ padding: "18px 18px 10px" }}>

                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {itemDetails?.title}
                </Typography>


                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "67px",
                    }}
                >
                    {itemDetails?.overview}
                </Typography>


                {/* Release date */}
                <Typography
                    variant="caption"
                    sx={{
                        display: "block",
                        marginTop: "12px",
                        color: "text.secondary",
                        fontWeight: 500,
                    }}
                >
                    Release: {itemDetails?.release_date}
                </Typography>

            </CardContent>


            {/* Buttons */}
            <CardActions
                sx={{
                    padding: "8px 18px 18px",
                    gap: "8px"
                }}
            >

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        flex: 1,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    View Details
                </Button>

                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Share
                </Button>

            </CardActions>

        </Card>
    );
}

export default MediaCard;