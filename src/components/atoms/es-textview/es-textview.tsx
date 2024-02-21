import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';

const EsTextView = ({ code, onCopy, copied, ...props }: any) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const lines = expanded ? code.split('\n') : code.split('\n').slice(0, 10);

    console.log(lines);

    return (
        <div className='es-code'>

            <div className='es-top-left'>
                <CopyToClipboard
                    text={code}
                    onCopy={onCopy}>
                    <button>{copied ? 'Copiado' : 'Copiar'}</button>
                </CopyToClipboard>
            </div>

            <div>
                <SyntaxHighlighter
                    language="html"
                    style={atelierHeathDark}
                    showLineNumbers={true}>
                        {lines.join("\n")}
                </SyntaxHighlighter>
                {!expanded && (
                    <button style={{backgroundColor: 'var(--color-gray-400)'}} onClick={handleExpand}>Ver todo el código...</button>
                )}
            </div>

        </div>
    );
};

export default EsTextView;