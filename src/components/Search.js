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

        if (term && !results.length) { 
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }


    }, [term, results.length]);

    const renderedResults = results.map((results) => {
        return <div key={results.pageid} className="item">
            <div className="right floated content">
                <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${results.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {results.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
            </div>
        </div>
    });
    //Alternative to dangereouslySetInnerHTML using RegEx
    // const renderedResults = results.map((result) => {
    //     const regex = /(<([^>]+)>)/gi;  //NEW
    //     const cleanSnippet = result.snippet.replace(regex, ""); //NEW 

    //     return ( // {result.snippet} was replaced with {cleanSnippet} 
    //       <div key={result.pageid} className="item">
    //         <div className="content">
    //           <div className="header">{result.title}</div>
    //           {cleanSnippet} 
    //         </div>
    //       </div>
    //     );
    //   });

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
