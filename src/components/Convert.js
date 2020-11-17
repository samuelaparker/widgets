import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Convert({ language, text }) {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { //this second object is because google requires the paramters to be send as query string parameters
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }
            );

            setTranslated(data.data.translations[0].translatedText);
        }
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
};

export default Convert

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// POST https://translation.googleapis.com/language/translate/v2
