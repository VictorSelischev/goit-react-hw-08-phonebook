const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 32,
        textAlign: 'center',
    },
    paragraph: {
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'center',
    }
}

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title} >Hello friend!</h1>
            <p style={styles.paragraph} >Please register and login in your contacts list</p>
        </div>
    );
}

export default Home;