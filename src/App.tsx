// import React, { useState } from 'react';
import { SourceMapGenerator, SourceMapConsumer } from 'source-map';

export default function App() {
	const map = new SourceMapGenerator({
		// 源码 映射关联 的生成源码 的文件名
		file: './08-小册学习.tsx'
		// sourceRoot // 源码相对 URL 的根目录
	});
	// 添加一个映射
	map.addMapping({
		generated: {
			line: 10,
			column: 35
		},
		source: './01-React快速入门.tsx',
		original: {
			line: 33,
			column: 2
		},
		name: 'christopher'
	});

	map.addMapping({
		generated: {
			line: 10,
			column: 35
		},
		source: './07-将Props传递给组件.tsx',
		original: {
			line: 33,
			column: 2
		},
		name: 'christopher'
	});
	console.log(map.toString());
	console.log(map);
	// eval 的 api 是动态执行 JS 代码的
	// eval(`function add(a,b) { return a + b } console.log(add(1,2))`) // 控制台直接执行
	// eval(` ... //# sourceURL=file.js`) sources 生成该文件 再执行 eval(` ... //# sourceURL=file.js`) 打了断点会进入到断点内
	//
	return (
		<>
			<div>
				<h2>1</h2>
			</div>
		</>
	);
}
