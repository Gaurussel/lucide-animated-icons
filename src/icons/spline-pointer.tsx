import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const drag = pose({ x: [0, -4, 0], y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const pop = (delay: number) =>
	pose({ scale: [1, 1.4, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "spline-pointer",
	render: (part) => (
		<>
			<motion.path
				{...part(drag)}
				d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
			/>
			<motion.path {...part(redraw(0.1, 0.5))} d="M5 17A12 12 0 0 1 17 5" />
			<motion.circle {...part(pop(0.15))} cx="19" cy="5" r="2" style={centered} />
			<motion.circle {...part(pop(0.05))} cx="5" cy="19" r="2" style={centered} />
		</>
	),
});
