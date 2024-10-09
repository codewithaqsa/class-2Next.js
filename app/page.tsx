import Link from "next/link"

const Home = () => {
  return (
    <div>
      <ul>

        <Link href="/"><li>Home</li></Link>
        <Link href="/about-us"><li>About</li></Link>
        <Link href="career"><li>Career</li></Link>
        <Link href="/about-us/aqsa/education"><li>Aqsa</li></Link>
         {/* <Link href="education"><li>Education</li></Link>  */}
        
      </ul>
      <h1>This is Home Page</h1>
    </div>
  );
};

export default Home;