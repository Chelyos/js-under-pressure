import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { editorSlice } from '../../store/editor';
import { RootState } from '../../store/reducer';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');

export const EditorJs = () => {
  const code = useSelector((state: RootState) => state.editor.code);
  const [state, setState] = useState(code);
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editorSlice.actions.editorCode(state));
  }, [dispatch, state]);

  const codeMirrorOptions = {
    theme: 'material .CodeMirror { height: 1000px;}',
    lineNumbers: true,
    scrollbarStyle: null,
    lineWrapping: true,
  };

  const options = { mode: 'javascript', ...codeMirrorOptions };
  return (
    <div className='js-code'>
      <CodeMirror
        value={code}
        options={options}
        ref={React.createRef()}
        className={styles.codeMirror}
        onBeforeChange={(_editor, _data, value) => {
          setState(value);
        }}
        onChange={(_editor, _data, _value) => {}}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  codeMirror: {
    backgroundColor: '#3B464F',
    borderRadius: '20px',
    justifyContent: 'center',
  },
});
