function Home() {

    const fruits = ['Apple', 'Orange', 'Pear'];


    const listFruits = fruits.map( (fruit, currentIndex) => {
     
        return <p>{fruit}</p>;
    } )

    return (
        <div>
            <h1>This is the Home page</h1>
            { listFruits }
        </div>
    )
}
export default Home;