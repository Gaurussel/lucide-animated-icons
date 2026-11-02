import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const shaft = pose({ y: [0, -3, 4, 0] }, { duration: 0.7, times: [0, 0.18, 0.36, 1], ease: [snap, "easeIn", springy] });
const head = pose({ y: [0, -4, 5, 0] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], ease: [snap, "easeIn", springy] });
const dip = pose({ y: [0, 0, 2, 0] }, { duration: 0.7, times: [0, 0.34, 0.44, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "import",
	render: (part) => (
		<>
			<motion.path {...part(shaft)} d="M12 3v12" />
			<motion.path {...part(head)} d="m8 11 4 4 4-4" />
			<motion.g {...part(dip)}>
				<motion.path
					{...part(jelly(0.4, 0.7))}
					d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
					style={edge(0.5, 1)}
				/>
			</motion.g>
		</>
	),
});
