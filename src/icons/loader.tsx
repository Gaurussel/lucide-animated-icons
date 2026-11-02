import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const SPOKES = [
	"M12 2v4",
	"m16.2 7.8 2.9-2.9",
	"M18 12h4",
	"m16.2 16.2 2.9 2.9",
	"M12 18v4",
	"m4.9 19.1 2.9-2.9",
	"M2 12h4",
	"m4.9 4.9 2.9 2.9",
];

const turn = pose({ rotate: 360 }, { duration: 0.9, reset: true });
const fade = (index: number) => pose({ opacity: [1, 0.2, 1] }, { duration: 0.45, delay: index * 0.06 });

export default createAnimatedIcon({
	name: "loader",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			{SPOKES.map((d, index) => (
				<motion.path {...part(fade(index))} d={d} key={d} />
			))}
		</motion.g>
	),
});
