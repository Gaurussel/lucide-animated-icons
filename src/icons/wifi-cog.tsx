import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const ripple = (delay: number) =>
	pose({ y: [0, -1.5, 0], opacity: [1, 0.15, 1] }, { duration: 0.5, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "wifi-cog",
	render: (part) => (
		<>
			<motion.path {...part(ripple(0.24))} d="M2 7.82a15 15 0 0 1 20 0" />
			<motion.path {...part(ripple(0.12))} d="M5 11.858a10 10 0 0 1 11.5-1.785" />
			<motion.path {...part(ripple(0))} d="M8.5 15.429a5 5 0 0 1 2.413-1.31" />
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={pivot(18, 18)}>
				<path d="m14.305 19.53.923-.382" />
				<path d="m15.228 16.852-.923-.383" />
				<path d="m16.852 15.228-.383-.923" />
				<path d="m16.852 20.772-.383.924" />
				<path d="m19.148 15.228.383-.923" />
				<path d="m19.53 21.696-.382-.924" />
				<path d="m20.772 16.852.924-.383" />
				<path d="m20.772 19.148.924.383" />
				<circle cx="18" cy="18" r="3" />
			</motion.g>
		</>
	),
});
