const IssueCards = ({ issues }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
      
        return dateString ? monthNames[monthIndex] + ' ' + day + ', ' + year : "";
    }
    
    return (
        issues.map(issue => {
            return <>
            <div className="issue-card">
                <div className="temp-image">
                    image
                </div>
                <div className="issue-description">
                    <h4 className="issue-number"><a href={"newsletters/" + issue.issue}>Issue #{issue.issue}</a></h4>
                    <ul className="issue-tags">{issue.tags.map(tag => {return <li>{tag}</li>})}</ul>
                    <h3 className="issue-title"><a href={"newsletters/" + issue.issue}>{issue.title}</a></h3>
                    <h6 className="issue-credits">{formatDate(issue.date)}</h6>
                </div>
            </div>
            </>
        })
    )
}

export default IssueCards