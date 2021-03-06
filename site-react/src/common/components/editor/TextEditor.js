import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const style_formats= [
  { title: 'Image Left', selector: 'pre', styles: { 'float': 'left', 'margin': '0 10px 0 10px' } },
]

const TextEditor = (props) => {
  const {post} = props;
  const [postContent, setPostContent] = useState(post.content);

  const handleEditorChange = (content, editor) => {
    setPostContent(content);
    post.newContent = content;
  }

  return (
    <Editor
      id="codeEditor"
      apiKey="wefhnu0ma6zh07117uwxwjj5ila4m1d1y16pp4e59wbc6log"
      
      initialValue={postContent}
      init={{
        height: 500,
        style_formats,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code codesample image'
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | codesample | image | code'
      }}
      onEditorChange={handleEditorChange}
    />
  );

}

export default TextEditor; 