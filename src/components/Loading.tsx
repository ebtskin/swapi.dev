import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({size}: {size: string}) => {
  return (
		<Stack
			sx={{ color: "grey.500" }}
			spacing={2}
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<CircularProgress color="primary" size={size} />
		</Stack>
  );
}

export default Loading