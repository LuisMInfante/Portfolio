const projects = [
	{
		title: 'Simple Raytracer',
		technologies: [
			{ name: 'cpp', iconUrl: null, alt: 'C++', url: 'https://isocpp.org/'},
			{ name: 'glfw', iconUrl: 'https://camo.githubusercontent.com/a9db60d147588c76634f8e08d11370be8064417d2abaf3c677467d340fbea237/68747470733a2f2f7777772e736161736875622e636f6d2f696d616765732f6170702f736572766963655f6c6f676f732f33382f6234386363383563656262322f6c617267652e706e673f31353533323434303234', alt: 'GLFW', url: 'https://www.glfw.org/'},
			{ name: 'imgui', iconUrl: 'https://raw.githubusercontent.com/wiki/sammyfreg/netImgui/Web/img/DearImGui.png', alt: 'ImGui', url: 'https://github.com/ocornut/imgui'},
			{ name: 'premake', iconUrl: 'https://premake.github.io/img/premake-logo.png', alt: 'Premake', url: 'https://premake.github.io/'}
		],
		description:[
				'Real-time CPU based Ray Tracer that displays Spheres using Physically Based Rendering principles',
				'Utilized C++ multi-threading to improve performance by 50%',
				'Implemented path tracing for more accurate rendering results'
			],
		url: 'https://github.com/LuisMInfante/SimpleRaytracer'
	},
	{
		title: 'FEPrep',
		technologies: [
			{ name: 'ts', iconUrl: null, alt: 'TypeScript', url: 'https://www.typescriptlang.org/'},
			{ name: 'react', iconUrl: null, alt: 'React', url: 'https://react.dev/'},
			{ name: 'nextjs', iconUrl: null, alt: 'Next.js', url: 'https://nextjs.org/'},
			{ name: 'tailwind', iconUrl: null, alt: 'Tailwind CSS', url: 'https://tailwindcss.com/'},
			{ name: 'figma', iconUrl: null, alt: 'Figma', url: 'https://www.figma.com/'},
		],
		description: [
			'Developed the front-end of a Next.js application with over 200 users',
			'Designed to prepare UCF students for the Computer Science Entrance Exam focused on Data Structures and Algorithms',
			'Utilized shadcn/ui library to create Sign In/Sign Up forms',
			'Leveraged React Forms and tRPC, along with Lucia Auth, to validate accounts'
		],
		url: 'https://FEPrep.org'
	},
	{
		title: '3D Platformer',
		technologies: [
			{ name: 'cpp', iconUrl: null, alt: 'C++' , url: 'https://isocpp.org/'},
			{ name: 'unreal', iconUrl: null, alt: 'Unreal Engine', url: 'https://www.unrealengine.com/'},
		],
		description: [
			'Developed a 3D Platforming game inspired by Super Mario 3D World',
			'Implemented online multiplayer utilizing the Steam Online Subsystem',
			'Implemented movement mechanics inspired by Super Mario 64, including the iconic triple jump'
		],
		url: 'https://github.com/LuisMInfante/3DPlatformer'
	},
	// {
	// 	title: '3rd Person Shooter',
	// 	technologies: [
	// 		{ name: 'cpp', iconUrl: null, alt: 'C++' , url: 'https://isocpp.org/'},
	// 		{ name: 'unreal', iconUrl: null, alt: 'Unreal Engine', url: 'https://www.unrealengine.com/'},
	// 	],
	// 	description: [
	// 		'Developed a 3rd person shooter where players must defeat all enemies in order to win',
	// 		'Implemented enemy AI class to target and chase player using Unreal Engine\'s behavior trees and blackboard',
	// 		'Implemented particle effects using On-Hit events during combat'
	// 	],
	// 	url: 'https://github.com/LuisMInfante/3rdPersonShooter'
	// },
	{
		title: 'Wall Climber',
		technologies: [
			{ name: 'py', iconUrl: null, alt: 'Python' , url: 'https://www.python.org/'},
			{ name: 'cpp', iconUrl: null, alt: 'C++' , url: 'https://isocpp.org/'},
			{ name: 'opencv', iconUrl: null, alt: 'OpenCV', url: 'https://opencv.org/'},
			{ name: 'arduino', iconUrl: null, alt: 'Arduino', url: 'https://www.arduino.cc/'},
			{ name: 'raspberrypi', iconUrl: null, alt: 'RaspberryPi', url: 'https://www.raspberrypi.com/'},
		],
		description: [
			'Developed a robot that navigates autonomously through a re-configurable vertical maze with the aid of a camera',
			'Implemented serial communication over Bluetooth, reducing robot weight and size by 83%',
			'Utilized OpenCV and Dijkstra\'s algorithm for optimal pathfinding'
		],
		url: 'https://github.com/RoboticsClubatUCF/Wall-Climber'
	},
];

export default projects;
