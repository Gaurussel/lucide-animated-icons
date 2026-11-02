import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const dot = (column: number, up: boolean) =>
	pose(
		{ y: [0, up ? -3 : 3, 0], x: [0, up ? 2 : -2, 0], scale: [1, 2.2, 1] },
		{ duration: 0.4, delay: up ? column * 0.1 : (2 - column) * 0.1 + 0.3, times: [0, 0.5, 1] },
	);

export default createAnimatedIcon({
	name: "grip-horizontal",
	render: (part) => (
		<>
			<motion.circle {...part(dot(1, true))} cx="12" cy="9" r="1" style={centered} />
			<motion.circle {...part(dot(2, true))} cx="19" cy="9" r="1" style={centered} />
			<motion.circle {...part(dot(0, true))} cx="5" cy="9" r="1" style={centered} />
			<motion.circle {...part(dot(1, false))} cx="12" cy="15" r="1" style={centered} />
			<motion.circle {...part(dot(2, false))} cx="19" cy="15" r="1" style={centered} />
			<motion.circle {...part(dot(0, false))} cx="5" cy="15" r="1" style={centered} />
		</>
	),
});
