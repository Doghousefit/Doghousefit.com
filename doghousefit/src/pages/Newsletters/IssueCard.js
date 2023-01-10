const IssueCard = (props) => {
    const tags = props.issueTags
    const tagElements = tags.map((tag, index) => {
        return <li key="index">{tag}</li>
    })

    console.log(props.issueTags);

    return (
        <>
            <div className="issue-card">
                <div className="temp-image">
                    image
                </div>
                <div className="issue-description">
                    <h4 className="issue-number"><a href={"newsletters/" + props.issueNumber}>Issue #{props.issueNumber}</a></h4>
                    <ul className="issue-tags">{tagElements}</ul>
                    <h3 className="issue-title"><a href={"newsletters/" + props.issueNumber}>{props.issueTitle}</a></h3>
                    <h6 className="issue-credits">{props.issueAuthor} {props.issueDate}</h6>
                </div>
            </div>
        </>
    )
}
IssueCard.defaultProps = {
    issueNumber: "1",
    issueTitle: "title",
    issueAuthor: "andrie",
    issueDate: "1/1/23",
    issueTags: ["tag1", "tag2"]
}

export default IssueCard