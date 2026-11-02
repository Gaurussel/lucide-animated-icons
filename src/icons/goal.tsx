import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const wave = pose({ scaleX: [1, 0.7, 1, 0.85, 1] }, { duration: 0.85, delay: 0.3, times: [0, 0.25, 0.5, 0.75, 1] });
const ring = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });

export default createAnimatedIcon({
	name: "goal",
	render: (part) => (
		<>
			<motion.path {...part(wave)} d="M12 13V2l8 4-8 4" style={edge(0, 0.5)} />
			<motion.path {...part(ring(0.1))} d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
			<motion.path {...part(ring(0))} d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
		</>
	),
});
