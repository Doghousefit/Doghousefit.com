const Pagination = ({ issuesPerPage, totalIssues, paginate }) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalIssues/ issuesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href='#newsletter-container'>
                        {number}
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Pagination;