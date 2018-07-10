// @flow
const colors = {
	turquoise: '#1abc9c',
	green_sea: '#16a085',
	emerald: '#2ecc71',
	nephritis: '#27ae60',
	peter_river: '#3498db',
	belize_hole: '#2980b9',
	amethyst: '#9b59b6',
	wisteria: '#8e44ad',
	wet_asphalt: '#34495e',
	midnight_blue: '#2c3e50',
	sun_flower: '#f1c40f',
	orange: '#f39c12',
	carrot: '#e67e22',
	pumpkin: '#d35400',
	alizarin: '#e74c3c',
	pomegranate: '#c0392b',
	clouds: '#ecf0f1',
	silver: '#bdc3c7',
	concrete: '#95a5a6',
	asbestos: '#7f8c80'
};

export function getColors(): Array<string> {
	return Object.keys(colors).map(colorName => colors[colorName]);
}

export default colors;
