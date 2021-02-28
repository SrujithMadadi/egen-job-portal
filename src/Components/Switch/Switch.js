import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 33,
		height: 17,
		padding: 0,
		display: 'flex',
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(19px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: "white",
			},
		},
	},
	thumb: {
		width: 10,
		height: 10,
		boxShadow: 'none',
		color:"#5865E0",
		marginTop:2
	},
	track: {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white,
	},
	checked: {},
}))(Switch);

export default function CustomizedSwitches(props) {
	return (
		<FormGroup>
			<Typography component="div">
				<Grid component="label" container alignItems="center" spacing={1}>
					<Grid item>
						<AntSwitch checked={props.checked} onChange={props.change}/>
					</Grid>
				</Grid>
			</Typography>
		</FormGroup>
	);
}