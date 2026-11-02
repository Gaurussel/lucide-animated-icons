import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-cog",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M10 15H6a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ rotate: 90 }, { duration: 0.5, delay: 0.3 }))} style={pivot(18, 15)}>
				<path d="m14.305 16.53.923-.382" />
				<path d="m15.228 13.852-.923-.383" />
				<path d="m16.852 12.228-.383-.923" />
				<path d="m16.852 17.772-.383.924" />
				<path d="m19.148 12.228.383-.923" />
				<path d="m19.53 18.696-.382-.924" />
				<path d="m20.772 13.852.924-.383" />
				<path d="m20.772 16.148.924.383" />
				<circle cx="18" cy="15" r="3" />
			</motion.g>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="9"
				cy="7"
				r="4"
			/>
		</>
	),
});
