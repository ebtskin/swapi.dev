/** @format */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { format, parseISO } from "date-fns";

export default function BasicCard(props: any) {
	return (
		<Card sx={{ minWidth: 275, mb: 2 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom
				>
					{props.title}
				</Typography>
				<Typography variant="h5" component="div">
					{props.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					created: {format(parseISO(props.created), "PPpp")}
				</Typography>
				<Typography variant="body2">url: {props.url}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
