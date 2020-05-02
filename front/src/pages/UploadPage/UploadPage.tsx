import * as React from 'react';
import {cn} from "@bem-react/classname";

import {FileUploadRequest, FileUploadResponse} from "../../utils/apiTypes";
import UploadForm from "../../components/UploadForm/UploadForm";

import './UploadPage.css';

interface UploadPageProps {
  sendData: (fileUploadRequest: FileUploadRequest) => Promise<FileUploadResponse>;
}

interface UploadPageState {
  fileUploadResponse?: FileUploadResponse;
}

const cnBuildPage = cn('UploadPage');

class UploadPage extends React.Component<UploadPageProps, UploadPageState> {
  constructor(props: UploadPageProps) {
    super(props);
    this.state = {
      fileUploadResponse: undefined
    }
  }

  render() {
    const {
      props: { sendData },
    } = this;

    return (
      <div className={cnBuildPage()}>
        <h4>Upload pdf documents about electronic components</h4>
        <UploadForm {...{sendData}} />
      </div>
    )
  }
}

export default UploadPage;
