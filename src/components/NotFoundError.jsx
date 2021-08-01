function NotFoundError() {
	return (
		<div className="font-poppins flex h-screen">
			<div className="text-center m-auto mt-40">
				<h1 className="text-2xl font-bold my-3"> ERROR: 404 </h1>{" "}
				<h2 className="text-xl my-3 font-semibold"> Not Found </h2>{" "}
				<h6 className="text-xl my-3 font-semibold">
					Something is wrong this page doesn't exist in our server
				</h6>
			</div>
		</div>
	);
}

export default NotFoundError;
