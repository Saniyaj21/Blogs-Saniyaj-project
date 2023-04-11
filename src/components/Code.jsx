import React from 'react'

const Code = ({ code }) => {


    return (
        <div className="code-snippet">
            <pre><code className="language-javascript">{code}</code></pre>

        </div>
    );
};


export default Code