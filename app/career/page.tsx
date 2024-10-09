import Link from "next/link";


const Career = () => {
    return (
        <div>
            <h1>Career Page</h1>
            <p>We are hiring! check out our open positions.</p>
            <ul>
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
            </ul>
            <Link href="/">Go back to home page</Link>
        </div>
    );
};
export default Career;