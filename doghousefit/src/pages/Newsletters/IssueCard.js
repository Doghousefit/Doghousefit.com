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
                    <h4 className="issue-number">Issue #{props.issueNumber}</h4>
                    <ul className="issue-tags">
                        {tagElements}
                    </ul>
                    <h3 className="issue-title">{props.issueTitle}</h3>
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