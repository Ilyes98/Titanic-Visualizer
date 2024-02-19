import React, { useState } from 'react';
import '../styles/FileUpload.css';

function FileUpload({ handleUpload, loading }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadSuccess(false);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      handleUpload(selectedFile);
      setUploadSuccess(true);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setUploadSuccess(false);
  };

  return (
    <div className="FileUpload">
      {!uploadSuccess && (
        <>
          <input type="file" onChange={handleFileChange} disabled={loading || uploadSuccess} />
          <button onClick={handleUploadClick} disabled={!selectedFile || loading}>
            {loading ? 'Uploading...' : 'Upload File'}
          </button>
        </>
      )}
      {loading && <p>Uploading...</p>}
      {uploadSuccess && (
        <div className="success-message">
          <p>File uploaded successfully!</p>
          <button onClick={handleClearFile}>Upload Another File</button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
