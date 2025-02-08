// app/page.js (with session check)

export default async function Page() {
    // Assuming you are checking for a session somehow
    const session = getSession();  // replace with your session fetching logic
  
    if (!session) {
      return (
        <div>
          <h1>Unauthorized</h1>
          <p>You need to log in to view this page.</p>
        </div>
      );
    }
  
    // Fetch data only if session exists
    const res = await fetch('https://your-api-endpoint.com/data');
    const data = await res.json();
  
    return (
      <div>
        <h1>Page Content</h1>
        {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
      </div>
    );
  }
  