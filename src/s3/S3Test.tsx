import { useState } from "react";
import AWS from 'aws-sdk'; // https://www.npmjs.com/package/aws-sdk

// https://javascript.plainenglish.io/how-to-upload-files-to-aws-s3-in-react-591e533d615e

const S3_BUCKET = 'static-project-hosting';
const REGION = 'us-east-2';

AWS.config.update({
  accessKeyId: 'AKIA2SVT2GZ7UEGFPZIP',
  secretAccessKey: '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',
  httpOptions: {
    timeout: 0,
    connectTimeout: 0
  }
})
const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
})
const S3Test = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<React.SetStateAction<File>>({} as File);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.currentTarget.files![0])
  }

  const uploadFile = (file: React.SetStateAction<File>) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    };

    myBucket.putObject(params).on('httpUploadProgress', (evt) => {
      console.log(evt);
      setProgress(Math.round((evt.loaded / evt.total) * 100))
    }).send((err) => {
      if (err) console.log(err)
    })
  }

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  )
}

export default S3Test