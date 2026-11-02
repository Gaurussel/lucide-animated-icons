import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const gust = (delay: number) =>
	pose({ x: [0, 4, 0] }, { duration: 0.6, delay, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "wind",
	render: (part) => (
		<>
			<motion.path {...part(gust(0.12))} d="M12.8 19.6A2 2 0 1 0 14 16H2" />
			<motion.path {...part(gust(0.06))} d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
			<motion.path {...part(gust(0))} d="M9.8 4.4A2 2 0 1 1 11 8H2" />
		</>
	),
});
