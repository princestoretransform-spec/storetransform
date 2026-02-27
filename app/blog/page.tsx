async function getPosts() {
  const res = await fetch("http://localhost:1337/api/blogs?populate=*");
  const data = await res.json();
  return data.data;
}
import Banner from "./components/Banner";


export default async function Blog() {
  const posts = await getPosts();
  return (

    <>
         <Banner />

    <main style={styles.container}>
      <h1 style={styles.heading}>Our Blog</h1>

      <div style={styles.grid}>
        {posts?.map((post: any) => (
          <div key={post.id} style={styles.card}>
            
            {/* Image */}
            {post.Image && (
              <img
                src={`http://localhost:1337${post.Image.url}`}
                alt={post.Title}
                style={styles.image}
              />
            )}

            {/* Content */}
            <div style={styles.content}>
              <h2 style={styles.title}>{post.Title}</h2>
              <p style={styles.description}>
                {post.Description}
              </p>

              <a href={`/blog/${post.id}`} style={styles.button}>
                Read More
              </a>
            </div>

          </div>
        ))}
      </div>
    </main>
   </>
  );
  
}

const styles: any = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#555",
  },
  button: {
    display: "inline-block",
    padding: "10px 18px",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
  },
};