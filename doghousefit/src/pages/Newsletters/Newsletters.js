import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
// import Paginator from './Paginator'
import IssueCard from './IssueCard';

const Newsletters = () => {
    return (
        <>
            <Navbar />
            {/* <Paginator /> */}
            <div className="newsletter-container">
                <h1>Newsletters</h1>
                <hr></hr>
                <div className="newsletter-wrapper">  
                    <IssueCard />
                    <IssueCard />
                    <IssueCard />
                    <IssueCard />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Newsletters;