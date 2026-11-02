import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -10, -10, 0], y: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.2, 0.8, 1] });
const press = (start: number) =>
	pose({ scale: [1, 1, 2.4, 1, 1] }, { duration: 0.8, times: [0, start, start + 0.12, start + 0.26, 1] });

export default createAnimatedIcon({
	name: "gamepad",
	render: (part) => (
		<motion.g {...part(tilt)} style={centered}>
			<motion.g
				{...part(pose({ scale: [1, 0.45, 1, 1] }, { duration: 0.8, times: [0, 0.15, 0.3, 1] }))}
				style={centered}
			>
				<line x1="6" x2="10" y1="12" y2="12" />
				<line x1="8" x2="8" y1="10" y2="14" />
			</motion.g>
			<motion.line {...part(press(0.3))} style={centered} x1="15" x2="15.01" y1="13" y2="13" />
			<motion.line {...part(press(0.5))} style={centered} x1="18" x2="18.01" y1="11" y2="11" />
			<rect height="12" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
