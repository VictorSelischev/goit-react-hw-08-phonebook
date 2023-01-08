const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
      marginTop: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 40,
    textAlign: 'center',
  },
  paragraph: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello friend!</h1>
      <p style={styles.paragraph}>
        Please register and login to go to your contacts list
      </p>
    </div>
  );
};

export default Home;
