import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

const EsCodeEditor = ({ label, value, onChange, placeholder, spellCheck, ...props }: any) => {
    const editorRef: any = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }

    return (
        <div>
            <Editor
                theme='vs-dark'
                height="16rem"
                defaultLanguage="java"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
            />
        </div>
    );
};

export default EsCodeEditor;