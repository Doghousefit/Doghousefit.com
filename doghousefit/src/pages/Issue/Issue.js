import Navbar from "../../components/Navbar";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const Issue = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [issueData, setIssueData] = useState({
        issue: undefined,
        title: undefined,
        date: undefined,
        tags: undefined
    });
    
    useEffect(() => {
        console.log(`${process.env.api}/newsletters/${id}`)
        axios.get(`${process.env.api}/newsletters/${id}`)
            .then(res => {
                console.log(res.data[0])

                // Redirects if there is no newsletter
                if(res.data[0] === undefined) {
                    navigate('/newsletters')
                }

                setIssueData({
                    issue: res.data[0].issue,
                    title: res.data[0].title,
                    date: res.data[0].date,
                    tags: res.data[0].tags
                });
            }).catch(error => {
                console.log(error)
            })
        }, [])
        
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
          
            return monthNames[monthIndex] + ' ' + day + ', ' + year;
          }

        return (
            <>
                <Navbar />
                <h1>Issue #: {issueData.issue}</h1>
                <h1>Title: {issueData.title}</h1>
                <h1>Date: {formatDate(issueData.date)}</h1>
                <h1>Tags: {issueData.tags?.map((tag) => <li key={tag}>{tag}</li>)} </h1>
            </>
        )
}

export default Issue;