export function Profile() {
	return (
		<>
			<img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
		</>
	);
}

export function Text() {
	return (
		<>
			<h1>了不起的科学家们</h1>
		</>
	);
}

function Gallery() {
	return (
		<>
			<section>
				<Text />
				<Profile />
				<Profile />
				<Profile />
			</section>
		</>
	);
}

// 在同一个文件中有且仅有一个默认导出, 但可以多个具名导出
export default Gallery;
