import React from 'react';
import {HtmlEditor} from "devextreme-react";

type EditorTestProps = {
  editorContent: string
};
export const EditorTest = (props: EditorTestProps) => {
  return <div>
    <strong className="issue-label">Текст обращения</strong>.
    <HtmlEditor
      value={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
      readOnly
      style={{
        minHeight: '200px',
        maxHeight: '350px',
        textAlign: 'left',

      }}
    />
  </div>
}