import Navbar from "../../components/Navbar";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Issue = () => {
    const { id } = useParams();
    // const [res.data, setres.data] = useState()
    const [issue, setIssue] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [tags, setTags] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:3001/newsletters/${id}`)
            .then(
                res => {
                    console.log(res.data[0])
                    setIssue(res.data[0].issue)
                    setTitle(res.data[0].title)
                    setDate(res.data[0].date)
                    setTags(res.data[0].tags)
                }
            )
            .catch(error => {
                console.log(error)
              })
        
    }, [])

    return (
        <>
            <Navbar />
            <h1>Issue #: {issue}</h1>
        </>
    )
}

export default Issue;