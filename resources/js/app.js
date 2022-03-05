require('./bootstrap');
import Editor from '@toast-ui/editor'
// import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const editor = new Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical',
});
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#content').value = editor.getMarkdown();
    e.target.submit();
});
function hide()
{

        alert('hi');
        editor.hide();
}

function show()
{
    editor.show();
}
editor.getMarkdown();
