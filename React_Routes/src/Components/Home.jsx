function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {
                import("../Sum.jsx").then((module) => {
                    alert(module.default(2, 2))
                })
            }}>Add Value 2 + 3
            </button>
        </div>
    );
}

export default Home;
