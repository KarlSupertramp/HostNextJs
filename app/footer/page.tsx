import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function  Footer() {

	const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

	return (
		<Box
			component="footer"
			sx={{
				justifyContent: "center",
				display: "flex",	
				textAlign: "center",
				mt: 3
			}}>
			<Container
				sx={{
          px: 5,
          py: 3,
          mx: 2,
          bgcolor: "primary.main",
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
          display: "flex",
					boxShadow: 3,
          flexDirection: "column"
        }}>
				<Stack justifyContent={"center"} gap={1} direction={"row"}>
					<Link onClick={() => {handleScroll("head-section")}} color="text.dark">Home</Link>
					<Link onClick={() => {handleScroll("showroom-section")}} color="text.dark">Showroom</Link>
					<Link onClick={() => {handleScroll("skills-section")}} color="text.dark">Skills</Link>	
					<Link onClick={() => {handleScroll("contact-section")}} color="text.dark">Contact</Link>
				</Stack>
				<Typography alignSelf={"center"} variant="body2" color="text.dark">
					&copy; {new Date().getFullYear()} Karl Martin
				</Typography>
			</Container>
		</Box>	
	);
}