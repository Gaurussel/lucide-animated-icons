import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });
const sun = pose({ y: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const play = pose({ x: [0, -1, 1.5, 0], scale: [1, 0.8, 1.1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "image-play",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={pivot(3, 21)}>
				<path d="m11 16-5 5" />
				<path d="M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" />
				<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			</motion.g>
			<motion.path
				{...part(play)}
				d="M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
				style={centered}
			/>
		</>
	),
});
