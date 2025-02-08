// pages/page.js

export async function getServerSideProps(context) {
    const session = getSessionFromContext(context); // your session fetching logic
    if (!session) {
      return {
        notFound: true, // Return 404 if no session is found
      };
    }
  
    // Fetch data if session exists
    const data = await fetchDataBasedOnSession(session);
  
    return {
      props: { data }, // Pass the fetched data to the page
    };
  }
  
  const Page = ({ data }) => {
    return (
      <div>
        <h1>Page Content</h1>
        {/* Render the data */}
        {data ? <div>{JSON.stringify(data)}</div> : <p>No data available</p>}
      </div>
    );
  };
  
  export default Page;
  