import "./index.css";
export default ({ url, title } = {}) => {
	return (
		<>
			<main>
				<h1>{title}</h1>
				<div class="workers-logo"></div>
				<p>
					Welcome This is a demo of Preact being rendered using SSR with Vite.
					The SSR render runs <i>in workerd</i>.
				</p>
			</main>
		</>
	);
};
