import Link from "next/link";

const Education = () => {
    return(
        <div>
        <h1>Education</h1>
        <ul>
            <li>Matric with A grade</li>
            <li>Intermediate with B grade</li>
            <li>Bachelors in Commerce with second division</li>
        </ul>

         <Link href="/">Go back to home page</Link> 
        </div>
    );
};
export default Education;