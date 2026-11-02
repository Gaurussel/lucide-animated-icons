import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const arcs = [
	"M12 2a10 10 0 0 1 7.38 16.75",
	"M8.644 21.42a10 10 0 0 0 7.631-.38",
	"M2.83 16a10 10 0 0 0 2.43 3.4",
	"M2.5 8.875a10 10 0 0 0-.5 3",
	"M4.636 5.235a10 10 0 0 1 .891-.857",
];

const fade = (index: number) =>
	pose({ opacity: [1, 0.15, 1] }, { duration: 0.4, delay: index * 0.07, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "circle-fading-plus",
	render: (part) => (
		<>
			{arcs.map((d, index) => (
				<motion.path {...part(fade(index))} d={d} key={d} />
			))}
			<motion.g
				{...part(
					pose({ scale: [1, 0, 0, 1], rotate: [0, 0, -90, 0] }, { duration: 0.7, times: [0, 0.3, 0.35, 1] }),
				)}
				style={centered}
			>
				<path d="M12 8v8" />
				<path d="M16 12H8" />
			</motion.g>
		</>
	),
});
