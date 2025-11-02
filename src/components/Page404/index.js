import Style from "./Page404.module.scss";
import Link from "next/link";
import Animate from "../Animate/animate";


const Page404 = ({ props }) => {
 return (
 <section className={Style.page404}>
        <div className="container text-center text-white">
                <Animate className={`${Style.page404Wrap}  animate-fadein`}>
                        <h1 className={`${Style.title} mb-md-0`}>404</h1>
                        <h2 className={`${Style.subtitle} mb-md-5 mb-4`}>Page not found!</h2>
                        <p>We&apos;re unable to find the page your are looking for.</p>
                        <div className="pt-md-5 pt-4" >
                            <Link
                                href={`/`}
                                className={`btn btn btn-primary`}
                            >
                                Back to Home
                             </Link>
                    </div>
                </Animate>
        </div>
 </section>
);
 };
export default Page404;