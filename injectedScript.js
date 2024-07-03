(function() {
    console.log('Injected script running');
    var editor = monaco.editor.getModels()[0];
    var codeElement = document.getElementById('codeContainer');
    if (!codeElement) {
      codeElement = document.createElement('div');
      codeElement.id = 'codeContainer';
      codeElement.style.display = 'none';
      document.body.appendChild(codeElement);
    }
    if (editor) {
      console.log('Editor instance found');
      var code = editor.getValue();
      
      codeElement.setAttribute('data-code', code);
    } else {
      console.log('Editor instance not found');
      codeElement.setAttribute('data-code', 'Editor not found');
    }
  })();
  
  