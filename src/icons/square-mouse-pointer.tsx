import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const click = pose(
	{ x: [0, 4, -2, 0], y: [0, 4, -2, 0], scale: [1, 1, 0.8, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const flinch = pose(
	{ scale: [1, 1, 0.9, 1] },
	{ duration: 0.7, times: [0, 0.32, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "square-mouse-pointer",
	render: (part) => (
		<>
			<motion.path
				{...part(click)}
				d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
				style={edge(0, 0)}
			/>
			<motion.path
				{...part(flinch)}
				d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
				style={centered}
			/>
		</>
	),
});
