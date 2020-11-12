import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        };
        search();
    }, [term]);

    const renderedResults = results.map((results) => {
        return <div className="item">
            <div className="content">
                <div className="header">
                    {results.title}
                </div>
                {results.snippet}
            </div>
        </div>
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input
                        className="input"
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;     
