import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-round-cog",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: 90 }, { duration: 0.5, delay: 0.3 }))} style={pivot(18, 18)}>
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
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M2 21a8 8 0 0 1 10.434-7.62"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="8"
				r="5"
			/>
		</>
	),
});
