import { useState, useEffect } from 'react';

// 创建一个对象来存储状态和缓存的结果
const pendingRequests = new Map();

function useMergedFetch(url: string) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			// 如果这个URL的请求已经在pending状态，直接使用它的promise
			if (pendingRequests.has(url)) {
				try {
					const response = await pendingRequests.get(url);
					setData(response);
				} catch (err: any) {
					setError(err);
				} finally {
					setLoading(false);
				}
			} else {
				// 如果没有pending的请求，发起新的请求并存储promise在pendingRequests中
				const fetchPromise = fetch(url)
					.then((response) => response.json())
					.catch((err) => {
						setError(err);
						throw err; // 保证能够在后续的catch里面捕获错误
					});

				// 存储Promise对象
				pendingRequests.set(url, fetchPromise);

				try {
					// 等待结果
					const response = await fetchPromise;
					setData(response);
				} catch (err: any) {
					setError(err);
				} finally {
					// 请求完成后从pendingRequests中移除
					pendingRequests.delete(url);
					setLoading(false);
				}
			}
		};

		fetchData();
	}, [url]);

	return { data, error, loading };
}

export default useMergedFetch;
