import React from 'react';

const randomUid = () => Math.floor(Math.random() * 100000);

type ReactSummernoteProps = {
  name?: string;
  className?: string;
  placeholder?: string;
  codeview?: boolean;
  math?: boolean;
  value?: string;
  disabled?: boolean;
  options?: any;
  onInit?: (init: any) => void;
  onChange?: (content: string, delta: any, source: string, editor: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onEnter?: (event: any) => void;
  onKeyup?: (event: any) => void;
  onKeydown?: (event: any) => void;
  onPaste?: (event: any) => void;
  onImageUpload?: (images: any, insertImage: (url: string) => void) => void;
};

class ReactSummernote extends React.Component<ReactSummernoteProps> {
  uid: string;
  editor: any;
  noteEditable: any;
  notePlaceholder: any;

  constructor(props: ReactSummernoteProps) {
    super(props);

    this.uid = `react-summernote-${randomUid()}`;
    this.editor = {};
    this.noteEditable = null;
    this.notePlaceholder = null;

    this.onInit = this.onInit.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);

    this.focus = this.focus.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.reset = this.reset.bind(this);
    this.replace = this.replace.bind(this);
    this.disable = this.disable.bind(this);
    this.enable = this.enable.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.insertImage = this.insertImage.bind(this);
    this.insertNode = this.insertNode.bind(this);
    this.insertText = this.insertText.bind(this);

    // ReactSummernote.focus = this.focus.bind(this);
    // ReactSummernote.isEmpty = this.isEmpty.bind(this);
    // ReactSummernote.reset = this.reset.bind(this);
    // ReactSummernote.replace = this.replace.bind(this);
    // ReactSummernote.disable = this.disable.bind(this);
    // ReactSummernote.enable = this.enable.bind(this);
    // ReactSummernote.toggleState = this.toggleState.bind(this);
    // ReactSummernote.insertImage = this.insertImage.bind(this);
    // ReactSummernote.insertNode = this.insertNode.bind(this);
    // ReactSummernote.insertText = this.insertText.bind(this);
  }

  componentDidMount() {
    const options = this.props.options || {};
    const codeview = this.props.codeview;
    // const codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';
    options.callbacks = this.callbacks;

    this.editor = $(`#${this.uid}`);
    this.editor.summernote(options);
    if (codeview) {
      this.editor.summernote('codeview.activate');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: ReactSummernoteProps) {
    const { props } = this;

    const codeview = nextProps.codeview;
    const codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';


    if (typeof nextProps.value === 'string' && props.value !== nextProps.value) {
      this.replace(nextProps.value);
    }

    if (typeof nextProps.disabled === 'boolean' && props.disabled !== nextProps.disabled) {
      this.toggleState(nextProps.disabled);
    }
    if (codeview !== props.codeview) {
      this.editor.summernote(codeviewCommand);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (this.editor.summernote) {
      this.editor.summernote('destroy');
    }
  }

  onInit() {
    const { disabled, onInit, value } = this.props;

    const $container = this.editor.parent();
    this.noteEditable = $container.find('.note-editable');
    this.notePlaceholder = $container.find('.note-placeholder');

    if (typeof disabled === 'boolean') {
      this.toggleState(disabled);
    }

    if (typeof onInit === 'function') {
      onInit({
        summernote: this.editor.summernote.bind(this.editor),
        focus: this.focus,
        isEmpty: this.isEmpty,
        reset: this.reset,
        replace: this.replace,
        disable: this.disable,
        enable: this.enable,
        insertImage: this.insertImage,
        insertNode: this.insertNode,
        insertText: this.insertText
      });
    }

    // Text initializer
    // The paste should be an event so summernote cleans the code
    if (!value) return

    let pasteEvent: any = new CustomEvent('paste');
    pasteEvent.clipboardData = {
      getData: function () {
        return value;
      },
      types: ['text/html']
    }

    this.replace('')
    this.noteEditable[0].dispatchEvent(pasteEvent)

  }

  onImageUpload(images: any) {
    const { onImageUpload } = this.props;

    if (typeof onImageUpload === 'function') {
      onImageUpload(images, (this.insertImage as any));
    }
  }

  focus() {
    this.editor.summernote('focus');
  }

  isEmpty() {
    return this.editor.summernote('isEmpty');
  }

  reset() {
    this.editor.summernote('reset');
  }

  replace(content: any) {
    const { noteEditable, notePlaceholder } = this;
    const prevContent = noteEditable.html();
    const contentLength = content.length;

    if (prevContent !== content) {
      if (this.isEmpty() && contentLength > 0) {
        notePlaceholder.hide();
      } else if (contentLength === 0) {
        notePlaceholder.show();
      }

      noteEditable.html(content);
    }
  }

  disable() {
    this.editor.summernote('disable');
  }

  enable() {
    this.editor.summernote('enable');
  }

  toggleState(disabled: any) {
    if (disabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  insertImage(url: any, filenameOrCallback: any) {
    this.editor.summernote('insertImage', url, filenameOrCallback);
  }

  insertNode(node: any) {
    this.editor.summernote('insertNode', node);
  }

  insertText(text: any) {
    this.editor.summernote('insertText', text);
  }

  get callbacks() {
    const props = this.props;

    return {
      onInit: this.onInit,
      onEnter: props.onEnter,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onKeyup: props.onKeyup,
      onKeydown: props.onKeydown,
      onPaste: props.onPaste,
      onChange: (...args: [any, any, any, any]) => {
        if (args[0][0] !== '<') {
          this.editor.summernote('undo');
          return
        }
        props.onChange && props.onChange(...args)
      },
      onImageUpload: this.onImageUpload
    };
  }

  render() {
    const { className, placeholder } = this.props;

    return (
      <div className={className}>
        <div id={this.uid} className="summernote" placeholder={placeholder}></div>
      </div>
    );
  }
}

export default ReactSummernote;
