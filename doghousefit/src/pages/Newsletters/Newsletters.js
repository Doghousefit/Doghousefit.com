import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Pagination from './Pagination'
import IssueCards from './IssueCards';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Newsletters = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [issuesPerPage, setIssuesPerPage] = useState(5);

    useEffect(() => {
        // console.log(`${process.env.REACT_APP_BACKEND_API}/newsletters`)
        
        const fetchIssue = async () => {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/newsletters`)
                .then(res => {
                    setIssues(res.data)
                    setLoading(false)
                }).catch(error => {
                    console.log(error)
                })
            }

            fetchIssue()
    }, [])
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue)

    return (
        <>
            <Navbar />
            <div className="newsletter-container" id='newsletter-container'>
                <h1>Newsletters</h1>
                <hr></hr>
                <div className="newsletter-wrapper">
                    <IssueCards issues={currentIssues} />
                    <Pagination 
                        issuesPerPage={issuesPerPage} 
                        totalIssues={issues.length} 
                        paginate={paginate} 
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Newsletters;